# `useReducer`

- Defines state in a component, just like `useState`.
- `useReducer` is a different way of handling state in a component.
- Changing this state makes component rerender.
- Useful when you have several different closely-related pieces of state.
- Useful when future state values depend on the current state.

## Similar to `useState` in variables

```js
// useState
const [count, setCount] = useState(initialCount);
const [valueToAdd, setValueToAdd] = useState(0);

// useReducer
const [state, dispatch] = useReducer(reducer, { count: 0, valueToAdd: 0 });
```

- `state`: state variable
- `dispatch`: function to change state
- `{ count: 0, valueToAdd: 0 }`: initial value for this state
    - All state for the **whole component** defined in a single object.
    - Unlike `useState`, where each piece of state is defined as a separate variable.
