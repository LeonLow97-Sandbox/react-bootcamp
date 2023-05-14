## Custom Hooks

- Functions we write to make reusable bits of logic.
- Usually reuse basic hooks like `useState`, `useEffect`, etc.
- Usually easiest to extract logic into a hook, rather than making a hook first.

## Process to make a custom hook properly

1. Find code in a component related to a single piece of state.
2. Copy paste it all into a helper function.
3. Fix all the broken references.

## Steps to create a custom hook

1. Make a function called 'useSomething'
2. Find all the non-JSX expressions that refer to 1-2 related pieces of state.
3. Cut them all out, paste them into 'useSomething'.
4. Find 'not defined' errors in your component.
5. In your hook, return an object that contains the variables the component needs.
6. In the component, call you hook. Destructure the properties the component needs.
7. Find 'not defined' errors in the hook. Pass the missing variables in as arguments to the hook.
8. Rename the hook to something more meaningful.
9. Rename returned properties to something more descriptive.