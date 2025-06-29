# React Behind The Scenes

## How React Work

- React: "A JavaScript library for building user interfaces"
- ReactDOM: Interface to the web
- [React Virtual DOM vs Real DOM](https://programmingwithmosh.com/react/react-virtual-dom-explained/)
- Re-evaluating components != Re-rendering the DOM

## React Components

- Props: Data from parent component
- Context: Component-wide data
- State: Internal data
- The components are then passed to the **Real DOM** which is what the user sees.
- If props, context or state changes, that component will be re-evaluated.
- If parent component (e.g., App.js) changes, the child component (e.g., DemoOutput.js and Button.js) changes.
    - That seems like a lot of Virtual DOM differences (affects performance)
    - Solution: use `React.memo()`

## `React.memo()`

- Works with functional components, not class components
- `export default React.memo(DemoOutput);`
- By using `React.memo()`, React checks the previous props and the updated props to see if there is a difference. If there is a difference, this component will get re-rendered.
- Optimization that prevents re-rendering
    - However, there is a performance cost of doing this. 
    - There is a **tradeoff** between re-rendering the component and storing the previous & current state of props.
    - Must determine which component has a higher cost. 
    - If your parent has many child components, using `React.memo()` might be worth it because you prevent the re-rendering of all the child components.
- Useful for large apps, not smaller apps.
- Pick some key parts of the component tree and use React.memo()
- For primitive values, `React.memo()` works
- For arrays, objects, functions, `React.memo()` doesn't work.
    - For the onClick function in Button, even though the function onClick are the same in the current and updated state, JavaScript recognises them to be different.
- [Reference vs Primitive Types](https://academind.com/tutorials/reference-vs-primitive-values)

## useCallback()

- Tells React to store functions across component executions.
    - this function is not re-created with every execution.
    - this allows us to compare functions. (because they now point to the same memory).
- Returns `false`
```js
let obj1 = {}
let obj2 = {}
obj1 === obj2 // false
```
- Returns `true`
```js
let obj1 = {}
let obj2 = obj1
obj1 === obj2 // true
```

- Have to pass in dependencies (same as useEffect)
- Stores this function when the component runs.
```js
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);
```

- Recreate the function whenever the dependency changes in `useCallback()`
- If there is no dependency, the function will not be recreated when useCallback() runs, the function is not recreated because there is no dependency.
```js
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
```

## State Updates & Scheduling

- For `useState()`
    - If you write it like this, `setUsername("somevalue")`, it will not update immediately and React will schedule a state update. (postponed). Will only update after the component re-runs.
    - If you want it to update the state immediately, `setUsername((previousValue) => previousValue)`. Depend on the previous state snapshot. And put it in `useEffect()`.

## Optimizing with `useMemo()`

- The React `useMemo` Hook returns a memoized value.
- The useMemo Hook only runs when one of its dependencies update.
- Can improve performance.
- The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
- E.g., can be used to avoid unnecessary sorting of a large chunk of data.
```js

```



















