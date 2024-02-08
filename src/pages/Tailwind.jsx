import Row from "../ui/Row";
import Code from "./CodeContainer";

function Tailwind() {
  return (
    <Row type="vertical">
      <h2>Introducing Tailwind CSS</h2>
      <p>
        Tailwind CSS is a utility-first CSS framework that provides a set of
        pre-designed utility classes to style HTML elements. Unlike traditional
        CSS frameworks like Bootstrap or Foundation, Tailwind CSS does not come
        with pre-designed components. Instead, it focuses on providing low-level
        utility classes that can be used to create custom designs.
      </p>
      <h2>Key Features of Tailwind CSS</h2>
      <h3>1. Utility-First Approach</h3>
      <p>
        Tailwind CSS adopts a utility-first approach, where styles are applied
        using utility classes directly within HTML elements. This approach
        allows for rapid prototyping and easy customization of styles without
        writing custom CSS.
      </p>
      <h3>2. Responsive Design</h3>
      <p>
        Tailwind CSS includes built-in support for responsive design with
        breakpoints and utility classes for controlling the appearance of
        elements at different screen sizes. Developers can easily create
        responsive layouts by applying responsive utility classes to elements.
      </p>
      <h3>3. Customization</h3>
      <p>
        Tailwind CSS is highly customizable, allowing developers to configure
        the framework to suit their projects specific requirements. Developers
        can customize colors, spacing, typography, and other design variables
        using Tailwinds configuration file.
      </p>
      <h2>Getting Started with Tailwind CSS in React</h2>
      <h3>1. Install Tailwind CSS</h3>
      <p>
        To get started with Tailwind CSS in a React project, install the
        framework and its dependencies using npm or yarn:
      </p>
      <pre>
        <code>npm install tailwindcss postcss autoprefixer</code>
      </pre>
      <h3>2. Configure PostCSS</h3>
      <p>
        Next, configure PostCSS to process Tailwind CSS styles. Create a{" "}
        <code>postcss.config.js</code> file in the project root and add the
        following configuration:
      </p>
      <pre>
        <Code>
          {`
          module.exports ={
         
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),}
            ]`}
        </Code>
      </pre>
      <h3>3. Create Tailwind CSS Styles</h3>
      <p>
        Tailwind CSS styles can be applied directly within React components
        using utility classes. For example:
      </p>
      <pre>
        <Code>
          {`&lt;div class="bg-blue-500 text-white p-4"&gt; &lt;h1 class="text-2xl
          font-bold"&gt;Welcome to Tailwind CSS&lt;/h1&gt; &lt;p
          class="mt-2"&gt;Tailwind CSS is a utility-first CSS
          framework...&lt;/p&gt; &lt;/div&gt;`}
        </Code>
      </pre>
      <h2>Conclusion</h2>
      <p>
        Tailwind CSS offers a modern and efficient approach to styling React
        applications by providing a comprehensive set of utility classes for
        creating custom designs. With its utility-first approach, responsive
        design features, and easy customization options, Tailwind CSS simplifies
        the process of styling React components and enables developers to build
        beautiful and responsive user interfaces with minimal effort.
      </p>
    </Row>
  );
}

export default Tailwind;
