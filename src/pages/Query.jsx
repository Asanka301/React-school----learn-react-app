import Row from "../ui/Row";
import Code from "./CodeContainer";

function Query() {
  return (
    <Row type="vertical">
      <h2>Introduction to React Query</h2>
      <p>
        React Query is a powerful library for managing and caching asynchronous
        data fetching in React applications. It simplifies the process of
        fetching, caching, synchronizing, and updating data from APIs, making it
        easier to handle complex data requirements and improve application
        performance.
      </p>
      <h2>Key Features of React Query</h2>
      <h3>1. Data Fetching</h3>
      <p>
        React Query provides a declarative approach to data fetching with hooks
        such as <code>useQuery</code> and <code>useMutation</code>. These hooks
        handle the fetching and updating of data from APIs, automatically
        managing loading, error, and success states.
      </p>
      <h3>2. Caching</h3>
      <p>
        React Query includes built-in caching mechanisms that cache data in
        memory and automatically update cached data when it changes. This
        caching strategy improves performance by reducing unnecessary network
        requests and ensures consistent data across components.
      </p>
      <h3>3. Query Invalidation</h3>
      <p>
        React Query supports query invalidation, allowing developers to manually
        invalidate and refetch queries based on specific triggers or events.
        This feature enables real-time updates and ensures that data remains
        up-to-date with the latest changes from the server.
      </p>
      <h3>4. Pagination and Infinite Loading</h3>
      <p>
        React Query provides built-in support for pagination and infinite
        loading, making it easy to fetch large datasets incrementally and
        display them in a paginated or scrollable manner. This feature improves
        user experience by loading data progressively and reducing initial page
        load times.
      </p>
      <h2>Getting Started with React Query</h2>
      <h3>1. Install React Query</h3>
      <p>
        To get started with React Query in a React project, install the library
        using npm or yarn:
      </p>
      <pre>
        <code>npm install react-query</code>
      </pre>
      <h3>2. Fetch Data with useQuery</h3>
      <p>
        Use the <code>useQuery</code> hook to fetch data from an API endpoint.
        Specify the query key and the fetch function that retrieves data from
        the server.
      </p>
      <h3>3. Display Data in Components</h3>
      <p>
        Display the fetched data in React components by accessing the data,
        isLoading, and error properties returned by the <code>useQuery</code>{" "}
        hook. Conditionally render loading and error states to provide a better
        user experience.
      </p>
      <h2>Example Usage</h2>
      <pre>
        <Code>{`import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const PostList = () => {
  const { data, isLoading, error } = useQuery('posts', fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;`}</Code>
      </pre>
      <h2>Conclusion</h2>
      <p>
        React Query is a powerful library for optimizing data fetching in React
        applications. With its intuitive API, built-in caching, query
        invalidation, and pagination support, React Query simplifies the process
        of managing asynchronous data and improves application performance.
      </p>
    </Row>
  );
}

export default Query;
