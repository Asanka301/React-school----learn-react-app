import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function UseCallback() {
  return (
    <Row type="vertical">
      <h2>Introduction to React.useCallback</h2>

      <p>
        React.useCallback is a built-in Hook provided by React.js that memoizes
        callback functions in functional components. Memoization of callback
        functions is particularly useful when passing callbacks to child
        components, as it prevents unnecessary re-renders caused by passing new
        function references on each render. useCallback ensures that the same
        callback function instance is returned unless its dependencies change,
        optimizing performance and preventing unnecessary renders.
      </p>
      <Heading as="h3">How React.useCallback Works</Heading>

      <p>
        React.useCallback accepts a callback function and an array of
        dependencies as arguments. It memoizes the callback function and returns
        a memoized version of it. The memoized callback function is only
        re-created if any of the dependencies change. This ensures that the same
        callback instance is returned unless its dependencies change, reducing
        unnecessary re-renders.
      </p>
      <Heading as="h3">Example Usage</Heading>

      <p>
        Lets see how React.useCallback is used to memoize callback functions
        within a functional component.
      </p>
      <Code>
        {`import React, { useCallback, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

`}
      </Code>

      <Heading as="h3">Conclusion</Heading>

      <p>
        React.useCallback is a valuable tool for optimizing performance by
        memoizing callback functions in React.js applications. By ensuring that
        the same callback instance is returned unless its dependencies change,
        useCallback helps prevent unnecessary re-renders and improves overall
        application efficiency. Whether its handling user interactions, event
        handlers, or passing callbacks to child components, useCallback provides
        a simple and effective solution for memoizing callback functions in
        functional components.
      </p>
    </Row>
  );
}

export default UseCallback;
