import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function Props() {
  return (
    <Row type="vertical">
      <h2>What are React Props?</h2>

      <p>
        React props, short for properties, are a fundamental mechanism for
        passing read-only attributes from a parent component to a child
        component in React.js applications. Props allow components to be
        configured dynamically, making them reusable and flexible. Think of
        props as parameters that you pass to a component when you use it,
        similar to attributes in HTML elements.
      </p>
      <Heading as="h3">How Do React Props Work?</Heading>

      <p>
        When a parent component renders a child component and passes data to it
        via props, the child component receives these props as an object. This
        object contains key-value pairs, where the keys represent the prop names
        and the values represent the data passed from the parent. The child
        component can then access and use these props to render its content
        dynamically.
      </p>
      <Heading as="h3">Example Usage:</Heading>

      <p>
        Lets illustrate the usage of props with a simple example of a parent
        component passing a message prop to a child component.
      </p>
      <Code>
        {`// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent message="Hello from Parent!" />
    </div>
  );
};

export default ParentComponent;

// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Message from Parent:</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default ChildComponent;

`}
      </Code>

      <Code>
        {`// ChildComponent.js
import React from 'react';
const ChildComponent = (props) => {
return (
<div>
<h2>Message from Parent:</h2>
<p>{props.message}</p>
</div>
);
};

export default ChildComponent;
`}
      </Code>

      <Heading as="h3">Conclusion:</Heading>

      <p>
        React props play a vital role in building modular and reusable
        components in React.js applications. By passing data from parent to
        child components, props enable the creation of flexible and composable
        UIs. Understanding how props work is essential for building maintainable
        and scalable React applications. With props, developers can create
        dynamic and interactive user interfaces that adapt to various data
        inputs and configurations.
      </p>
    </Row>
  );
}

export default Props;
