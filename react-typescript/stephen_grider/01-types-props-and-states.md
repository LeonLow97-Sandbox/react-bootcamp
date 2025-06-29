# Types around props and states

## Passing props from Parent to Child

- Interface to define what props Child expects to receive.
    - Are we providing the correct props to Child when we show it in Parent?
    - Are we using the correctly named + typed props in Child?

## React Functional Components

```ts
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
```

## `useState` with TypeScript

- see `rtx` folder.

## `event` in onChange

- Type inference is only applied if you define inline event handlers.
- Type inference is not applied when you define the event handlers outside.
- Grab the type for `event` by hovering over `onChange` in JSX.

## `useRef`

- `const inputRef = useRef<HTMLInputElement | null>(null);`
- Tells TypeScript that input ref will be `HTMLInputElement` or `null`.