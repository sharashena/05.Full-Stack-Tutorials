// var, let, const
// var is global scope
// let, const are local scope

// ---------

// arrow functions
// arrow functions have no name, it's always expression, no function keyword
// if we have one line function, we can omit curly braces and also return keyword

// like regular function
// const sayHi = () => console.log("hello");
// sayHi();

// with parameters

// const double = (value1, value2) => value1 * value2;
// const num = double(5, 2);
// console.log(num);

// two parameters and more than one line
// const multiply = (value1, value2) => {
//   const result = value1 * value2;
//   return result;
// };
// const some = multiply(5, 9);
// console.log(some);

// return object
//  in arrow function after arrow means implicit return
// const object = () => ({ name: "luka", age: 20 });
// const ob = object();
// console.log(ob);

// arrow funcs as callback functions
// const numbers = [36, 78, 21, 43, 54, 37];
// const big = numbers.filter(number => number > 35);
// console.log(big);

// arrow funcs as event listeners
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => console.log("hello world"));

// ---------

// arrow functions - objects and this
// reg function: 'this' refers to parent or what is written left of the dot
// arrow function: refers to it's current surrounding scope

// const bob = {
//   firstName: "bob",
//   lastName: "smith",
//   sayName: function () {
//     setTimeout(() => {
//       console.log(this);
//       console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }, 2000);
//   },
// };

// this won't work
// const anna = {
//   firstName: "anna",
//   lastName: "sanders",
//   sayName: () => {
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// bob.sayName();
// anna.sayName();

// ---------

// arrow functions - select elements and this

// const btn = document.querySelector(".btn");
// will work
// btn.addEventListener("click", function () {
// setTimeout(() => {
//   console.log(this);
//   this.style.backgroundColor = "black";
// }, 2000);
// });

// won't work
// btn.addEventListener("click", () => {
//   console.log(this);
//   this.style.backgroundColor = "black";
// });

// ---------

// default parameters and hoisting gotchas
// default parameters works if invoke arguments is empty
// when we are using reg function we can hoist it, but not in arrow function

// const john = "john";
// const peter = "peter";

// sayHi(); will work
// function sayHi(person = "Susan") {
//   console.log(`Hi ${person}`);
// }

// empty
// sayHello();
// sayHello(peter); throw an error
// const sayHello = (person = "Bob") => console.log(`Hello ${person}`);

// ---------

// array destructuring
// faster/easier way to access/unpack values from array

// const fruits = ["orange", "banana", "lemon"];
// const friends = ["john", "peter", "bob", "anna", "kelly"];

// access more easier
// const [john, peter, bob, anna, kelly] = friends;
// console.log(john, peter, bob, anna, kelly);

// access with whatever name we want, main is indexes
// const [firstIndex, secondIndex, third, fourth, fifth] = friends;
// console.log(firstIndex, secondIndex, third, fourth, fifth);

// if we want to skip value we use comma - ,
// const [first, , third, , fifth] = friends;
// console.log(first, third, fifth);

// if we access array index which doesn't exist it shows undefined
// const [john, peter, bob, anna, kelly, susan] = friends;
// console.log(john, peter, bob, anna, kelly, susan); result undefined

// ---------

// swap variables
// if we want swap variables we should create third variable

// let first = "bob";
// let second = "john";

// option 1
// let temp = second;
// second = first;
// first = temp;
// console.log(first, second);

// option 2 with array destructuring
// [first, second] = [second, first];
// console.log(first, second);

// ---------

// object destructuring

// const bob = {
//   first: "bob",
//   last: "sanders",
//   city: "chicago",
//   siblings: {
//     sister: "jane",
//   },
// };

// property names must be match
// const { first, last, city } = bob;
// console.log(first, last, city);

// we can change property names - alias
// const { first: firstName, last, city } = bob;
// console.log(first, last, city);

// desturcturing nested objects
// const {
//   first,
//   last,
//   city,
//   siblings: { sister },
// } = bob;
// console.log(sister);

// ---------

// destructuring function parameters

// const bob = {
//   first: "bob",
//   last: "sanders",
//   city: "chicago",
//   siblings: {
//     sister: "jane",
//   },
// };

// first option
// function printPerson(person) {
//   const { first, last, city } = person;
//   console.log(first, last, city);
// }
// printPerson(bob);

// second option
// function printPerson({ first: firstName, last, city }) {
//   console.log(firstName, last, city);
// }
// printPerson(bob);

// ---------

// new string methods
// startsWith(), endsWith(), includes(), repeat()
// Case Sensitive

// const person = "Peter Smith";
// const employee = "23456-EMP-PETER_SMITH";
// const manager = "23456-MAN-JOHN-DOE";

// startsWith(1. 'string', 2. starting position index) - if value starts with specific value
// console.log(person.startsWith("Pet")); result true
// console.log(person.startsWith("pet")); result false
// console.log(employee.startsWith("EMP")); result false
// console.log(employee.startsWith("EMP", 6)); result true

// endsWith(1. 'string', 2. starting position)
// we are flipping starting position
// console.log(manager.endsWith("DOE")); result true
// console.log(manager.endsWith("MAN")); result false
// console.log(manager.endsWith("MAN", 9)); result true

// includes() if string contains specific value
// console.log(employee.includes("Peter")); result true

