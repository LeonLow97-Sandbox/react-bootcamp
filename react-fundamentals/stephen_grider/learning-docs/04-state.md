## Event System and State System

- **Event System:** Detect a user clicking the button.
- **State System:** Update content on screen.

## Event System

1. Decide what kind of event you want to watch for

- [Link](reactjs.org/docs/events.html)
- `onClick`: A user clicks on something.
- `onChange`: A user types in a text input.

2. Create a function

- Usually called an event handler or callback function.

3. Name the function using pattern of _handle + Click_
4. Pass the function as a prop to a plain element.
5. Make sure to pass the function using a valid event name ('onClick', 'onMouseOver', etc.)
6. Make sure to pass a reference to the function (don't call it).

## Variations on Event Handlers

- Passing function reference is for the function to be called _in the future_.

```js
const doGreeting = () => {
  return "Hi there";
};

console.log(doGreeting); // Logs the 'doGreeting' function reference. Does not call it.
console.log(doGreeting()); // Immediately calls 'doGreeting' function and logs the return value.
```

## State System

- Use the State System when you want to update content on the screen.
- Calling `useState` defines a new piece of state.
- The first argument to `useState` is used as the initial value.
- Updating state is done only using the setter function.
- **Calling the setter function causes React to rerender the component.**

1. Define a piece of state with the `useState` function
2. Give a value to the `useState` function. This is the default, starting value for our piece of state.
3. Use the state in some way in our component (often in the returned JSX).
4. When user does something, update the piece of state. Causes React to rerender the component.

## `useState` syntax

```js
const [count, setCOunt] = useState(0);
```

- `[count, setCount]`: Array destructuring. Way to get access to the piece of state + setter.
- `count`: piece of state. Starts as 0, changes over time.
- `setCount`: setter function. Used to update our piece of state.
- `0`: default value for this piece of state.

## Update state using Setter function with Array

- Use spread operator to get the original array and add another element inside instead of using `.push()` method.

```js
const [animals, setAnimals] = useState([]);

const handleClick = () => {
  // modifies a piece of state!!! (BAD)
  // animals.push(getRandomAnimal())
  setAnimals([...animals, getRandomAnimal()]);
};
```

## Mapping arrays into components

- Mapping the animals array into components.

```js
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
  <div>
    <button onClick={handleClick}>Add Animal</button>
    <div>{renderedAnimals}</div>
  </div>
```

## Updating State of an Array

```js
// BAD CODE
// Reference a123 is created in memory to the empty array 'books'
const [books, setBooks] = useState([]);

const createBook = (title) => {
  // Updating the state with the same reference of the array in memory
  books.push({ id: "1", title: title });
  setBooks(books);
};
```

- If these are pointing to the same array/object, React assume no rerender is required.
  - Reference to "current" state and Reference to "new" state are the same.

```js
// Creates a new array with a new reference in memory
const createBook = (title) => {
  const updatedBooks = [...books, { id: 123, title }];

  setBooks(updatedBooks);
};
```
