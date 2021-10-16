//TODO: create a components global weakmap to map every component to their respective dom element. This may make 'parent' unnecesary

export const listeners = new WeakMap();
export function setListeners(props) {
  //remove current listeners
  listeners.get(props.el)?.forEach(({ trigger, listener }) => {
    props.el.removeEventListener(trigger, listener);
    listeners.get(props.el).delete(listener);
  });
  Object.entries(props)
    .filter(([k]) => k.startsWith("on_"))
    .forEach(([name, action]) => {
      const trigger = name.slice(3);
      const listener = (event) => action.call(props, props, event);

      props.el.addEventListener(trigger, listener);
      listeners.set(props.el, listeners.get(props.el) ?? new Map());
      listeners.get(props.el).set(action, { trigger, listener });
    });
}

function assignRender(props) {
  props.render =
    props.render ??
    ((passedProps = {}) => {
      const inheritedProps = passedProps.parent
        ? Object.fromEntries(
            Object.entries(passedProps.parent).filter(([key]) =>
              key.startsWith("_")
            )
          )
        : {};
      const newProps = { ...props, ...inheritedProps, ...passedProps };
      if (!passedProps.parent && props.parent?.children?.[props.key]) {
        const inheritedPropsUpdated = Object.fromEntries(
          Object.entries(passedProps).filter(([key]) => key.startsWith("_"))
        );
        return props.parent.render({
          ...inheritedPropsUpdated,
          children: {
            ...props.parent.children,
            [props.key]: {
              ...props,
              render: (passedProps = {}) =>
                render({ ...newProps, ...passedProps }, props),
            },
          },
        }).children[props.key];
      }
      return render(newProps, props);
    });
}

function assignElement(props) {
  if (!props.el) {
    const tag = props.tag ?? (props.text ? "span" : "div");
    if (
      props.parent?.el &&
      props.parent.el.childNodes[props.index]?.tagName?.toLowerCase() === tag
    ) {
      props.el = props.parent.el.childNodes[props.index];
    } else {
      props.el = document.createElement(tag);
    }
  }
}

export function render(passedProps = {}, prevProps = {}) {
  const props = {
    ...passedProps,
    ...(passedProps.init?.({ ...passedProps }, prevProps) ?? {}),
  };

  assignRender(props);
  assignElement(props);

  const { el, text, children, style, onChange, atts, value, parent } = props;

  if (children) {
    props.children = Object.fromEntries(
      Object.values(children).map((it, index) => [
        index,
        it.render({ parent: props, key: it.key ?? index, index }),
      ])
    );

    //remove leftover childNodes
    if (el) {
      for (let childEl of el.childNodes) {
        if (!Object.values(props.children).some((ch) => ch.el === childEl)) {
          childEl.parentElement.removeChild(childEl);
        }
      }
    }
  }

  //render changes
  if (el) {
    if (atts) {
      //TODO this doesnt delete previous attributes
      Object.entries(atts).forEach(([key, val]) => el.setAttribute(key, val));
    }
    if (value != null) el.value = value;
    if (text != null) el.textContent = text;
    if (style)
      //TODO this doesnt delete previous styles
      Object.entries(style).forEach(([key, val]) => (el.style[key] = val));
    setListeners(props);

    if (parent?.el?.parentElement && !parent?.el.contains(el)) {
      parent.el.appendChild(el);
    }
  }

  if (onChange) {
    onChange(props, prevProps);
  }

  return props;
}

export const Component = (initial) => {
  const props = typeof initial === "function" ? { init: initial } : initial;
  return {
    render: (passedProps = {}) => render({ ...props, ...passedProps }, props),
    reset: (passedProps = {}) => Component({ ...props, ...passedProps }),
    ...props,
  };
};
