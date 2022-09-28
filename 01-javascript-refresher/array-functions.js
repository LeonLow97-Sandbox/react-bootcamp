// Execute a function on each element in an array using map()
// map() returns a new array

const numbers = [1,2,3]

const doubleNumArray = numbers.map((num) => {
    return num * 2
})

console.log(numbers)    // [1,2,3]
console.log(doubleNumArray)     // [2,4,6]