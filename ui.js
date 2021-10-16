import { Component } from "./component";

export const Row = (args) => {
  const props = Array.isArray(args) ? { children: args } : args;
  return Component({ style: { display: "flex" }, ...props });
};

export const Column = (args) => {
  const props = Array.isArray(args) ? { children: args } : args;
  return Component({
    style: { display: "flex", flexDirection: "column" },
    ...props,
  });
};

export const Text = (args) => {
  const props =
    typeof args === "string" || typeof args === "number"
      ? { text: String(args) }
      : args;
  return Component(props);
};

export const Input = (args) => {
  const props =
    typeof args === "string" || typeof args === "number"
      ? { value: String(args) }
      : args;
  return Component({
    tag: "input",
    atts: { type: "text", autocapitalize: "none" },
    ...props,
  });
};

export const Button = (args) => {
  const props =
    typeof args === "string" || typeof args === "number"
      ? { text: String(args) }
      : args;
  return Component({ tag: "button", ...props });
};
