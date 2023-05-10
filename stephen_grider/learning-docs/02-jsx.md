## JSX

- [Cheat Sheet](https://jsx-notes.vercel.app/)

## What is JSX?

- JSX: what we write in the component
    - `<h1>Hi There!</h1>`
- Babel: This is what runs in the browser
    - `React.createElement("h1", null, "Hi There!");`
    - `babeljs.io/repl`: Tool to show you what JSX code is turned into.
- This is what is returned form calling 'createElement'
```
{
    $$typeof: Symbol(react.element),
    key: null,
    props: { children: 'Hi There!' },
    ref: null,
    type: 'h1'
}
```

## Show variables in JSX

- Using curly braces `{}`
- Often used to show strings and numbers.
- React cannot show an object.

## Props

- Props don't have to be defined as variables.
- *Strings*: wrap with double quotes.
- *Numbers*: wrap with curly braces.
- *Arrays*: wrap with curly braces.
- *Objects*: wrap with curly braces.
  - Error displaying an object.
  - Can provide an object as a **prop**.
- *Variables*: wrap with curly braces.

## Converting HTML to JSX

1. All prop names follow camelCase.
  - E.g., `autoFocus`, `maxLength`
2. Number attributes use curly braces.
  - E.g., In HTML, `maxlength="5"`. In JSX, `maxLength={5}`
3. Boolean = 'true' can be written with just the property name. 'False' should be written with curly braces.
  - `<input spellCheck />`
  - `<input spellCheck={false} />`
4. In JSX, the 'class' attribute is written as 'className'
5. In JSX, in-line styles are provided as objects.
  - `<div style={{ color:'red' }} />`

## Module System Systems

- import/export statements
  - Variables shared between files by using import/export statements.
- export statements
  - 2 kinds - `default` and `named`.
  - A file can only have a single `default` export.
  - 2 ways to write a default export.
    1. `export default App;`
    2. `export default function App() {}`
- Default exports can be *renamed* in the importing file.
  - `export default App`
  - `import MyApp from './App'`
- Named Export Statements
  - Use when exporting multiple variables
  - Can have as many named exports as we want.
  - 2 ways to write a named export
  - Named exports cannot be renamed.
  ```js
    // First method
    function App() {
      return <h1>Hi</h1>
    }
    export default App

    const message = 'hi'
    export {message}

    // Second method
    export default function App() {
      return <h1>Hi</h1>
    }
    export const message = 'hi';

    // Import named export (use curly braces)
    import App, { message } from './App';
  ```
- Import Path
  - './' or  '../' means we are importing a file that we created.
  - No './' or '../' like 'react' means we are importing a package.
  - `./`: Same directory
  - `'../`: Up one directory
