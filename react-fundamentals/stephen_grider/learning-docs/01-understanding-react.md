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

## What is Create React App?

- Files in the Project: `index.js`, `App.js`, and `reportWebVitals.js`.
    - These are files that contain code that a browser does not know how to execute.
    - Browser does not know how to execute JSX, only valid JavaScript.
- Create React App Dev Server
    - **Babel**: Tool to turn JSX into normal JS code.
    - **Webpack**: Tool to merge all project files into a single file.
    - Ends up with `bundle.js`

## Necessary files to run React App

|File Name|Description|
|:-:|:-:|
|`index.js`|First file that gets executed when our app runs.|
|`index.html`|Skeleton for the React app.|
|`package.json`|Lists dependencies our app needs.|
|`package-lock.json`|Lists dependencies our app needs.|
|`node-modules`|Contains dependencies our app needs.|

## `React` vs `ReactDOM`

- `React`: Library that defines what a component is and how multiple components work together.
- `ReactDOM`: Library that knows how to get a component to show up in the browser.