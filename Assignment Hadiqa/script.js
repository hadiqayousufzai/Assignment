var apples = 5;   
let bananas = 3;   
const oranges = 7;
console.log("Apples:", apples);     // Output: Apples: 5
console.log("Bananas:", bananas);   // Output: Bananas: 3
console.log("Oranges:", oranges);   // Output: Oranges: 7

apples = 10;
bananas = 8;

console.log("Updated Apples:", apples);     // Output: Updated Apples: 10
console.log("Updated Bananas:", bananas);   // Output: Updated Bananas: 8

function exampleFunction() {
  var insideFunction = "I am inside!";
    let insideBlock = "I am also inside!"; 
  const insideConstBlock = "I am const inside!";

  console.log(insideFunction); // Output: I am inside!
  console.log(insideBlock);    // Output: I am also inside!
  console.log(insideConstBlock); // Output: I am const inside!
}

exampleFunction();
// console.log(insideFunction);
// console.log(insideBlock)
// console.log(insideConstBlock); 

/////////////////////////////////////////////////////////////////////////////
const name = "Ali";
const age = 25;

const message = `my name is${name} and i am ${age} year old`;

console.log(message);

const x = 10;
const y = 5;

const result = `${x}+ ${y} + ${x + y} `;

console.log(result);


/////////////////////////////////////////////////////
function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  async function doSomething() {
    console.log("lets start");
    await delay(2000); 
    console.log("after 2src");
    await delay(3000); 
    console.log(" after 5 min");
  }
  
  (async () => {
    await doSomething();
    console.log("completed");
  })();
  
///////////////////////////////////////////////////////
const colors = ["red", "green", "blue", "yellow"];

console.log("Example using for...of loop:");
for (const color of colors) {
  console.log(`Color: ${color}`);
}

const person = {
  name: "Ali",
  age: 30,
  city: "Karachi",
};

console.log("\nExample using for...in loop:");
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
//////////////////////////////////////////////////////

const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 25);
myMap.set("city", "New York");

console.log("Name:", myMap.get("name")); // Output: Name: John
console.log("Age:", myMap.get("age"));   // Output: Age: 25

console.log("Has 'city' key:", myMap.has("city")); // Output: Has 'city' key: true
console.log("Has 'country' key:", myMap.has("country")); // Output: Has 'country' key: false

console.log("Number of entries:", myMap.size); // Output: Number of entries: 3

console.log("Iterating over the Map:");
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
////////////////////////////////////////////////////

// Default Parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  greet();         // Output: Hello, Guest!
  greet("Alice");  // Output: Hello, Alice!
  
  // Rest Parameters
  function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));         // Output: 6
  console.log(sum(5, 10, 15, 20));  // Output: 50
  
  // Spread Operator
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2];
  
  console.log("Combined:", combined); // Output: Combined: [1, 2, 3, 4, 5, 6]
  
  const person = {
    name: "John",
    age: 30,
  };
  
  const updatedPerson = {
    ...person,
    age: 31,
  };
  
  console.log("Updated Person:", updatedPerson);
  // Output: Updated Person: { name: 'John', age: 31 }
///////////////////////////////////////////////////////////////

// Regular function
function add(a, b) {
    return a + b;
  }
  
  console.log("Regular Function:", add(5, 3)); // Output: Regular Function: 8
  
  const multiply = (x, y) => x * y;
  
  console.log("Arrow Function:", multiply(4, 6)); // Output: Arrow Function: 24
  
  const square = num => num * num;
  
  console.log("Square:", square(9)); // Output: Square: 81
  
  const sayHello = () => console.log("Hello!");
  
  sayHello(); // Output: Hello!
  
  const divide = (a, b) => {
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero";
    }
  };
  
  console.log("Division:", divide(10, 2)); // Output: Division: 5
  console.log("Division:", divide(8, 0));  // Output: Division: Cannot divide by zero


  /////////////////////////////////////////////////////////////

  function Person(name) {
    this.name = name;
  }
  
  const person1 = new Person("Alice");
  console.log(person1.name); // Output: Alice
///////////////////////////////////////////////////////////
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
//

var x;
console.log(x); // Output: undefined
x = 5;
console.log(x); // Output: 5
//
greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}
//
sayHello(); // Error: sayHello is not a function
var sayHello = function() {
  console.log("Hello!");
};
//
console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;



/////////////////////////////////////////////
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(rest);    // Output: [3, 4, 5]
//
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  const { firstName, age } = person;
  
  console.log(firstName);  // Output: John
  console.log(age);        // Output: 30
  

  ////////////////////////////////////////////

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("John", 30);
  const person2 = new Person("Alice", 25);
  
  person1.greet();  // Output: Hello, my name is John and I'm 30 years old.
  person2.greet();  // Output: Hello, my name is Alice and I'm 25 years old.
  

  //
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age); // Call the parent class constructor
      this.major = major;
    }
  
    study() {
      console.log(`${this.name} is studying ${this.major}.`);
    }
  }
  
  const student1 = new Student("Emma", 21, "Computer Science");
  student1.greet();  // Output: Hello, my name is Emma and I'm 21 years old.
  student1.study();  // Output: Emma is studying Computer Science.
  