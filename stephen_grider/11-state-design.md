# State Design

# File/Folder Organisation

## Component

- Reusable React component that shows a handful of elements.
- Add more organisation with sub-folders.
- E.g., `Button`, `ItemShow`, `ProductList`, `DropDown`, `SearchBar`, `CheckBox`.

## Page

- Still a React component. Not intended to be reused.
- E.g., `CheckoutPage`, `ProductPage`, `LoginPage`, `LandingPage`, `RentalPage`, `CartPage`.

# Design Process

- Design process works well when designing **more complex** components.

## Events + State Design Process

1. List out what a user will do and changes they will see while using your app.
2. Categorize each step as 'state' or 'event handler'.
3. Group common steps. Remove duplicates. Rewrite descriptions.
4. Look at mockup. Remove or simply parts that aren't changing.
5. Replace remaining elements with text descriptions.
6. Repeat #4 and #5 with a different variation.
7. Imagine you have to write a function that returns the text of steps #5 and #6. In addition to your component props, what other arguments would you need?
8. Decide where each event handler + state will be defined.
   - Event handler should usually be defined in same component as the state it modifies.
   - It might be used in a different component.

## Understanding JS Boolean Expressions (Conditional Rendering)

- `||`: gives back the first value that is truthy.
  - E.g., 100 || 200 returns 100
- `&&`: gives back the first falsey value or the last truthy value.
  - E.g., 'hi' && 'there' returns there
  - E.g., false && 'there' returns false

## Receiving events vs other arguments

```js
// Receiving event
const handleClick = (event) => {
  console.log(event);
};

return <div onClick={handleClick}>Click</div>;

// Receiving the handleClick argument
const handleClick = (index) => {
  console.log(index); // 1
};

return <div onClick={() => handleClick(1)}>Click</div>;
```

## Functional State Updates

- Simple Version
    - Use if new value does not depend on old.
    - E.g., `setCounter(10)`
- Functional Version
    - Use if new value depends on old.
    