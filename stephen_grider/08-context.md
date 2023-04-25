# Context

- An alternative to Props is Context.
- It is like a communication channel.

## Using Context

1. Create the context

```js
import { createContext } from "react";

const BookContext = createContext();
```

- BooksContext
  - **Provider**: Component used to specify what data we want to share.
  - **Consumer**: Component used to get access to data. (NOT OFTEN USED)
  - `<BooksContext.Provider />`

2. Specify the data that will be shared

- `value` prop is what will be shared with the rest of the app.
- In this example, data being shared is the number '5'.
- Components nested inside the provider and its children can not access the value shared in the context i.e., '5'.

```js
<BookContext.Provider value={5}>
  <MyComponent />
</BookContext.Provider>
```

3. Consume the data

- import `useContext`

```js
import {useContext} from 'react';
import BookContext from "./book";

function MyComponent() {
  const num = useContext(BookContext);

  return <div>{num}</div>
}
```

## Context Provider

- If the application requires more than a simple state sharing across components, can create a custom context Provider component to provide additional functionality and state management.
  - Advanced features include reducers, actions, or middleware.

```js
// Creating Context
const BooksContext = createContext();

// Context Provider
function Provider({ children }) {
  const [count, setCount] = useState(5);

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };

// Providing Context (Any of its children will receive the 'value')
import { Provider } from "./context/books";

root.render(
  <Provider>
    <App />
  </Provider>
);

// Children receiving the Context Provider
function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);

  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click</button>
    </div>
  );
}
```

## Application State vs Component State

- **Application State**: Data that is used by many different components.
- **Component State**: Data that is used by very few components.