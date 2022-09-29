## Create React App

[Create React App GitHub Link](https://github.com/facebook/create-react-app)

```
npx create-react-app my-app
cd my-app
npm start
```

## React Running on Browser

- `index.js` file runs first
- `App.js` file runs next

## Components

- A component in React is a JavaScript function.
- First letter starts with an uppercase character.

## Props

- Sharing data across components

## Creating an Custom Component

- using `props.children` which is a keyword.

```js
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
```

## How JSX Works

```js
// JSX
return (
  <div>
    <h2>Let's get started!</h2>
    <Expenses items={expenses} />
  </div>
);
```

```js
// React
import React from "react";

return React.createElement(
  "div",
  {},
  React.createElement("h2", {}, "Let's get started!"),
  React.createElement(Expenses, { items: expenses })
);
```

## useState()

- When the state changes, the particular component will be re-evaluated.
- It will evaluate the JSX code again.
- If we create the component more than once, the components have separate states (independent).

