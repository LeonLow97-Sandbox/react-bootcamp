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

# Array Functions

## `map()`

- `map()` executes a function on each element in an array
```js
const numbers = [1,2,3]

const doubleNumArray = numbers.map((num) => {
    return num * 2
})

console.log(numbers)    // [1,2,3]
console.log(doubleNumArray)     // [2,4,6]
```

## `find()`

- `find()` returns the first element in the array that satisfied the provided testing function.
```js
const arr = [5, 12, 8, 130, 44]
const found = arr.find(element => element > 10)
console.log(found)  // 12
```

## `findIndex()`

- `findIndex()` returns the index of the first element in an array that satisfies the provided testing function
```js
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber)); // 3
```

## `filter()`

- `filter()` creates a copy of a portion of the given array, filtered down to just the elements from the given array that pass the test provided.
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);    // Array ["exuberant", "destruction", "present"]
```

## `reduce()`

- `reduce()` method executes a user-supplied "reducer" callback function on each element of the array.
```js
const arr = [1,2,3,4]

const initialValue = 0;
const sumWithInitial  = arr.reduce(
    [previousValue, currentValue] => previousValue + currentValue
)
```

## `concat()`

- `concat()` method is used to merge 2 or more arrays.
- Does not change the existing arrays, but instead returns a new array.
```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); 
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

## `slice()`

- `slice()` method returns a shallow copy of a portion of an array into a new array objected selected from start to end (end not included).
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]


console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

## `splice()`

- `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```
