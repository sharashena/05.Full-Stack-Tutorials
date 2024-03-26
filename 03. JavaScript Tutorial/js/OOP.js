// Objects Basics

// Objects are collection of key (property) value pairs, property value can be string, number, boolean, arrays and function, however, if the property value is a function, it's called a method
// object literal syntax {}

// const person = {
//   name: "luka",
//   age: 21,
//   married: false,
//   siblings: ["saba", "tatia"],
//   greet: function (name) {
//     console.log("hello my name is" + " " + name);
//   },
//   sayHello(name) {
//     console.log(`hello ${name}`);
//   },
// };

// access whole object
// console.log(person);

// access value with property
// console.log(person.name);

// access methods
// const method = person.sayHello("luka");
// const method2 = person.greet("luka");

// access array item
// console.log(person.siblings[0]);

// override value with property
// person.age = 20;
// console.log(person);

// delete a property
// we can't delete an object
// delete person.married;
// console.log(person);

// delete a method
// delete person.greet;
// console.log(person);

// return boolean
// const married = delete person.married;
// console.log(married); result true means we successfuly deleted property

// ----------

// nested objects
// while nested objects we can use same properties
// if we try access property which doesn't exist, it throws undefined
// if we try access nested property which doesn't exist from nested object, it throws an error

// const person = {
//   name: "luka",
//   age: 21,
//   job: {
//     title: "developer",
//     company: {
//       name: "coding addict",
//       address: "123 main street",
//     },
//   },
// };
// console.log(person.job.company.name); result coding addict

// set variable as property value
// if property and variable names matches, we can use shorthand ES6 syntax

// const age = 60;
// const person = {
//   name: "luka",
//   before ES6
//   age: age,
//   after ES6
//   age,
//   job: {
//     title: "developer",
//     company: {
//       name: "coding addict",
//       address: "123 main street",
//     },
//   },
// };
// console.log(person.age);

// bracket notation
// person[''] or person[variable]
// use when property contains multiple name

// with variable
// const random = "random value";

// const age = 60;
// const person = {
//   name: "luka",
//   age,
//   married: false,
//   "random value": "random",
// };
// console.log(person["random value"]);
// console.log(person[random]);

// ----------

// this - keyword
// this, points to parent or current object where 'this' is writen
// left of . - dot

// const john = {
//   firstName: "luka",
//   lastName: "sharashenidze",
//   fullName: function () {
//     console.log(this);
//     console.log(`my full name is ${this.firstName} ${this.lastName}`);
//   },
// };
// john.fullName();

// this - keyowrd advanced
// by default this points to window object - window
// if 'this' isn't left of dot it will show window object

// showThis function will point where it invoked
// function showThis() {
//   console.log(this);
// }
// const john = {
//   name: "john",
//   showThis,
// };
// john.showThis();

// with elements
// showThis will point current element where it clicked
// function showThis() {
//   console.log(this);
// }

// const btns = document.querySelectorAll("button");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", showThis); result current button element
// });
// but
// it points to window object
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     showThis(); result window object
//   });
// });

// ----------

// display objects with Object.values()

// const person = {
//   name: "john",
//   age: 30,
//   city: "new york",
// };
// document.body.innerHTML = Object.values(person);

// Object.keys(object) - returns properties as an array
// Object.values(object) - returns object values as an array

// const person = {
//   name: "john",
//   age: 30,
//   city: "new york",
// };
// console.log(Object.keys(person)); ['name', 'age', 'city']
// console.log(Object.values(person)); ['john', 30, 'new york']

// ----------

// blue print
// factory functions and constructor functions
// factory functions
// create function and return an object and invoke however we want

// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(
//         `hello my name is ${this.firstName} and last name is ${this.lastName}`
//       );
//     },
//   };
// }
// const saba = createPerson("saba", "sharashenidze");
// saba.fullName();
// const luka = createPerson("luka", "sharashenidze");
// luka.fullName();
// luka.firstName = "saba";
// console.log(luka.firstName);

// ----------

// constructor functions
// new - creates new object, points to it, omit return
// without new keyword, 'this' will point to window object, with new keyword, it will point to an object
// constructor functions name should be capital case, it's common case. we describe function as special (constructor) function

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `hello my first name is ${this.firstName} and last name is ${this.lastName}`
//     );
//   };
// }

// const john = new Person("john", "anderson");
// console.log(john); points to Person object
// john.fullName();

// ----------

// constructor property
// all objects in javascript have access to constructor property which returns whole constructor function that created it.
// arrays and functions are objects in javascript

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `hello my first name is ${this.firstName} and last name is ${this.lastName}`
//     );
//   };
// }

// const john = new Person("john", "anderson");
// overrides john's object with constructor
// const susy = new john.constructor("susy", "anderson");
// console.log(john.constructor);

// ----------

// prototype property
// All JavaScript objects inherit properties and methods from a prototype.
// each an every constructor function/class has prototype property which is an object, with prototype, we can add property and value without handwriting
// if we want to have property attached to all object we use prototype

// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
// }

// const john = new Account("john", 200);
// const bob = new Account("bob", 700);

