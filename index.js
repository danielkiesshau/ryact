const NODE_TYPES = {
  TEXT: "TEXT_NODE",
};

const createNode = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        const isTextNode = typeof child !== "object";

        // deal with text type
        return isTextNode ? Ryact.createTextNode(child) : child;
      }),
    },
  };
};

const createTextNode = (text) => {
  return {
    type: NODE_TYPES.TEXT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

const render = (element, container) => {
  const dom =
    element.type == NODE_TYPES.TEXT
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key) => key !== "children";

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
};

const Ryact = {
  createNode,
  createTextNode,
  render,
};

const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello World ",
  },
};

const container = document.getElementById("root");

const root = Ryact.createNode(
  element.type,
  element.props.title,
  element.props.children,
);

Ryact.render(root, container);
