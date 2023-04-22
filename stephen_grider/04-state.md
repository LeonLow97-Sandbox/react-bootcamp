## Event System and State System

- **Event System:** Detect a user clicking the button.
- **State System:** Update content on screen.

## Using Events

1. Decide what kind of event you want to watch for
  - [Link](reactjs.org/docs/events.html)
  - `onClick`: A user clicks on something.
  - `onChange`: A user types in a text input.
2. Create a function
  - Usually called an event handler or callback function.
3. Name the function using pattern of *handle + Click*
4. Pass the function as a prop to a plain element.
5. Make sure to pass the function using a valid event name ('onClick', 'onMouseOver', etc.)
6. Make sure to pass a reference to the function (don't call it).