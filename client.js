import Gun from "gun";
import { Document } from "flexsearch";
import "gun/lib/radix";
import "gun/lib/radisk";
import "gun/lib/store";
import "gun/lib/rindexed";

import { Button, Column, Input, Row, Text } from "./ui";

if (process.env.NODE_ENV !== "development") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then((res) => console.log("service worker registered"))
        .catch((err) => console.log("service worker not registered", err));
    });
  }
}

const gun = Gun({
  peers: [
    "http://localhost:3000/gun",
    "https://santicgunrelay.herokuapp.com/gun",
  ],
});

window.gun = gun;

const terms = {};

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
        queryTerms[result] = data;
        view(Object.values(queryTerms));
      })
    );
  }
  render({ _inputVal: e.target.value });
};

const Searchbar = Row([
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
      gun.get("terms").get(_inputVal).put({ text: _inputVal, lang: "eng" });
      render({ _inputVal: "" });
      view(Object.values(terms));
    },
  }),
]);

const AddTerm = Row([
  Input({
    className: "p-1",
    init: ({ _inputVal }) => ({ value: _inputVal }),
    on_input: ({ render }, e) => render({ _inputVal: e.target.value }),
  }),
  Button({
    className: "p-1",
    text: "add term",
    on_click: ({ _inputVal, render }) => {
      gun.get("terms").get(_inputVal).put({ text: _inputVal, lang: "eng" });
      render({ _inputVal: "" });
    },
  }),
]);

const TermsList = (terms = []) =>
  Column({
    tag: "ul",
    className: "p-1",
    _inputVal: "",
    children: terms.map((term) =>
      Text({
        tag: "li",
        text: term.text,
        on_dblclick: () => {
          gun.get("terms/" + term.text).put({ deleted: true });
        },
      })
    ),
  });

function view(terms) {
  return Column([Searchbar, TermsList(terms)]).render({
    el: document.querySelector("#root"),
  });
}

const index = new Document({
  tokenize: "full",
  worker: true,
  document: {
    id: "id",
    index: ["text"],
  },
});

gun
  .get("terms")
  .map()
  .on((term) => {
    console.log("term", term);
    if (term.deleted) {
      index.remove(term["_"]["#"]);
      delete terms[term["_"]["#"]];
    } else {
      index.add({ id: term["_"]["#"], text: term.text });
      terms[term["_"]["#"]] = term;
    }
    view(Object.values(terms).reverse());
  });

setTimeout(
  () => console.log("indexed " + Object.keys(terms).length + " terms"),
  2000
);

gun.get("room-name<?10").set("carlos");
gun.get("room-name<?10").map().once(console.log);
