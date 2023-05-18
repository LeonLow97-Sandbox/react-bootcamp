# Managing Multiple Slices with Redux Toolkit

- `npm install @reduxjs/toolkit react-redux bulma`
- 'cars' project

## Redux Store Design

1. Identify what state exists in the app.
2. Identify how that state changes over time.
3. Group together common pieces of state.
    - State related to adding cars
    - State related to list of cars.
4. Create a slice for each group.
    - Form Slice
    - Cars Slice

## Derived State

- Values that we can calculate using existing state.
