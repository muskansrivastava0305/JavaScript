let data = { name: "komal"};
console.log(data. toString());


//------------------Prototype Chain-------------------------------

function PersonName(name) {
    this.name = name;
  }
  
  PersonName.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  function Employee(name, department) {
    PersonName.call(this, name);
    this.department = department;
  }
  
  Employee.prototype = Object.create(PersonName.prototype);
  Employee.prototype.constructor = Employee;
  
  Employee.prototype.sayGoodbye = function() {
    console.log(`Goodbye, my name is ${this.name} and I work in ${this.department}`);
  };
  
  let employee = new Employee('John', 'Sales');
  employee.sayHello(); 
  employee.sayGoodbye();