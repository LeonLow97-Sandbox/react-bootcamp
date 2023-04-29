# `useEffect` Bugs

## `useEffect` (Stale Variable Reference)

- `useEffect` contains a function that refers to a variable.
- Extremely common bug.
- CRA includes an ESLint rule to help you find this.
- Bug Message: `React Hook useEffect has a missing dependency: 'counter'. Either include it or remove the dependency array. (react-hooks/exhaustive-deps)`

```js
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // DON'T do this (X document.body) JUST FOR LEARNING PURPOSES
    document.body.onclick = () => {
      console.log(counter);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  );
}
```

- Whenever the component rerenders, JavaScript creates a new variable in memory.
- In the initial render, `counter = 0` was created.
- In the second render, `counter = 1` was created when the button was clicked.
- Function is crated and looks at the counter `counter = 0`
  - The variable in the useEffect is still referencing to the `counter = 0` in computer memory. Thus, we don't see `counter = 1`.

```js
// To fix this
useEffect(() => {
  // DON'T do this (X document.body) JUST FOR LEARNING PURPOSES
  document.body.onclick = () => {
    console.log(counter);
  };
}, [counter]);
```

- By adding `counter` as the dependency of `useEffect`, `useEffect` is executed again because `counter` has changed.
- The function inside `useEffect` will then reference the current value of the variable.

## `useEffect` infinite loop bug

- Results in an infinite loop of calling `fetchBooks`.
- Constantly creates `fetchBooks` of the same function but different reference.
  - Since it is a different reference in computer memory, `useEffect` sees that the dependency has changed even though the function is the same.
- In short, same function but different reference in memory being created (React thinks that the function is changing.)

```js
// Don't do this
useEffect(() => {
  fetchBooks();
}, [fetchBooks]);
```

- Solution:
  - `useCallback`: hook to tell React that our function isn't actually changing over time.
    - Fixes bugs around `useEffect` and other similar situation.
    - Follows similar conventions as useEffect (second argument is an array).

```js
// useCallback caches the function in the initial rerender
const fetchBooks = useCallback(async () => {
  const response = await axios.get("http://localhost:3001/books");

  setBooks(response.data);
}, []);

// useEffect only runs once because the dependency is the cached function which did not change between rerenders.
useEffect(() => {
  fetchBooks();
}, [fetchBooks]);
```

## `useEffect` return values

- Can't return numbers
- Can't return strings
- Can't use async/await
  - it returns a promise automatically.
- Can return a function!

## `useEffect` cleanup functions

- In the next rerender, the function in the useEffect gets called when the dependency changes.
  - This creates multiple same functions in the useEffect which runs whenever the dependency changes. This is bad because we only want 1 function to run and not run all the accumulated functions waiting in the useEffect.
  - If the useEffect function creates a resource, such as an event listener, without properly cleaning it up, multiple instances of the same resource may accumulate over time.
- By using a cleanup function, we ensure that the resources are properly cleaned up when the component is unmounted or when the effect is run again with new dependencies.
  - In the cleanup function, we remove the previous function.
  - In the initial render, the cleanup function is returned and waiting to be called in the next render.
  - In the second rerender, the cleanup function is called before the function in the useEffect to remove the previous instance of the same function.

```js
  useEffect(() => {
    const listener = () => {
      console.log(counter);
    };
    document.body.addEventListener("click", listener);

    const cleanUp = () => {
      document.body.removeEventListener("click", listener);
    };
    return cleanUp;
  }, [counter]);
```