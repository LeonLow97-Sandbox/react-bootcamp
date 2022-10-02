# useRef()

- The `useRef` Hook allows you to persist values between renders.
- Can be used to store a mutable value that does not cause a re-render when updated.
- Can be used to access a DOM element directly.

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
