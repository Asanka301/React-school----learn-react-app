import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function Components() {
  return (
    <Row type="vertical">
      <Heading as="h1">React Components</Heading>

      <p>
        In React.js, a component is a JavaScript class or function that returns
        a piece of JSX (JavaScript XML), representing a portion of the UI.
        Components can be thought of as building blocks that encapsulate the
        structure, behavior, and style of a part of the user interface. They can
        be simple, representing basic HTML elements like buttons or forms, or
        complex, composing multiple simpler components to create intricate UIs.
      </p>
      <h3>Types of React.js Components:</h3>
      <h4>1. Functional Components:</h4>
      <p>
        Functional components are defined as JavaScript functions. They are the
        simplest form of React components and are primarily used for presenting
        UI elements that do not require state or lifecycle methods. Here is an
        example of a functional component:
      </p>
      <Code>
        {`import React from 'react';

const MyComponent = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
};

export default MyComponent;
`}
      </Code>

      <h4>2. Class Components:</h4>
      <p>
        Class components are JavaScript classes that extend the React.Component
        class. They can hold state and have access to lifecycle methods such as
        componentDidMount and componentDidUpdate. Here is an example of a class
        component:
      </p>
      <Code>{`import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
            </div>
        );
    }
}

export default MyComponent;
`}</Code>

      <h3>Example Usage:</h3>
      <p>
        Lets consider a scenario where we want to create a simple counter
        component using both functional and class components.
      </p>
      <Code>
        {`import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Functional Component Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Counter;
`}
      </Code>
      <h3>Conclusion:</h3>
      <p>
        React.js components form the foundation of building dynamic and
        interactive user interfaces. By breaking down the UI into reusable and
        manageable pieces, developers can efficiently develop complex
        applications while maintaining code readability and maintainability.
        Whether its a simple button or a sophisticated data visualization
        component, React.js components empower developers to create engaging web
        experiences.
      </p>
    </Row>
  );
}

export default Components;
