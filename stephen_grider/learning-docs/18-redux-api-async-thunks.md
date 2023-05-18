# Interfacing with API's using Async Thunks

## Lazy Fetching

- **Lazy Fetching**: Only fetch data immediately before it is needed.
- Assume the user is on a bandwidth constrained connection, increasing latency.
- The data-loading experience must be near-perfect.
- We are going to first look at data fetching with plain RTK, then use RTK Query.

## Project Dependencies

- Project name: `media`
- `npm install @faker-js/faker @reduxjs/toolkit axios classnames json-server react-icons`
- `npm install react-redux`
- Install tailwind.css with CRA
    - [Installation Docs](https://tailwindcss.com/docs/guides/create-react-app)
- `npm run start`
- `npm run start:server`

## Data Structuring

- Denormalized Form
    - If you are expecting that UI won't change or project requirements won't change, use this.

```
[
    {
        id: 50,
        name: 'Myra',
        albums: [
            { id: 1, title: 'Album #1' },
            { id: 2, title: 'Album #2' },
        ]
    }
]
```

- Normalized Form
    - More flexible, easier to change.
    - More code to write (downside)

```
[
    { id: 1, title: 'Album #1', userId: 50 },
    { id: 2, title: 'Album #2', userId: 50 },
    { id: 3, title: 'Album #3', userId: 63 },
    { id: 4, title: 'Album #4', userId: 63 },
]

[
    { id: 50, name: 'Myra' },
    { id: 63, name: 'Ervin' }
]
```

## Data Fetching in Redux Toolkit

- Async Thunk Functions
    - To handle users
- Redux Toolkit Query (newer way)
    - To handle albums and photos
- Typically, choose 1 data fetching method.
- Never make requests in reducers! Reducers should always be 100% synchronous.

## Async Thunk Function

- Actions (3 States)
    - `type: pending`: in the process of fetching data.
    - `type: fulfilled`: fetched data successfully.
    - `type: rejected`: error occurred during the request.
- Steps for Adding a Thunk

## Creating an Async Thunk

1. Create a new file for your think. Name if after the purpose of the request.
2. Create the thunk. Give it a base type that describes the purpose of the request.
3. In the thunk, make the request, return the data that you want to use in the reducer.
4. In the slice, add extraReducers, watching for the action types made by the thunk.
5. Export the thunk from the store/index.js file.
6. When a user does something, dispatch the thunk function to run it.