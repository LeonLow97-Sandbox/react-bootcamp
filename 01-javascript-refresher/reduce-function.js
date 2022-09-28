const items = [
    { name: "Rice", price: 5 },
    { name: "Book", price: 20 },
    { name: "Chicken", price: 10 },
    { name: "Monitor", price: 100 },
]

const totalPrice = items.reduce((total, item) => {
    return total + item.price
}, 0)   // 0 is the initial value for total

console.log(totalPrice)

const people = [
    { name: "Kyle", age: 26 },
    { name: "John", age: 31 },
    { name: "Sally", age: 42 },
    { name: "Jill", age: 42 },
]

const result = people.reduce((groupedPeople, person) => {
    const age = person.age
    if (groupedPeople[age] == null) {
        groupedPeople[age] = []
    }
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

console.log(result)

const numbers = [13, 2, 5]

// rarely use the last 2 parameters in reduce()
const sum = numbers.reduce((total, number, index, array) => {
    console.log(array, index)
    return total + number
}, 0)

console.log(sum)