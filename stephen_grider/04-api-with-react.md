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
  headers: {

  },
  // Key-value pairs that will be turned into a query string and added to the URL
  params: {

  },
})
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