# What is Redux?

- Redux is a library for managing state using the same techniques as `useReducer`.
- action --> Dispatch Function --> Reducer --> state.
- With Redux, we create a _store_ to create and maintain our state.
  - lives outside the React components.
- Individual components can connect to the store and access state.
- **React-Redux**: Library to help communicate between the React and Redux sides of your project.
- Automatically adds `immer` inside for automatic state updates.

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

## Redux Store

- The store is an object that will hold all of our state.
- We **usually** do not have to interact with it directly. The `React-Redux` library will handle the store for us.
- To dispatch an action: `store.dispatch({ type: 'songs/addSong' });`
- To see what state exists in the store: `store.getState()`

## Redux Slice

- Slices automatically create reducers and action types.
- Slices
  1. Defines some initial state
  2. Combines 'mini-reducers' into a big reducer.
     - They are like the 'cases' in the switch statement in reducer function in useReducer.
  3. Creates a set of 'action creator' functions.

## Action Creators

- Set of functions created for us automatically.
- When called, they return an action that we can dispatch.
- Saves us from having to manually write out action objects.

```js
store.dispatch(
  // Action Creator
  songsSlice.actions.addSong('ITZY - wannabe')
);
```

## React-Redux Provider

- **Centralized Store:** The Provider component from React-Redux is used to wrap the root of your React application. It provides a centralized store to all components in the application, allowing them to access and update the shared state.
- **Context API:** The Provider component leverages the Context API provided by React. It uses context to pass the Redux store to all child components, eliminating the need to manually pass the store down the component tree.
- **Connects Components:** By using the Provider component, you can easily connect any component within your application to the Redux store using the connect function from React-Redux. This allows components to access the state and dispatch actions without explicitly passing the store or using props drilling.

## Connecting React to Redux

1. Export the 'store' from whatever file it is created in.
2. Import the store into the root 'index.js' file.
3. Import 'Provider' from the 'react-redux' library.
4. Wrap the App component with the Provider, pass the store to the Provider.

```js
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

## Changing State in Redux Store

1. Add a reducer to one of your slices that changes state in some particular way.
2. Export the action creator that the slice automatically creates.
3. Find the component that you want to dispatch from.
4. Import the action creator function and `useDispatch` from `react-redux`.
5. Call the `useDispatch` hook to get access to the dispatch function.
6. When the user does something, call the action creator to get an action, then dispatch the action.

## Accessing State

1. Find the component that needs to access some state.
2. Import the `useSelector` hook from 'react-redux'.
   - This hook allows us to access some state from the redux store.
3. Call the hook, passing in a selector function.
4. Use the state! Anytime state changes, the component will automatically rerender.

## 'state' in `reducer` functions in Slice

- In a reducer, `state` means the 'state I'm in control of'.
- Reducer function in a slice can't see or change state that is being produced by another slice.
- Different Methods of Action Flow:
  1. When an action is dispatched, it is sent to _every_ reducer in the store.
  - Tell the other reducers to watch for the dispatch function in another particular reducer function.
  - This method introduces a dependency to the particular reducer function. (downside)
  ```js
  // In the songsSlice
  extraReducers(builder) {
    builder.addCase('movie/reset', (state, action) => {
      return []
    })
  }
  ```
  2. Create a new, standalone reset action and get both slices to watch for it
  - Watch for action types for all combined reducers.
  ```js
  export const reset = createAction("app/reset");

  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
  ```

# File Organization

- 'Feature Based' approach does not work well with Redux Toolkit
  - Could causes circular import issues.
- 'Function Based' approach is better
  - `components/`, `store/slices`
  - `store/index.js` will be the central access point for *everything* related to redux. This helps solve some 'circular imports' issues.