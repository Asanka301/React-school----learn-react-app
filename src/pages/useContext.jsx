import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function UseContext() {
  return (
    <Row type="vertical">
      <Heading as="h1">
        Exploring React.useContext: Simplifying State Management in React.js
      </Heading>

      <Heading as="h3">Introduction to React.useContext</Heading>

      <p>
        React.useContext is a built-in Hook provided by React.js that simplifies
        the process of accessing context in functional components. Context
        provides a way to share data between components without having to pass
        props through every level of the component tree. useContext hook allows
        functional components to consume context values easily, making state
        management more straightforward and efficient.
      </p>
      <Heading as="h3">How React.useContext Works</Heading>

      <p>
        React.useContext accepts a context object created by React.createContext
        and returns the current context value for that context. The useContext
        hook can be used inside functional components to access context values
        directly, without needing to use a context consumer component.
      </p>
      <Heading as="h3">Example Usage</Heading>

      <p>
        Lets see how React.useContext is used to consume context values within a
        functional component.
      </p>
      <Code>
        {`import React, { useContext } from 'react';
// Create a context
const ThemeContext = React.createContext('light');

const ThemedComponent = () => {
// Consume the context using useContext hook
const theme = useContext(ThemeContext);

return (
<div>
<p>Current Theme: {theme}</p>
</div>
);
};

export default ThemedComponent;
`}
      </Code>

      <Heading as="h3">Conclusion</Heading>

      <p>
        React.useContext provides a convenient way to consume context values
        within functional components in React.js applications. By simplifying
        the process of accessing context, useContext hook promotes cleaner and
        more modular code. Whether its managing themes, user authentication, or
        application settings, useContext facilitates efficient state management
        and promotes reusability across components.
      </p>
    </Row>
  );
}

export default UseContext;
