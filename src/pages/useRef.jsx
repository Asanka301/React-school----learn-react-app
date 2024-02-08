import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function UseRef() {
  return (
    <Row type="vertical">
      <h2>Introduction to React.useRef</h2>

      <p>
        React.useRef is a built-in Hook provided by React.js that allows
        functional components to access and interact with DOM elements
        imperatively. useRef also provides a way to persist mutable values
        across renders without causing re-renders, making it suitable for
        managing state that does not trigger updates to the UI.
      </p>
      <Heading as="h3">How React.useRef Works</Heading>

      <p>
        React.useRef returns a mutable ref object whose .current property is
        initialized to the passed argument (initial value). The returned ref
        object persists for the entire lifetime of the component. useRef can be
        used to reference DOM elements, store previous values, or manage other
        mutable state without causing re-renders.
      </p>
      <Heading as="h3">Example Usage</Heading>

      <p>
        Lets see how React.useRef is used to access and modify DOM elements
        within a functional component.
      </p>
      <Code>
        {`import React, { useRef } from 'react';

const InputComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputComponent;

`}
      </Code>

      <Heading as="h3">Conclusion</Heading>

      <p>
        React.useRef is a powerful tool for accessing and managing DOM elements
        and state imperatively within functional components in React.js
        applications. By providing a way to reference mutable values without
        causing re-renders, useRef enables developers to handle complex UI
        interactions and manage state effectively. Whether its focusing input
        fields, tracking previous values, or interacting with third-party
        libraries, useRef offers a flexible solution for a wide range of use
        cases.
      </p>
    </Row>
  );
}

export default UseRef;
