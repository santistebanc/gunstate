import Gun from "gun";
import { Document } from "flexsearch";
import "gun/lib/radix";
import "gun/lib/radisk";
import "gun/lib/store";
import "gun/lib/rindexed";

import { Button, Column, Input, Row, Text } from "./ui";
import { debounce, throttle_schedule } from "./utils";

if (process.env.NODE_ENV !== "development") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("/gunstate/serviceWorker.js")
        .then((res) => console.info("service worker registered"))
        .catch((err) => console.error("service worker not registered", err));
    });
  }
}

const gun = Gun({
  peers: [
    "http://localhost:3000/gun",
    "https://santicgunrelay.herokuapp.com/gun",
  ],
  localStorage: false,
});

window.gun = gun;

const terms = {};

const view = throttle_schedule((terms) => {
  Main(terms).render({
    el: document.querySelector("#root"),
  });
}, 300);
view();

const onInput = async ({ render }, e) => {
  const query = e.target.value;
  const queryTerms = {};
  if (!query) {
    view(Object.values(terms).reverse());
  } else {
    const results = await index.search(query, {
      pluck: "text",
    });
    results.forEach((result) =>
      gun.get(result).once((data) => {
        queryTerms[result.text] = data;
        view(Object.values(queryTerms));
      })
    );
  }
  render({ _inputVal: e.target.value });
};

function Searchbar() {
  return Row([
    Input({
      init: ({ _inputVal }) => ({ value: _inputVal }),
      className: "p-1",
      atts: {
        autocomplete: "on",
        inputmode: "search",
        placeholder: "🔎︎ search",
      },
      style: { flex: 1 },
      on_input: onInput,
    }),
    Button({
      className: "p-1",
      text: "add term",
      on_click: ({ _inputVal, render }) => {
        gun
          .get("terms")
          .get(_inputVal)
          .put({ text: _inputVal, lang: "eng", deleted: false });
        render({ _inputVal: "" });
      },
    }),
  ]);
}

function TermsList(terms = []) {
  return Column({
    tag: "ul",
    className: "p-1",
    _inputVal: "",
    children: terms.map((term) =>
      Text({
        tag: "li",
        text: term.text,
        on_dblclick: () => {
          term.deleted = true;
          gun.get("terms").get(term.text).put({ deleted: true });
        },
      })
    ),
  });
}

function Main(terms) {
  return Column([Searchbar(terms), TermsList(terms)]);
}

const index = new Document({
  tokenize: "full",
  worker: true,
  document: {
    id: "id",
    index: ["text"],
  },
});

const logIndexCount = debounce(() =>
  console.log("indexed " + Object.keys(terms).length + " terms")
);

gun
  .get("terms")
  .map()
  .on((term, a, b, c) => {
    if (term.deleted || (terms[term.text] && terms[term.text].deleted)) {
      index.remove(term["_"]["#"]);
      delete terms[term.text];
    } else {
      index.add({ id: term["_"]["#"], text: term.text });
      terms[term.text] = term;
      logIndexCount();
    }
    view(Object.values(terms).reverse());
  });
