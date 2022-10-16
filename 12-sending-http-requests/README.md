# Sending HTTP Requests

- [Hide JavaScript Code](https://academind.com/tutorials/hide-javascript-code)
- [REST APIs vs GraphQL APIs](https://academind.com/tutorials/rest-vs-graphql)

## Backend API

- [SWAPI](swapi.dev)

## GET Request using `fetch()` and `.then()`

```js
function fetchMoviesHandler() {
  fetch("https://swapi.dev/api/films/") // returns a promise
    .then((response) => {
      return response.json(); // returns a promise so need another .then()
    })
    .then((data) => {
      // the API returns different names for the data. trying to convert the names
      // such that it matches that of our React App in Movie.js
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    });
}
```

## GET Request using `async` and `await`

```js
async function fetchMoviesHandler() {
  const response = await fetch("https://swapi.dev/api/films/"); // returns a promise
  const data = await response.json();

  const transformedMovies = data.results.map((movieData) => {
    return {
      id: movieData.episode_id,
      title: movieData.title,
      openingText: movieData.opening_crawl,
      releaseData: movieData.release_date,
    };
  });
  setMovies(transformedMovies);
}
```
