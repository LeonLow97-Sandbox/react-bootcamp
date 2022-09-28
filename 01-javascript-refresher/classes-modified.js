class Human {
    // constructor() {
    //     this.gender = "Male"
    //     this.age = 25
    // }

    gender = 'male';

    printMyQualities() {
        console.log(this.gender)
    }
}

class Person extends Human {
    // constructor() {
    //     super() // must call this when using the "extends" inheritance
    //     this.name = "Leon";
    //     this.age = 30
    // }
    name = "Leon";
    gender = "female"

    printMyName = () => {
        console.log(this.name)
    }
}

const person = new Person()
person.printMyName()
person.printMyQualities()