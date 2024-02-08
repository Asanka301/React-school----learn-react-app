import Row from "../ui/Row";
import Code from "./CodeContainer";

function CSS() {
  return (
    <Row type="vertical">
      <h2>Introduction to React CSS</h2>
      <p>
        Styling plays a crucial role in creating visually appealing user
        interfaces (UIs) for web applications. While React.js focuses on the
        logic and structure of UI components, styling these components requires
        additional consideration. In React, there are several approaches for
        applying CSS styles to components, each with its advantages and use
        cases.
      </p>
      <h3>1. Inline Styles</h3>
      <p>
        Inline styles allow developers to apply CSS directly to JSX elements
        using the <code>style</code> attribute. This approach provides a
        convenient way to add simple styles directly within the component
        definition.
      </p>
      <Code>
        {`import React from 'react';

const MyComponent = () => {
  const textStyle = {
    color: 'blue',
    fontSize: '16px',
  };

  return <p style={textStyle}>Styled text</p>;
};

export default MyComponent;

`}
      </Code>

      <h3>2. CSS Modules</h3>
      <p>
        CSS Modules is a popular approach for scoped styling in React.js. With
        CSS Modules, CSS files are imported into JavaScript files as objects,
        and class names are scoped locally to each component.
      </p>
      <Code>
        {`import React from 'react';
import styles from './MyComponent.module.css'; // Import CSS module

const MyComponent = () => {
  return <p className={styles.text}>Styled text</p>;
};

export default MyComponent;

`}
      </Code>
      <Code>
        {`/* MyComponent.module.css */
.text {
  color: blue;
  font-size: 16px;
}
`}
      </Code>

      <h3>3. Styled Components</h3>
      <p>
        Styled Components is a library that allows developers to write CSS
        directly within JavaScript files using tagged template literals. Styled
        Components provide a more dynamic and expressive way to style
        components, enabling the creation of reusable styled components.
      </p>

      <h3>4. CSS-in-JS Libraries</h3>
      <p>
        CSS-in-JS libraries like Emotion and Styled System provide alternative
        approaches for styling React components. These libraries offer
        additional features such as theming, responsive design, and CSS prop
        support, enhancing the styling capabilities of React applications.
      </p>
      <h2>Conclusion</h2>
      <p>
        Styling React components is an essential aspect of building engaging and
        user-friendly web applications. Whether its applying simple styles with
        inline styles, using CSS Modules for scoped styling, leveraging Styled
        Components for dynamic styling, or exploring CSS-in-JS libraries for
        advanced styling techniques, React provides a variety of options for
        developers to enhance the appearance and functionality of their
        applications.
      </p>
      <p>
        By understanding the different approaches to styling in React and
        choosing the right solution for each use case, developers can create
        visually stunning and responsive UIs that delight users and elevate the
        overall user experience.
      </p>
    </Row>
  );
}

export default CSS;
