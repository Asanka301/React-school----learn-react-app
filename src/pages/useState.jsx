import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function UseState() {
  return (
    <Row type="vertical">
      <h2>Introduction to React.useState</h2>

      <p>
        React.useState is a built-in Hook provided by React.js that allows
        functional components to manage state. Prior to the introduction of
        hooks, state management was primarily handled by class components.
        However, with the useState hook, functional components can now maintain
        their own state, eliminating the need to convert them into class
        components for state management.
      </p>
      <Heading as="h3">How React.useState Works</Heading>

      <p>
        React.useState takes an initial state value as its argument and returns
        an array containing the current state value and a function to update the
        state. The function returned by useState can be called with a new state
        value, triggering a re-render of the component with the updated state.
      </p>
      <Heading as="h3">Example Usage</Heading>

      <p>
        Lets see how React.useState is used to manage state within a functional
        component.
      </p>
      <Code>
        {`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

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
        React.useState is a powerful tool for managing state within functional
        components in React.js applications. By providing a simple and intuitive
        way to define and update component state, useState allows developers to
        build dynamic and interactive user interfaces without the need for class
        components. Understanding how to use useState effectively is essential
        for developing scalable and maintainable React applications.
      </p>
    </Row>
  );
}

export default UseState;
