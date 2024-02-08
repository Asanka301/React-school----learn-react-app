import Row from "../ui/Row";
import Code from "./CodeContainer";

function Redux() {
  return (
    <Row type="vertical">
      <h2>Introduction to Redux</h2>
      <p>
        Redux is a predictable state container for JavaScript applications,
        commonly used with React.js to manage application state in a centralized
        manner. Redux follows the principles of Flux architecture and provides a
        single source of truth for application state, making it easier to manage
        and manipulate state data across components.
      </p>
      <h2>Core Concepts of Redux</h2>
      <h3>1. Store</h3>
      <p>
        The Redux store is a centralized container that holds the entire state
        tree of the application. It provides methods to dispatch actions,
        subscribe to changes, and access the current state.
      </p>
      <h3>2. Actions</h3>
      <p>
        Actions are plain JavaScript objects that represent events or updates in
        the application. They contain a type property that describes the action
        type and additional payload data as needed.
      </p>
      <h3>3. Reducers</h3>
      <p>
        Reducers are pure functions that specify how the applications state
        changes in response to actions. Each reducer takes the current state and
        an action as input and returns a new state based on the action type.
      </p>
      <h3>4. Dispatch</h3>
      <p>
        The dispatch method is used to dispatch actions to the Redux store. When
        an action is dispatched, it triggers the corresponding reducer to update
        the state tree accordingly.
      </p>
      <h2>Getting Started with Redux in React</h2>
      <h3>1. Install Redux</h3>
      <p>
        To get started with Redux in a React project, install the redux and
        react-redux packages using npm or yarn:
      </p>
      <pre>
        <code>npm install redux react-redux</code>
      </pre>
      <h3>2. Create Redux Store</h3>
      <p>
        Create a Redux store using the createStore function from the redux
        package. Define reducers to handle different parts of the state tree and
        combine them using the combineReducers utility.
      </p>
      <h3>3. Connect Redux to React Components</h3>
      <p>
        Connect Redux to React components using the connect function provided by
        the react-redux package. This higher-order component connects React
        components to the Redux store, allowing them to access state and
        dispatch actions.
      </p>
      <h2>Example Usage</h2>
      <pre>
        <Code>{`import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Initial state
const initialState = {
  count: 0
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

// Counter component
const Counter = ({ count, increment, decrement }) => (
  <div>
    <h2>Count: {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

// Map state to props
const mapStateToProps = state => ({
  count: state.count
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

// Connect Redux to Counter component
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// App component
const App = () => (
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>
);

export default App;`}</Code>
      </pre>
      <h2>Conclusion</h2>
      <p>
        Redux provides a powerful and scalable solution for managing state in
        React applications. By following the core principles of Redux and
        integrating it with React components, developers can create robust and
        maintainable applications with predictable state management and improved
        performance.
      </p>
    </Row>
  );
}

export default Redux;
