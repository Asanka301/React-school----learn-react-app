import Row from "../ui/Row";
import Code from "./CodeContainer";

function UseReducer() {
  return (
    <Row type="vertical">
      <h1>
        An Introduction to React.useReducer: Managing Complex State in React.js
      </h1>
      <h3>What is React.useReducer?</h3>
      <p>
        React.useReducer is a built-in Hook provided by React.js that allows
        functional components to manage complex state logic in a more organized
        and predictable way. While useState is commonly used for managing simple
        state, useReducer is preferred for handling state that involves multiple
        sub-values or requires complex update logic.
      </p>
      <h3>How React.useReducer Works</h3>
      <p>
        Similar to the reducer function in Redux, useReducer accepts a reducer
        function and an initial state as arguments. The reducer function takes
        the current state and an action as input and returns the new state based
        on the action type. Dispatching an action triggers the reducer function,
        updating the state accordingly.
      </p>
      <h3>Example Usage</h3>
      <p>
        Lets see how React.useReducer is used to manage state within a
        functional component.
      </p>
      <Code>
        {`import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error('Unexpected action');
  }
};

const Counter = () => {
  // Initial state
  const initialState = { count: 0 };

  // Use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;

`}
      </Code>

      <h3>Conclusion</h3>
      <p>
        React.useReducer is a powerful tool for managing complex state logic
        within functional components in React.js applications. By following the
        principles of immutable updates and predictable state transitions,
        useReducer enables developers to build robust and maintainable
        applications. Whether its managing form state, handling asynchronous
        actions, or implementing more advanced state management patterns,
        useReducer provides a flexible and scalable solution for managing state
        in React.js.
      </p>
    </Row>
  );
}

export default UseReducer;
