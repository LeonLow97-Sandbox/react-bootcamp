# Exports & Imports (Modules)

- `person.js`
```js
const person = {
    name: "Leon"
}

export default person
```

- `utility.js`
```js
export const clean = () => {...}

export const pi = 3.14159
```

- `app.js`
```js
import person from "./person.js"
import { baseData, clean } from "./utility.js"
```

- default export
```js
import person from "./person.js"
import prs from "./person.js"
```

- named export
```js
import {smth} from "./utility.js"
import {smth as Smth} from "./utility.js"
import * as bundled from "./utility.js"
```

# Classes

- classes
```js
class Person {
    name = "Leon" // property
    call = () => {...} // method
}
```

- usage
```js
const myPerson = new Person() // instantiating class using the 'new' keyword
myPerson.call()
console.log(myPerson.name)
```

- inheritance
```js
class Person extends Master
```

# Spread and Rest Operator

- Used to split up array elements OR object properties.
```js
// Spread Operator
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProp: 5}
```

- Used to merge a list of function arguments into an **array**.
```js
function sortArgs(...args) {
    return args.sort()
}
```

# Destructuring

- Easily extract array elements or objects properties and store them in variables
```js
// Array Destructuring
[a,b] = ["Hello","Leon"]
console.log(a) // Hello
console.log(b) // Leon
```

```js
// Object Destructuring
{name} = {name:"Leon",age:25}
console.log(name) // Leon
console.log(age) // undefined
```

# Map Function

- `map()` executes a function on each element in an array
```js
const numbers = [1,2,3]

const doubleNumArray = numbers.map((num) => {
    return num * 2
})

console.log(numbers)    // [1,2,3]
console.log(doubleNumArray)     // [2,4,6]
```
