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