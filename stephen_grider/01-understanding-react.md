## How does a React app start up?

1. All of your project's files are 'bundled' together into a single file, then placed onto a server.
    - `bundle.js`
2. User makes a request to the server and gets a HTML file + the bundle.
    - html file: `index.html`
3. User's browser executes your code.
    - React Startup Process (all inside the index.js file)
        1. Find the dix with id of 'root' in the DOM inside `index.html`.
            - In `bundle.js`, `const rootElement = document.getElementById('root');`
        2. Tell React to take control of that element in `bundle.js`
            - `const root = createRoot(rootElement)`
        3. Tell React to get JSX form the App component, turn it into HTMl and show it in the root.
            - `root.render(<App />)`

## What were the 'useState' functions?

- 'useState' is a function that works with React's state system.
- State is like a variable in React
- State is used to store data that changes over time.
- Whenever state changes, React automatically updates content on the screen.