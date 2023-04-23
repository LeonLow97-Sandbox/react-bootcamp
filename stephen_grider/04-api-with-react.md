## React with API

- React has no tools, objects, functions for making HTTP requests.
- React only cares about showing content and handling user events

## Overview of HTTP Requests

- Request Method: GET, POST, PUT, PATCH, DELETE.
- Response Status: 200 OK, 400 BAD REQUEST.
- To make requests, commonly use `Axios` or `Fetch` in React.
  - `npm install axios`

## Axios syntax

```js
// GET Request
axios.get(url, {
  // Headers that we want to add into the request
  headers: {},
  // Key-value pairs that will be turned into a query string and added to the URL
  params: {},
});
```

## Understanding `async` and `await`

- Use async/await to tell JavaScript to wait for the request to finish before moving on.

## Data Flow

- BAD: Sibling components cannot directly communicate.
  - E.g., "SearchBar.js" and "ImageList.js" are siblings with the same parent "App.js"
- GOOD: To share info between sibling components, we have to involve the parent.
  - Use props to communicate from parent to child.
  - App can send the list of images down to "ImageList" using props.

## Child to Parent Communication

- Pass an **event handler** down from the parent to child as a prop. (`onSubmit`)
- Call handler when something happens.

```js
// Child
function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit("cars");
  };

  return (
    <div>
      <input />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
```

```js
// Parent
function App() {
  const handleSubmit = (term) => {
    console.log("Do a search with:", term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
```

## Using `form` elements

- `<form></form>`: default HTML submit.
- Able to detect the `ENTER` key and button click.
- `e.preventDefault()`: prevent default behavior of form submission.

## Extracting value from `input` elements

- Never try to get a value out of an input using a `querySelector`
  - Don't do this: `document.querySelector('input').value`
  - Will be rejected from job interviews if you write code like this.
  - Reason: There might be multiple `input` elements on the page. Thus, using `querySelector` will only retrieve the first input element on the page and may not necessarily be the one you intended to target.
- React way to handle text inputs:
  1. Create a new piece of state
  2. Create an event handler to watch for an `onChange` event.
  3. When the `onChange` event fires, get the value of the input.
  4. Take that value from the input and use it to update your state.
  ```js
  // Updating state so it causes component to rerender with every key press. (Steph said it is not a big deal)
  // Easier to add in more advanced features
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  ```
  5. Pass your state to the input as the value prop.
- Browser Behavior with input state change
  1. User types in input
  2. Browser updates the text in the input
  3. Browser triggers an event to say the input was updated
  4. We read the value from the input, **update state**.
  5. State update! Component rerenders.
  6. We provide value 'prop' to input - React changes the input's value.

## Set State with Regex

```js
// Don't allow lowercase characters
setTerm(event.target.value.replace(/[a-z]/, ""));
```

## `value` prop of an `input` element

- The purpose of having a `value` prop for input elements in React is to make the input element a **controlled component**.
  - Current value of the input element is always reflected in the state.
  - Changes to the input element value are handled by React rather than the DOM.
- Tells the input what the current value is.

## Console Error: `Warning: Each child in a list should have a unique "key" prop.`

- Applying update to the mapped elements
  - **Apply a "Key" to each element during the mapping step.**
  - After re-rendering, compare the keys on each ImageShow to the keys from the previous render. (React will handle this)
  - Apply minimal set of changes to existing DOM elements. (React will handle this)

## Requirements for Keys

- Use whenever we have a list of elements (so every time we do a 'map')
- Add the key to the top most element in the list.
  ```js
  // Top most elemet
  <ImageShow key={image.id} />

  // Top most element
  <div key={image.id}>
    <ImageShow />
  </div>
  ```
- Must be a string or number.
- Should be unique for this list.
  - no duplicate keys!
- Should be consistent across rerenders.
  - Never do `key={Math.random()}`, we don't want the keys to change in each rerender.
- Records fetched from database should assign records to an id.
- If there is no id,
  - use the index of the record.
  - generate a unique id yourself.