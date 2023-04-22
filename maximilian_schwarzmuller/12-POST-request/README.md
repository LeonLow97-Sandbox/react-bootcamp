# Sending HTTP Requests

- [Hide JavaScript Code](https://academind.com/tutorials/hide-javascript-code)
- [REST APIs vs GraphQL APIs](https://academind.com/tutorials/rest-vs-graphql)

## Backend API

- [SWAPI](swapi.dev)

## POST Request

```js
async function addMovieHandler(movie) {
  // POST Request
  const response = await fetch(
    "https://react-http-a0421-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
    {
      method: "POST",
      body: JSON.stringify(movie), // turns javascript object/array to json
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
}
```
