# What is Redux?

- Redux is a library for managing state using the same techniques as `useReducer`.
- action --> Dispatch Function --> Reducer --> state.
- With Redux, we create a *store* to create and maintain our state.
    - lives outside the React components.
- Individual components can connect to the store and access state.
- **React-Redux**: Library to help communicate between the React and Redux sides of your project.

## `useReducer` vs Redux

- `useReducer` has 1 single reducer function to manage state.
- Redux has **multiple reducers**, each managing a different part of state.
- Split up states between multiple reducer functions to reduce complexity.
- If we want to change state in any way, we must call `dispatch` with an action.
    - `dispatch` function is the central point of initiating any change of state.
    - Easy to understand why state is changing, especially for a large application with many components.
- In `useReducer`, the `dispatch` function is responsible on telling the reducer how state is supposed to change, extra boilerplate.

## 2 Options on using Redux

1. Using classic Redux
2. Using classic Redux with Redux Toolkit (RTK)
    - RTK is a wrapper around plain Redux.
    - Simplify action type creation process, can avoid writing the complicated switch statements in reducer functions.
    - Recommended way of moving forward.
    - Still making use of Redux.