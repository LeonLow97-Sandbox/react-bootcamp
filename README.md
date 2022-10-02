## Create React App

[Create React App GitHub Link](https://github.com/facebook/create-react-app)

```
npx create-react-app my-app
cd my-app
npm start
```

- There are some deprecated versions in this file, ensure `package.json` has `"start": "react-scripts --openssl-legacy-provider start"` for npm start

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

## Updating state based on an older snapshot of the same state

- In this example, we created a parameter `prevExpenses` which takes the previous state.

```js
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};
```

## Set a unique id in map

```js
{
  props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}
```

## Filtering a particular element

- In this example, we want to display the list of years based on the selected dropdown year.

```js
const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});
```

## Using Ternary Operator to render components

- Method 1:

```js
{
  filteredExpenses.length === 0 ? (
    <p>No expenses found.</p>
  ) : (
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  );
}
```

- Method 2: Using `&&` operator

```js
{
  filteredExpenses.length === 0 && <p>No Expenses Found.</p>;
}
{
  filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
}
```

## Storing JSX in variables

```js
  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
```

- Only need to render this neat JSX in return

```js
return <div>{expensesContent}</div>;
```

## Conditional Inline Styles

- Inline styles take a very high priority (not recommended)

```js
<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
<input
  style={{
    borderColor: !isValid ? "red" : "black",
    background: !isValid ? "salmon" : "transparent",
  }}
  type="text"
  onChange={goalInputChangeHandler}
/>
```

## Conditional Classes

- CSS

```css
.form-control.invalid input {
  border-color: red;
  background-color: #ffd7d7;
}

.form-control.invalid label {
  color: red;
}
```

- In React

```js
<div className={`form-control ${!isValid ? "invalid" : ""}`}>
```

## Unique CSS classes in React

- `npm install --save styled-components`
- Change Button to the following (`&` is used to represent pseudo-classes)

```js
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
```

#### Setting Media Query in styled-components (Unique CSS classes in React)

```js
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }
```

#### Adding CSS Modules Stylesheet (Unique CSS classes in React)

- Change the name of the css file to `.module.css`

```js
import styles from "./Button.module.css";
```

## Understanding React Error Messages

- 


