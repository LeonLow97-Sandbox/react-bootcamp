# State Updates

- [Link](https://state-updates.vercel.app/)

## Adding elements to the start of an array

```js
const [colors, setColors] = useState(["red", "green"]);

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
colors.slice(0, 2); // ["red", "green"]
colors.slice(1); // ["green", "blue"]
```

```js
const [colors, setColors] = useState(["red", "green"]);

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

- If filter function returns true, the value is added to new array.
- If filter function returns false, the value is not added.
- **FKT**: Filter Keeps True
- `filter` always returns a new array.
- Returns false when `indexToRemove === index`

```js
const [colors, setColors] = useState(["red", "green", "blue"]);

const removeColorAtIndex = (indexToRemove) => {
  const updatedColors = colors.filter((color, index) => {
    return index !== indexToRemove;
  });

  setColors(updatedColors);
};
```

## Removing elements from an array by value

```js
const [colors, setColors] = useState(["red", "green", "blue"]);

const removeValue = (colorToRemove) => {
  const updatedColors = colors.filter((color) => {
    return color !== colorToRemove;
  });

  setColors(updatedColors);
};
```

## Removing an element with a particular property

```js
const [books, setBooks] = useState([
  { id: 1, title: "Harry Potter" },
  { id: 2, title: "Dark Tower" },
]);

const removeBookById = (id) => {
  const updatedBooks = books.filter((book) => {
    return book.id !== id;
  });
  setBooks(updatedBooks)
};
```

## Update element in an array

- Created a new object to update so that the component will rerender.
- If we update the array like this `book.title = newTitle`, no rerender as we reference the same object.

```js
const [books, setBooks] = useState([
  { id: 1, title: 'Sense and Sensibility' },
  { id: 2, title: 'Oliver Twist' },
]);

const changeTitleById = (id, newTitle) => {
  const updatedBooks = books.map((book) => {
    if (book.id === id) {
      // new title overrides the old title in the object, cannot have duplicate keys
      return { ...book, title: newTitle };
    }

    return book;
  });

  setBooks(updatedBooks);
};
```

## Adding, Changing or Removing Object Properties

```js
// Changing Properties In Objects
const [fruit, setFruit] = useState({
  color: 'red',
  name: 'apple',
});

const changeColor = (newColor) => {
  const updatedFruit = {
    ...fruit,
    color: newColor,
  };

  setFruit(updatedFruit);
};
```

```js
// Removing Properties In Objects
// Remove the colour property in the object
const [fruit, setFruit] = useState({
  color: 'red',
  name: 'apple',
});

const removeColor = () => {
  // `rest` is an object with all the remaining properties
  // of fruit except for `color`.
  const { color, ...rest } = fruit;

  setFruit(rest);
};
```
