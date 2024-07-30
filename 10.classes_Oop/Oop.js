//object litralls

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person = new Person('John', 30);
  person.greet(); // Output: Hello, my name is John and I am 30 years old.

//------------Inheritance============================

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log('The animal makes a sound.');
  }
}

class Dog extends Animal {
  sound() {
    console.log('The dog barks.');
  }
}

let dog = new Dog('Buddy');
dog.sound(); // Output: The dog barks.