// repeat() - repeats string how many times we want
// const multiplyPeople = (person, amount = 5) => person.repeat(amount);

// const people = multiplyPeople(person);
// console.log(people);

// ---------

// for of - loop
// loops through the values of an iterable object
// string, array,Map, Set - not work for object
// we can use break, continue

// const fruits = ["apple", "orange", "banana", "peach"];
// const longName = "John Smith Pepper III";
// let shortName = "";

// for (const whateverName of longName) {
//   if (whateverName === " ") {
//     continue; it means skip the value
//   } else {
//     shortName += whateverName;
//   }
// }
// console.log(shortName);

// for (const fruit of fruits) {
//   if (fruit === "banana") {
//     continue;
//   }
//   console.log(fruit);
// }

// ---------

// for in - loop
// works for objects

// const bob = {
//   first: "bob",
//   last: "doe",
// };
// for (const full in bob) {
//   if (full === "first") {
//     continue;
//   }
//   console.log(bob);
// }

// ---------

// spread operator ...
// split into single items and copy them
// spread operator won't change original object or array
// spread operator allows us to quickly copy all or part of an existing array or object into another array or object.
// const udemy = "udemy";
// const letters = [...udemy];
// console.log(letters); result ['u', 'd', 'e', 'm', 'y']

// const boys = ["john", "peter", "bob"];
// const girls = ["susan", "anna"];
// const bestFriend = "arnold";

// const friends = [bestFriend, ...boys, ...girls];
// console.log(friends); result john peter bob susan anna arnold

// ---------

// spread operator - objects

// const person = {
//   name: "john",
//   job: "developer",
// };
// all the properties what person object have now newPerson has
// const newPerson = { ...person, city: "chicago" };

// override existing property
// const newPerson = { ...person, name: "luka" };
// console.log(newPerson);

// ---------

// spread operator - DOM elements

// const headings = document.querySelectorAll("h1");
// const result = document.getElementById("result");

// const text = [...headings]
//   .map(item => {
//     return `<span>${item.textContent}</span>`;
//   })
//   .join(" ");

// result.innerHTML = text;

// ---------

// spread operator - functions arguments

// const john = ["john", "sanders"];
// const sayHello = (name, lastName) => {
//   console.log(`Hello, ${name} ${lastName}`);
// };
// sayHello(...john); john will be first argument and second sanders

// ---------

// rest operator ...
// gathers/collects the items in array/object
// left of = equal sign
// rest must be the last element
// rest operator is for function parameters and spread is for arguments

// arrays
// const fruits = ["apple", "banana", "orange", "peach", "lemon", "pear"];
// const [apple, , orange, ...whateverNameWeWant] = fruits;
// whateverNameWeWant.map(item => console.log(item));
// console.log(apple, orange, whateverNameWeWant);

// objects
// const person = {
//   name: "john",
//   lastName: "smith",
//   job: "developer",
// };
// const { job, ...rest } = person;
// console.log(job, rest);

// functions
// const getAverage = (name, ...scores) => {
//   console.log(name, scores);
//   let total = 0;
//   for (const score of scores) {
//     total += score;
//   }
//   console.log(`${name}'s average score is ${total / scores.length}`);
// };
// getAverage(rest.name, 78, 90, 56, 43);

// ---------

// Array.of()
// creates a new array from what we will pass inside it

// const friends = Array.of("john", 2, true);
// console.log(friends); result ["john", 2, true];

// ---------

// Array.from()
// creates array of array
// second argument is map() method
// arguments keyword will show what arguments function have and length
// {length: number} how many array of array we want
// arguments is array-like
// works - string, nodeList, Set, Map, array-like

// strings
// const udemy = "udemy";
// console.log(Array.from(udemy));

// function countTotal() {
//   let total = Array.from(arguments).reduce((acc, item) => (acc += item), 0);
//   console.log(total);
// }
// countTotal(23, 67, 84);

// ---------

// Array.from() - DOM elements

// const p = document.querySelectorAll("p");
// const result = document.querySelector("#result");

// longhand
// let text = Array.from(p);
// text = text
//   .map(item => {
//     return `<span>${item.textContent}</span>`;
//   })
//   .join(" ");
// result.innerHTML = text;

// shorthand
// const h1 = document.getElementById("second");
// const p = Array.from(document.querySelectorAll("p"), function (item) {
//   return `<span>${item.textContent}</span>`;
// }).join(" ");
// h1.innerHTML = p;

// ---------

// find(), findIndex(), every(), some() methods
// find - get's specific item
// findIndex - get's specific item index of the item
// every - if every item matches
// some - at least one item matches

// find and findIndex
// const people = [
//   { id: 1, name: "john" },
//   { id: 2, name: "peter" },
//   { id: 3, name: "anna" },
// ];

// every and some
// const grades = ["A", "B", "A", "B", "C"];
// const grades2 = ["A", "A", "A"];

// findIndex
// const person = people.findIndex(item => item.id === 3);
// const newPeople = people.slice(0, person);
// console.log(newPeople);

// every - if all matches result true, otherwise false
// const allPassed = grades.every(item => item === "A");
// const allPassed2 = grades2.every(item => item === "A");
// console.log(allPassed); result false
// console.log(allPassed2); result true

// some
// const somePassed = grades.some(item => item === "A");
// console.log(somePassed); result true
