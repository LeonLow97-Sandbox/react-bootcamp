# Consistent Styling Rules in Application

## Buttons

| Short Name |                     Button Purpose                     | Color  |
| :--------: | :----------------------------------------------------: | :----: |
|  Primary   |         Draw user's attention to a good action         |  Blue  |
| Secondary  |     Draw user's attention to a kind of good action     | Black  |
|  Success   |       Tell the user something good just happened       | Green  |
|  Warning   |             Warn the user about something              | Yellow |
|   Danger   | Tell the user they are about to do something dangerous |  Red   |

- Create a `Button Component` then pass props to it to customise the button.

```js
// In JSX, special way of passing down props to Custom Components
function App() {
  return <Button>Click!</Button>;
}

// Passed down as props in key-value pair key=children, value="Click!"
function Button({ children }) {
  return <button>{children}</button>;
}
```

#### `prop-types`

- JS library to validate the props that get passed into your component.
- If someone passes down the incorrect kind of value (number instead of boolean), a warning will appear in console.
- Used to be very popular. Now TypeScript does almost the same thing (and more).
- [Docs](npmjs.com/package/prop-types)
  - `npm install prop-types`

```js
import PropTypes from 'prop-types';

function Card({ title, content, showImage }) {
    ...
}

Card.propTypes = {
    title: PropTypes.string.isRequired // Make sure the 'title' prop is provided and is a string.
    content: PropTypes.string, // 'content' prop is optional and is a string.
    showImage: PropTypes.bool // 'showImage' is a boolean.
}
```

#### Using `tailwind.css` in this application

- [Installation Guide](https://tailwindcss.com/docs/guides/create-react-app)
- [Tailwind Docs](https://tailwindcss.com/docs/)

#### `classnames` JavaScript library

- JS Library for building up a `className` string based on different values.
- Library is called `classnames`, but prop is `className`.
- [Link](npmjs.com/package/classnames)
  - `npm install classnames`

```js
const primary = true;
const warning = false;

// For each key-value pair, it check if the value is truthy.
// If so, add the key to the string you are building.
className({
  'bg-blue-500': primary,
  'bg-yellow-500': warning,
});

const finalClassName = className({
  'bg-blue-500': true,
  'bg-red-500': false,
});

console.log(finalClassName); // bg-blue-500
```

#### `react-icons`

- [Link](react-icons.github.io/react-icons)
  - `npm install react-icons --save`
- Gives access to a ton of different icon libraries.

## Accordion

- Passing prop of _label_ and _content_.

## Modal

- Parent owns state to keep track of whether modal should be displayed.
- Parent component can show a modal at any time for any reason.
- Using `tailwind.css`
  - `absolute`: `position: absolute`
  - `inset-0`: `top: 0; left: 0; right: 0; bottom: 0;`

## Table

- Table HTML Semantics

```html
<table>
  <thead>
    <th></th>
    <th></th>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
```

- Table Component Requirements:
  - Variable number of rows
  - Variable number of columns
  - No. of columns doesn't have to match no. of properties in object.
  - Some columns are sortable
  - Sortable columns can sort different kinds of values
  - Cells can be calculated using multiple properties.
  - Cells can display arbitrary data.
    - text, numbers, images, etc..
