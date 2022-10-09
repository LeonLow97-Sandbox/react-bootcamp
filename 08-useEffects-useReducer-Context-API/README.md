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

## useState() vs useReducer()

|useState()|useReducer()|
|:-:|:-:|
|The main state management "tool"|Great if you need "more power"|
|Great for independent pieces of state/data|Should be considered if you have related pieces of state/data|
|Great if state updates are easy and limited to a few kinds of updates|Can be help if you have more complex state updates.|








