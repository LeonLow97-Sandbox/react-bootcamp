# Reusable Component

- **Component Hierarchy**: Helps us understand the relationship between components.
- **Parent** and **Child**.

## Communication from Parent to Child component

- Use "props" system.
- Pass data from a parent to a child.
- Allows a parent to configure each child differently (show different text, different styles, etc)
- One way flow of data. Child can't push props back up.
- Props system is like 25% of understanding React.

## Communication with Props

1. Add attributes to a JSX element. (Parent Component)
  ```js
    function App() {
      return <Child color="red" />
    }
  ```
2. React collects the attributes and puts them in an object.
  - `{ color: 'red' }`
3. Props object shows up as the first argument to the child component function.
  ```js
    function Child(props) {
      return <div>{props.color}</div>
    }
  ```
4. Use the props to access data.
  - `{props.color}`

## Argument destructuring of props

- All 3 methods return the same result.

```js
// Method 1
const title = props.title;
const handle = props.handle;

// Method 2
const {title, handle} = props;

// Method 3
function ProfileCard({ title, handle }) {
```

## Adding bulma into the project for CSS

- [Link](bulma.io)
- `npm install bulma`