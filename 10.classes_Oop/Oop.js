//---------------------Class and object--------------------------------
//In JavaScript, a class is a blueprint for creating objects. A class defines the properties and behavior of an ob

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

//------------Inheritance==================================
//Inheritance is a mechanism in which one class can inherit the properties and behavior of another class.

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


//------------------------Polymorphism---------------------------------------------
//Polymorphism is the ability of an object to take on multiple forms. This can be achieved through method overriding or method overloading.

class Shape {
  area() {
    console.log('The area of the shape is unknown.');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    console.log(`The area of the circle is ${Math.PI * this.radius ** 2}.`);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    console.log(`The area of the rectangle is ${this.width * this.height}.`);
  }
}

let circle = new Circle(5);
circle.area(); // Output: The area of the circle is 78.53981633974483.

let rectangle = new Rectangle(4, 5);
rectangle.area(); // Output: The area of the rectangle is 20.

//-------------------------------Encapsulation--------------------------------------------
//Encapsulation is the concept of bundling data and methods that operate on that data within a single unit, making it harder for other parts of the program to access or modify the data directly.
class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Insufficient balance.');
    } else {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500

