import Gun from "gun";
import "gun/lib/open.js";
import { Button, Column, Input, Row, Text } from "./ui";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

const gun = Gun({
  peers: [
    "https://santicgunrelay.herokuapp.com/gun",
    "http://localhost:3000/gun",
  ],
});

window.gun = gun;

const index = new FlexSearch.Worker("performance");

gun
  .get("terms")
  .map()
  .once((term) => {
    console.log("indexing ", term["_"]["#"]);
    index.add(term["_"]["#"], term.text);
  });

const Searchbar = Row([
  Text("search:"),
  Input({
    on_input: async (_, e) =>
      console.log(e.target.value, await index.search(e.target.value)),
  }),
]);

const AddTerm = [
  Input({
    init: ({ _inputVal }) => ({ value: _inputVal }),
    on_input: ({ render }, e) => render({ _inputVal: e.target.value }),
  }),
  Button({
    text: "add term",
    on_click: ({ _inputVal, render }) => {
      gun
        .get("terms")
        .get(_inputVal)
        .put({ text: _inputVal, lang: "eng", deleted: false });
      render({ _inputVal: "" });
    },
  }),
];

const TermsList = (terms = []) =>
  Column({
    _inputVal: "",
    children: terms
      .filter((term) => !term.deleted)
      .map((term) =>
        Text({
          text: term.text,
          on_dblclick: () =>
            gun.get("terms/" + term.text).put({ deleted: true }),
        })
      ),
  });

const view = (terms) =>
  Column([Searchbar, TermsList(terms), ...AddTerm]).render({
    el: document.querySelector("#root"),
  });

gun.get("terms").open((terms) => view(Object.values(terms)).render());
