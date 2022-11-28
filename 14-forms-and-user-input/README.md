# Handling Forms and User Input

## What's so Complex about Forms?

- Forms and inputs can assume different states
  - One or more inputs are valid
    - Output input-specific error messages & highlight problematic inputs.
    - Ensure form can't be submitted / saved.
  - All inputs are valid
    - Allow form to be submitted / saved.

## When to validate?

- When form is submitted
  - Allows the user to enter a valid value before warning him / her.
  - Avoid unnecessary warnings but maybe present feedback "too late"
- When a input is losing focus
  - Allows the user to enter a valid value before warning him / her.
  - Very useful for untouched forms
- On every keystroke
  - Warns user before he/she had a chance of entering valid values.
  - If applied only an invalid inputs, has the potential of providing more direct feedback.

## `useState()` vs `useRef()` in input field

```js
const nameInputChangeHandler = (event) => {
  setEnteredName(event.target.value);
};

const enteredValue = nameInputRef.current.value;
// nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM

// by using useState(), we can reset the input field without manipulating the DOM.
setEnteredName("");
```
