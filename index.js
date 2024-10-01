const createNode = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        const isTextNode = typeof child !== "object";

        // deal with text type
        return isTextNode ? createTextNode(child) : child;
      }),
    },
  };
};

const createTextNode = (text) => {
  return {
    type: "TEXT_NODE",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

const Ryact = {
  createNode,
};

const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello World ",
  },
};

const container = document.getElementById("root");

// Create the node
const node = document.createElement(element.type);
node["title"] = element.props.title;

// Use the correct method to create a text node
const text = document.createTextNode(element.props.children); // Fixed here

// Append the text node to the created element
node.appendChild(text);

// Append the node to the container
container.appendChild(node);
