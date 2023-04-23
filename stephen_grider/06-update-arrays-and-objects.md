# State Updates

- [Link](https://state-updates.vercel.app/)

## Adding elements to the start of an array

```js
const [colors, setColors] = useState(['red', 'green']);

const addColor = (colorToAdd) => {
  const updatedColors = [colorToAdd, ...colors];
  setColors(updatedColors);
};
```

## Adding elements at any index of an array

- The slice() method returns selected elements in an array, as a new array.
- The slice() method selects from a given start, up to a (not inclusive) given end.
- The slice() method does not change the original array.

```js
// Understanding Slice
colors = ["red", "green", "blue"];
colors.slice(0, 2) // ["red", "green"]
colors.slice(1) // ["green", "blue"]
```

```js
const [colors, setColors] = useState(['red', 'green']);

const addColorAtIndex = (colorToAdd, index) => {
  const updatedColors = [
    ...colors.slice(0, index),
    colorToAdd,
    ...colors.slice(index),
  ];
  setColors(updatedColors);
};
```

## Removing Elements from an array by index

```js

```