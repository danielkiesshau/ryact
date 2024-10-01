import Ryact from "./lib/ryact.js";

/** @jsx Ryact.createNode */
function Counter() {
  const [state, setState] = Ryact.useState(1);

  const updateCounter = () => {
    setState((c) => c + 1);
  };

  return (
    <div>
      <button onClick={updateCounter}>add</button>
      <h1>Count: {state}</h1>
    </div>
  );
}

/** @jsx Ryact.createNode */
const element = <Counter />;
const container = document.getElementById("root");

Ryact.render(element, container);