// add property and value with prototype
// Account.prototype.bank = "CHASE";
// Account.prototype.deposit = function (amount) {
//   this.balance += amount;
//   console.log(`hello, ${this.name}, your balance is ${this.balance}`);
// };
// john.deposit(300);
// bob.deposit(500);

// ----------

// property lookup
// if property isn't in constructor function, javascript will look up in prototype
// if property is in constructor function and also in prototype, it will override prototype

// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
//   this.bank = "bank of georgia";
// }

// const john = new Account("john", 200);
// const bob = new Account("bob", 700);

// Account.prototype.bank = "CHASE";
// console.log(john.bank);

// ----------

// ES6 Class syntax
// in order to create class we use keyword class
// constructor() is special method, each an every time we create a new object, constructor invokes that object
// if we want to pass parameters we need special method constructor()
// every property in class body is attached for all other objects

// class Account {
//   constructor(name, initialBalance) {
//     this.name = name;
//     this.balance = initialBalance;
//   }
// body
//   bank = "bank of georgia";
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`hello, ${this.name}, your balance is ${this.balance}`);
//   }
// }

// const john = new Account("john", 50);
// const bob = new Account("bob", 500);
// console.log(john.bank);

// class inheritence
// To create a class inheritance, use the extends keyword.
// super() method refers to the parent class
// calling super() method in constructor method, we call parent's constructor method and gets access to the parent's properties and methods

// class Person {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
//   fullName() {
//     return `Hello, My full name is ${this.firstName} ${this.lastName}`;
//   }
// }

// class Person2 extends Person {
//   constructor(first, last, city, country) {
//     super(first, last);
//     this.city = city;
//     this.country = country;
//   }
//   info() {
//     return `${this.fullName()} and i live in ${this.city}, ${this.country}`;
//   }
// }

// const person = new Person2("luka", "sharashenidze", "tbilisi", "georgia");
// console.log(person.info());

// ----------

// call() & apply() & bind() methods

// call() method
// call() can pass method to another object, if in another object, exact method doesn't exist
// arguments passed in as strings

// const john = {
//   name: "john",
//   age: 24,
//   greet: function () {
//     console.log(`Hello i'm ${this.name} and i'm ${this.age} years old`);
//   },
// };
// const susan = {
//   name: "susan",
//   age: 21,
// };

// john.greet.call(susan);
// john.greet.call({name: 'luka', age: 20}) we can create our own values

// ----------

// apply() method
// apply is the same as call, only difference is, arguments passed in as array instead of string

// function greet(city, country) {
//   console.log(
//     `Hello i'm ${this.name} and i'm ${this.age} years old. I live in ${city}, ${country}`
//   );
// }

// const john = {
//   name: "john",
//   age: 24,
// };
// const susan = {
//   name: "susan",
//   age: 21,
// };

// call example
// greet.call(john, "Tbilisi", "Georgia");
// greet.call(susan, "Tbilisi", "Georgia");
// greet.call({ name: "luka", age: 20 }, "New York", "US");

// apply example
// greet.apply(john, ["Tbilisi", "Georgia"]);
// greet.apply(susan, ["New York", "US"]);

// ----------

// bind() method
// we can assign it and use it later, pass argments as strings

// function greet(city, country) {
//   console.log(
//     `Hello i'm ${this.name} and i'm ${this.age} years old. I live in ${city}, ${country}`
//   );
// }

// const john = {
//   name: "john",
//   age: 24,
//   hello() {
//     console.log(this.name, this.age);
//   },
// };
// const susan = {
//   name: "susan",
//   age: 21,
// };

// assign
// const newItems = greet.bind(susan, "tbilisi", "georgia");
// call it later
// newItems();

// ----------

// button - example
// in callback functions 'this' keyword can't see an object, that's why we need bind method to point exact object

// const obj = {
//   count: 1,
//   increment: function () {
//     console.log(this);
//     this.count++;
//     console.log(this.count);
//   },
// };

// const btn = document.querySelector("button");
// btn.addEventListener("click", obj.increment.bind(obj));

// ----------

// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw new Error(`no "${selection}" exists`);
//   }
// }

// function Counter(element) {
//   this.value = 0;
//   this.decreaseBtn = element.querySelector(".decrease");
//   this.resetBtn = element.querySelector(".reset");
//   this.increaseBtn = element.querySelector(".increase");
//   this.valueDom = element.querySelector(".value");

//   bind functions
//   this.decrease = this.decrease.bind(this);
//   this.increase = this.increase.bind(this);

//   we use bind method to whole event listener and pass 'this' to point Counter object
//   this.decreaseBtn.addEventListener("click", this.decrease);
//   this.resetBtn.addEventListener(
//     "click",
//     function () {
//       this.reset();
//     }.bind(this)
//   );
//   this.increaseBtn.addEventListener("click", this.increase);
// }

// Counter.prototype.decrease = function () {
//   this.value--;
//   this.valueDom.textContent = this.value;
// };
// Counter.prototype.reset = function () {
//   this.value = 0;
//   this.valueDom.textContent = this.value;
// };
// Counter.prototype.increase = function () {
//   this.value++;
//   this.valueDom.textContent = this.value;
// };

// const count = new Counter(getElement(".button-container"));
// const counter2 = new Counter(getElement(".button-container2"));
