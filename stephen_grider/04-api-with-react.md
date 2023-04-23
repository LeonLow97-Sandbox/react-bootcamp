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