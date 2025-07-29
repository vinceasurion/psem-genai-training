---
applyTo: 'ui/**'
---

# GitHub Copilot instruction

This project is a front-end application built with React. It is designed to interact with a back-end API and display data to users. The application follows best practices for front-end development, including:

It uses Material UI for styling and layout, and it is structured to facilitate easy development and maintenance.

- Component-based architecture
- Responsive design
- State management
- Accessibility standards
- UI should run at <http://localhost:3000>

## Coding Standards

- It follows the Airbnb JavaScript Style Guide. https://github.com/airbnb/javascript
- It uses ES6+ features and React best practices.
- It uses functional components and hooks for state management.
- All react component should use `.jsx` file extension.

## Project Structure

ui / # Frontend code (if applicable)
├── src/
│ ├── components/ # React components
│ ├── pages/ # Page components, includes routing
│ ├── hooks/ # Custom React hooks
│ ├── context/ # React context for global state management
│ ├── utils/ # Utility functions
│ ├── assets/ # Images, fonts, etc.
│ ├── services/ # API service calls
│ ├── styles/ # CSS or styled-components
│ └── App.js # Main app component
├── public/ # Static assets
│ ├── index.html # Main HTML file
│ └── favicon.ico # Favicon
├── package.json # Frontend dependencies
└── .env # Environment variables

## Example Patterns to follow

### Pure Component

```js
export default function Header() {
  return (
    <header>
      <h1>Welcome to the Application</h1>
    </header>
  );
}
```

### Stateful Component

```js
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Counter mounted');
    return () => console.log('Counter unmounted');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### API Service Call in a Hook

```js
import React, { useState, useEffect } from 'react';
import { getUser } from './service/userService';

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [count, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();

    return () => {
      console.log('Cleanup if needed');
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching user data</p>;
  }

  return (
    <div>
      <p>
        User: <pre>{JSON.stringify(user, null, 2)}</pre>
      </p>
    </div>
  );
}
```
