## `useEffect`

- Function that we import from React
- Used to run code when a component is initially rendered and (sometimes) when it is rerendered.

```js
useEffect(() => {
  console.log("hi!");
}, []);
```

- _First argument_ is a function that contains code we want to run.
- _Second argument_ is an array or nothing - this controls whether the function is executed on rerenders.
<img src="./pics/useEffect.png" alt="useEffect diagram" />
