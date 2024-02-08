import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function Memo() {
  return (
    <Row type="vertical">
      <Heading as="h3">Introduction to React.memo</Heading>

      <p>
        React.memo is a higher-order component provided by React.js that aims to
        optimize functional components by memoizing their rendering. Memoization
        is a technique used to cache the results of expensive function calls and
        reuse them when the same inputs occur again. In the context of React
        components, memoization helps prevent unnecessary re-renders by caching
        the output of a component based on its props.
      </p>
      <Heading as="h3">How React.memo Works</Heading>

      <p>
        When you wrap a functional component with React.memo, React will memoize
        the component based on its props. If the component receives the same
        props as in the previous render, React will reuse the cached result and
        skip the rendering process, improving performance by preventing
        unnecessary re-renders.
      </p>
      <Heading as="h3">Example Usage</Heading>

      <p>
        Lets consider an example where React.memo can be used to optimize a
        functional component.
      </p>
      <Code>
        {`import React from 'react';

const ExpensiveComponent = React.memo(({ value }) => {
  // Some expensive computation or rendering based on the 'value' prop
  return (
    <div>
      <h2>Value: {value}</h2>
    </div>
  );
});

export default ExpensiveComponent;

`}
      </Code>

      <Heading as="h3">Conclusion</Heading>

      <p>
        React.memo is a powerful tool for optimizing React applications by
        memoizing the rendering of functional components. By caching the output
        of components based on their props, React.memo helps reduce unnecessary
        re-renders and improves overall performance. However, its essential to
        use React.memo judiciously and consider the trade-offs between
        memoization and component re-renders based on application requirements.
      </p>
    </Row>
  );
}

export default Memo;
