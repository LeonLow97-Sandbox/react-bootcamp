## Create React App

[Create React App GitHub Link](https://github.com/facebook/create-react-app)

```
npx create-react-app my-app
cd my-app
npm start
```

- There are some deprecated versions in this file, ensure `package.json` has `"start": "react-scripts --openssl-legacy-provider start"` for npm start

## Uncaught ReferenceError: process is not defined

`npm install react-scripts@latest`

## React Running on Browser

- `index.js` file runs first
- `App.js` file runs next

## Components

- A component in React is a JavaScript function.
- First letter starts with an uppercase character.

## Props

- Sharing data across components

## Creating an Custom Component

- using `props.children` which is a keyword to nest content inside a component.
- E.g., `<Card className="">...can have a lot of content here...</Card>
  ```js
  function Card(props) {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>;
  }
  ```
- `props.className` is used to accept any className passed to the Card component in the parent component.

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

## Connecting label to input using `htmlFor`

```js
<label htmlFor="username">Username:</label>
<input id='username' type='text'/>
```

## JSX Limitations

- You can't return more than one 'root' JSX element (you also can't store more than one "root" JSX element in a variable).

```js
return (
  <h2>Hi there!</h2>
  <p>This does not work</p>
)
```

- Solve by wrapping adjavent elements with a `div`

```js
return (
  <div>
    <h2>Hi there!</h2>
    <p>This does not work</p>
  </div>
);
```

- Solve by wrapping adjacent elements with fragments `<> ... </>`.

```js
return (
  <>
    <h2>Hi there!</h2>
    <p>This does not work</p>
  </>
);

return (
  <React.Fragment>
    <h2>Hi there!</h2>
    <p>This does not work</p>
  </React.Fragment>
);
```

- Solve by using a wrapper component

```js
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
```

## Wrapper

- Creating a wrapper to act as a fragment

```js
const Wrapper = props => {
    return props.children
}

export default Wrapper
```

## React Portals

- E.g., want Error Modal to be directly below the body in html.
- Moving the HTML content somewhere else instead of being nested into the default root element. 
- `ReactDOM.createPortal()`
- Added above root in index.html

```js
    <div id="backdrop-root"></div>
    <div id="overlay-root"></div>
    <div id="root"></div>
```

- `ReactDOM.createPortal`
- `document.getElementById`

```js
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
```

# useRef() - `AddUser.js file`

- The `useRef` Hook allows you to persist values between renders.
- Can be used to store a mutable value that does not cause a re-render when updated.
- Can be used to access a DOM element directly.
- Unlike `useState` which updates the state with every keystroke.

---

## Does not cause re-renders

- If we tried to count how many times our application render using the `useState` Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
- To avoid this, we can use the `useRef` Hook.
- `useRef()` only returns one item. It returns an **Object** called `current`.

- When we initialize `useRef`, we set the initial value: `useRef(0)`.
  - It's like doing this: `const count = {current: 0}`. We can access the count by using `count.current`.

## Accessing DOM Elements

- In general, we want to let React handle all DOM manipulation.
- But there are some instances where `useRef` can be used without causing issues.
- In React, can add a `ref` attribute to an element to access it directly in the DOM.

- `useRef` to focus the input:

```js
function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

## Tracking State Changes

- The `useRef` Hook can also be used to keep track of previous state values.
- This is because we are able to persist `useRef` values between renders.

- In the example below, we use a combination of `useState`, `useEffect` and `useRef` to keep track of the previous state.
- In the `useEffect`, we are updating the `useRef` current value each time the `inputValue` is updated by entering text into the input field.

```js
function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
```

## storing the current value

```js
const nameInputRef = useRef()

.........

nameInputRef.current.value
```

## Uncontrolled Components

- By using `useRef` to set the values, we are not using React.
- We are using the browser DOM to set the values.
- E.g., `nameInput.current.value`
- `useState` are controlled components where the states are updated with every keystroke because their internal state are controlled by React.
- Example is in `AddUser.js`

# Advanced: Handling Side Effects, Using Reducers and Building a Context API

## Side Effects

- Store Data in Browser Storage
- Send HTTP Requests to Backend Servers
- Set & Manage Timers

## Handling Side Effects with the useEffect() Hook

- `useEffect(() => {...}, [dependencies])`
    - `() => {...}`
        - A function that should be executed after every component evaluation if the specified dependencies changed.
        - Your side effect code goes into this function.
    - `[dependencies]`
        - Dependencies of this effect - the function only runs if the dependencies changed.
        - Specify your dependencies of your function here.
        - If no dependencies, then it will only run once when the App starts.

- Pass in the dependencies that change.
- Optional to add state updating functions like `setFormIsValid` as dependency.
```js
  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, [setFormIsValid, enteredEmail, enteredPassword])
```

## Debouncing & Clean Up

- Execute a function after a certain amount of time
- `setTimeout(() => {}, 500)` will be executed after 500 milliseconds
- Clean up `return () => {}` to remove the previous function in useEffect().

```js
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!")
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500)

    // cleanup function (runs before any new side effect execution, except for the first time)
    return () => {
        console.log("Cleaned Up!")
      clearTimeout(identifier)
    }
  }, [setFormIsValid, enteredEmail, enteredPassword])
```

# No dependency in useEffect()

```js
  // runs whenever this component runs
  useEffect(() => {
    console.log("Effect Running!")
  })
```

## useReducer()

- For State Management with more capabilities.
- Sometimes, you have more complex state - for example if there are *multiple state, multiple ways of changing it or dependencies to other states*.
- `useState()` then often becomes hard ot error-prone to use - it's easy to write bad, inefficient or buggy code in such scenarios.
- `useReducer()` can be used as a replacement for useState() if you need "more powerful state management".

---

- `useReducer()` should be used if a state depends on another state in a function.
```js
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };
```

- `const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);`
    - `state` - the state snapshot used in the component re-render / re-evaluation cycle.
    - `dispatchFn` - a function that can be used to dispatch a new action (i.e., trigger an update of the state).
    - `reducerFn`
        - `(prevState, action) => newState`
        - a function that is triggered automatically once an action is **dispatched** (via dispatchFn()) 
        - it receives the latest state snapshop and should **return the new, updated state**.
        - can be created outside of the component function.
    - `initialState`
        - the initial state
    - `initFn`
        - a function to set the initial state programmatically.

### useState() vs useReducer()

|useState()|useReducer()|
|:-:|:-:|
|The main state management "tool"|Great if you need "more power"|
|Great for independent pieces of state/data|Should be considered if you have related pieces of state/data|
|Great if state updates are easy and limited to a few kinds of updates|Can be help if you have more complex state updates.|

## React Context (Context API)

- In the current situation, we are passing props from `App.js` to `MainHeader.js` to `Navigation.js`
  - props: `isLoggedin` and `logoutHandler`
- However, we are not using the props in `MainHeader.js`. (not ideal because we are only using it to pass down props)
- Can create a "Component-wide" state storage to pass data easily.
- For state management across the entire application.
- React Context is not optimized for high frequency changes (means keep changing).

### Using Context Provider and Context Consumer

- Passing 'props' from `App.js` to `Navigation.js`
- Creating a Context File
```js
import React from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false
})

export default AuthContext
```

- `App.js` (Linked the value in Context to a state in App.js)
```js
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
```

- `Navigation.js` (`ctx` accessed isLoggedIn)
```js
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
```

#### `useContext()` Hook

- Using the `useContext` Hook instead of the Context Consumer
```js
  const ctx = useContext(AuthContext);
```

#### Dynamic Context

- Passing another 'prop' to the Context Provider. (can not use onLogout in components listening to this context).
```js
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler
      }}
    >
```

## Custom Context Provider

- Inside `auth-context.js` and this was done for login.
```js
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storageIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (storageIsLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
```

## Rules of Hooks

- Only call React Hooks in React Functions
  - React Component Functions (returns JSX)
  - Custom Hooks
- Only call React Hooks at the Top Level
  - Don't call them in nested function
  - Don't call them in any block statements
- For `useEffect()`
  - Always add everything you refer to inside of `useEffect()` as a dependency.

## Forward Ref

- `useImperativeHandler`
- React component that is binded to a 'ref'
- `focus` is now exposed to parent components that are outside of the Input component shown below.
```js
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // activate is a function that will be called outside
  const activate = () => {
    inputRef.current.focus();
  };

  // need to use this useImperativeHandle() hook
  // so that the function can be used outside in the parent component
  // naming the activate() function "focus" that will be called outside
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
```

## Highly Configurable UI Input component

```js
import classes from "./Input.module.css";

const Input = (props) => {
  <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input id={props.input.id} {...props.input} />
  </div>;
};

export default Input;
```













