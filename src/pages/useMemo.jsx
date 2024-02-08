import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function UseMemo() {
  return (
    <Row type="vertical">
      <h2>Introduction to React.useMemo</h2>

      <p>
        React.useMemo is a built-in Hook provided by React.js that enables
        memoization of expensive computations in functional components.
        Memoization is a technique used to optimize performance by caching the
        results of costly calculations and reusing them when the inputs remain
        the same. useMemo ensures that computations are only re-executed when
        necessary, preventing unnecessary re-renders and improving overall
        application performance.
      </p>
      <Heading as="h3">How React.useMemo Works</Heading>

      <p>
        React.useMemo accepts a function and an array of dependencies as
        arguments. It memoizes the result of the function and re-executes it
        only if any of the dependencies change. This allows developers to
        optimize expensive computations by ensuring that they are only
        recalculated when the inputs change, reducing unnecessary overhead.
      </p>
      <Heading as="h3">Example Usage</Heading>

      <p>
        Lets see how React.useMemo is used to memoize expensive computations
        within a functional component.
      </p>
      <Code>
        {`import React, { useMemo } from 'react';

const FibonacciComponent = ({ n }) => {
  const fibonacci = useMemo(() => {
    const calculateFibonacci = (num) => {
      if (num <= 1) return num;
      return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
    };

    return calculateFibonacci(n);
  }, [n]);

  return (
    <div>
      <p>Fibonacci of {n}: {fibonacci}</p>
    </div>
  );
};

export default FibonacciComponent;

`}
      </Code>

      <Heading as="h3">Conclusion</Heading>

      <p>
        React.useMemo is a valuable tool for optimizing performance by memoizing
        expensive computations in React.js applications. By caching the results
        of calculations and reusing them when inputs remain the same, useMemo
        helps reduce unnecessary re-renders and improves overall application
        efficiency. Whether its calculating Fibonacci sequences, filtering large
        datasets, or processing complex data, useMemo provides a simple and
        effective solution for optimizing computations in functional components.
      </p>
    </Row>
  );
}

export default UseMemo;
