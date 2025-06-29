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
  - When calling `dispatch`, React looks for the defined reducer function and runs it.
- `{ count: 0, valueToAdd: 0 }`: initial value for this state
  - All state for the **whole component** defined in a single object.
  - Unlike `useState`, where each piece of state is defined as a separate variable.

## Reducer function

```js
const reducer = (state, action) => {};
```

- `state`: current state
- `action`: argument passed to dispatch function.
- Reducer function returns the new state and updates the state after component rerender in `useReducer` function.
- If you return nothing, then your new state will be `undefined`.
- No async/await, no requests, no promises, no outside variables.
- Don't directly modify the state
  - E.g., `state.count = state.count + 1`

## What to pass into the `dispatch` function?

- When we need to modify state, we will call dispatch and always pass in an 'action' **object**.
- The 'action' object will always have a **type** property that is a string. This helps tell the reducer what state update it needs to make.
- If we need to communicate some data to the reducer, it will be placed on the **payload** property of the action object.
- This is a very common community convention, not a requirement. React doesn't treat these action objects any differently.

```js
// dispatch function
const handleChange = (event) => {
  const value = parseInt(event.target.value) || 0;

  dispatch({
    type: 'change-value',
    payload: value, // optional property
  });
};

// reducer
if (action.type === 'increment-count') {return ...}
if (action.type === 'change-value') {return ...}
return state
```

## Considerations around Reducers

- _Usually_ makes more sense to stuff logic into the reducer and keep the dispatches simple.
- Less duplicated code if you need to dispatch the same action in multiple places.
- Part of the goal of reducers is to have a very _specific_ set of ways that state can be changed.

# Reducer with Immer

- `npm install immer`
- `import { produce } from 'immer';`
- Wrap reducer function with produce
  ```js
  useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  ```
- Library that lets you write code to **directly mutate state**.

```js
// Currently in reducer functions
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
}

// Reducer with Immer
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    default:
      return;
  }
}
```

|Normal Reducer|Reducer with Immer|
|:-:|:-:|
|No directly changing state|Can mutate state|
|Must return a new value to use for state|Do not have to return a new value. Still return in each case, otherwise you get 'fallthrough'|