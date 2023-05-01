# Document Wide Handlers

## Document-Wide Click Handlers

- Detect click events outside the specified element.

## Event Capturing/Bubbling

- When an event occurs, browser wants to find event handlers to call.
- Order in which its search occurs is divided into **3 phases**.
  1. Capture phase (frequently disabled)
     - Go to most parent of clicked element, see if it has handler then goes to the second, etc.
     - Check for click event handler and calls it.
  2. Target phase
  3. Bubble phase
     - Go to immediate parent of click element, see if it has handler.
     - Check for click event handler and calls it.

```js
// Sets up event handler for the capture phase
document.addEventListener("click", handleClick, true);

// Sets up event handler for the bubbling phase
document.addEventListener("click", handleClick);
document.addEventListener("click", handleClick, false);
```

## Dropdown Menu Outside Click Event

```js
// Get reference to dropdown element
const dropdown = document.querySelector(".w-48");

const handleClick = (event) => {
  // Check to see if clicked element if inside dropdown
  if (dropdown.contains(event.target)) {
    console.log("Inside dropdown");
  } else {
    // User clicked outside dropdown (need to close dropdown)
    console.log("Outside dropdown");
  }
};

document.addEventListener("click", handleClick, true);
```
