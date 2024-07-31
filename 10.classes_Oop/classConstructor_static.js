//-------------------Constructor---------------------------------------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.


//--------------------Static-Method------------------------------------------------------

class MathUtils {
    static add(x, y) {
        return x + y;
    }

    static subtract(x, y) {
        return x - y;
    }
}

console.log(MathUtils.add(5, 3));      // Output: 8
console.log(MathUtils.subtract(5, 3)); // Output: 2
