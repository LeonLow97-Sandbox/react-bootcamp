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








