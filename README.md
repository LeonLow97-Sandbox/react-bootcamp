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

## useState in an Object

```js
const [userInput, setUserInput] = useState({
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
});

const titleChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    enteredTitle: event.target.value,
  });
};

const amountChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    enteredAmount: event.target.value,
  });
};

const dateChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    enteredDate: event.target.value,
  });
};
```

- safer way (when your state update depends on your previous state use this)

```js
const titleChangeHandler = (event) => {
  setUserInput((prevState) => {
    return { ...prevState, enteredTitle: event.target.value };
  });
};
```

## Passing data up from children to parent

- using functions
- from children

```js
props.onSaveExpenseData(expenseData);
```

- parent

```js
const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
```

## Passing data between sibling components

- Utilise the parent component that has access to both the siblings
- Lift the state up (move data from child to parent component)
- Then can pass this data from parent to another child.
