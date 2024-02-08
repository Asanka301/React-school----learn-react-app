import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Code from "./CodeContainer";

function Router() {
  return (
    <Row type="vertical">
      <h2>Introduction to React Router</h2>

      <p>
        React Router is a popular library for handling navigation in React.js
        applications. It enables developers to create single-page applications
        with multiple views by managing the URL in the browsers address bar.
        React Router abstracts away the complexity of managing browser history
        and provides a declarative way to define routes and their corresponding
        components.
      </p>
      <Heading as="h3">Key Concepts of React Router</Heading>

      <p>React Router revolves around the following key concepts:</p>
      <Heading as="h4">1. Route:</Heading>

      <p>
        A route is a mapping between a URL path and a React component. When the
        URL matches the path specified in a route, React Router renders the
        associated component.
      </p>
      <Heading as="h4">2. BrowserRouter:</Heading>

      <p>
        BrowserRouter is a React component that uses HTML5 history API to keep
        the UI in sync with the URL. It provides the foundation for routing in a
        React application.
      </p>
      <Heading as="h4">3. Switch:</Heading>

      <p>
        Switch is another React component provided by React Router. It renders
        the first child Route or Redirect that matches the current URL location.
        This prevents multiple routes from being rendered simultaneously.
      </p>
      <Heading as="h4">4. Link:</Heading>

      <p>
        Link is a React component used for navigation. It allows users to
        navigate between different views in the application without causing a
        full page refresh.
      </p>
      <Heading as="h3">Example Usage</Heading>

      <p>
        Lets see how React Router is used in a simple application to navigate
        between different pages.
      </p>
      <Code>
        {`import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

`}
      </Code>

      <Heading as="h3">Conclusion</Heading>

      <p>
        React Router simplifies navigation and routing in React.js applications,
        enabling developers to create seamless single-page experiences. By
        leveraging React Routers components and concepts like Route,
        BrowserRouter, Switch, and Link, developers can build dynamic and
        engaging web applications with ease.
      </p>
    </Row>
  );
}

export default Router;
