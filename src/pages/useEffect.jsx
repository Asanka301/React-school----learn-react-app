import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function UseEffect() {
  return (
    <Row type="vertical">
      <h2>Introduction to React.useEffect</h2>

      <p>
        React.useEffect is a built-in Hook provided by React.js that enables
        functional components to perform side effects. Side effects in React.js
        typically include data fetching, subscriptions, or manually changing the
        DOM. useEffect allows developers to execute such side effects after the
        component has rendered, ensuring consistency in application state and
        behavior.
      </p>
      <Heading as="h3">How React.useEffect Works</Heading>

      <p>
        React.useEffect accepts two arguments: a function containing the side
        effect to be executed, and an optional array of dependencies. The
        function passed to useEffect will run after every render unless
        specified otherwise. By providing dependencies, useEffect can be
        optimized to run only when certain values have changed, preventing
        unnecessary executions.
      </p>
      <Heading as="h3">Example Usage</Heading>

      <p>
        Lets see how React.useEffect is used to manage side effects within a
        functional component.
      </p>
      <Code>
        {`import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetchingComponent;

`}
      </Code>

      <Heading as="h3">Conclusion</Heading>

      <p>
        React.useEffect is a crucial tool for managing side effects within
        functional components in React.js applications. Whether its fetching
        data from an API, subscribing to external events, or performing manual
        DOM updates, useEffect allows developers to handle side effects
        efficiently while maintaining the declarative nature of React
        components. Understanding how to use useEffect effectively is essential
        for building robust and performant React applications.
      </p>
    </Row>
  );
}

export default UseEffect;
