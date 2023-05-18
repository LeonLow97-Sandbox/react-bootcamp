# Interfacing with API's using Async Thunks

## Lazy Fetching

- **Lazy Fetching**: Only fetch data immediately before it is needed.
- Assume the user is on a bandwidth constrained connection, increasing latency.
- The data-loading experience must be near-perfect.
- We are going to first look at data fetching with plain RTK, then use RTK Query.

## Project Dependencies

- Project name: `media`
- `npm install @faker-js/faker @reduxjs/toolkit axios classnames json-server react-icons`
- Install tailwind.css with CRA
    - [Installation Docs](https://tailwindcss.com/docs/guides/create-react-app)