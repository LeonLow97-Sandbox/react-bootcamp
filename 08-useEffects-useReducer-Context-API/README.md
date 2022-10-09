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

## Debouncing

- Execute a function after a certain amount of time
- `setTimeout(() => {}, 500)` will be executed after 500 milliseconds

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







