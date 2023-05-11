# React Fragments

- Feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.

## Issues before using React Fragment

- Warning Message
    - `Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.`
- Wrapping the `<td>` tags in a `div` element breaks the table parent-child relationship.

```js
function TableData () {
  return  (
    <div>
      <td>Eat</td>
      <td>Learn</td>
      <td>Code</td>
    </div>
  );
}

function Table () {
  return (
    <table>
      <tr>
        <TableData />
      </tr>
    </table>
  );
}
```

## Solution: Use React Fragment

- The `<td>` tags have to be rendered individually without wrapping them in a `div` element.
- Use React Fragment.
- `import { Fragment } from 'react'`