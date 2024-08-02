const obj = {
    name: 'John',
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const boundSayHello = obj.sayHello.bind(obj);
  boundSayHello(); 

  //---Using an arrow function---------------------------------

  const obj1 = {
    name: 'John',
    sayHello: () => {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  obj.sayHello();

   //---using a closure----------------------------------------
   const obj2 = {
    name: 'Komal',
    sayHello: function() {
      return function() {
        console.log(`Hello, my name is ${this.name}`);
      }.bind(this);
    }
  };
  
  const boundSayHello1 = obj.sayHello();
  boundSayHello(); 

  //-----using a call() and apply() method-------------------------------

  const obj3 = {
    name: 'John',
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  obj.sayHello.call(obj); 
  obj.sayHello.apply(obj);