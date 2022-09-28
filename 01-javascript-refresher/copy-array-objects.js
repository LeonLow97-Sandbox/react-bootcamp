// const person = {
//     name: "Leon"
// }

// const secondPerson = person

// person.name = "Daniel"

// console.log(secondPerson)   // did not copy (copying the pointer, not the value)

// Use spread operator to copy objects
const person = {
    name: "Leon"
}

const secondPerson = {
    ...person
}

person.name = "Daniel"

console.log(secondPerson)   // copy object

