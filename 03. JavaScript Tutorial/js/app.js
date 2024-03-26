// alert buttons
// document.querySelectorAll("button").forEach(item => {
//   item.addEventListener("click", () => {
//     alert("hello people");
//   });
// });

// javascript fundamentals
// helper methods
// 1. write something in browser document directly
// document.write("hello world");
// 2. alert box
// alert("hello world");
// consoling in browser console. if code doesn't work check browser console
// console.log("hello world");

// variables
// variables - store, access, modify value
// declare, assignment operator, assign value

// declare and access variable
// let name = "hello"; declare variable
// console.log(name); access variable

// assign empty variable will display undefined
// let name;
// console.log(name);

// assign value later, modify already existing variable
// let name; declare variable
// name = "luka"; modify later variable
// console.log(name); access variable - result luka

// create multiple variables
// let name, address, city;
// assign later
// address = "temqa";
// city = 'tbilisi'
// name = "luka"
// console.log(name, city, address); accessing mutliple variables

// variable naming rules
// variables can contain digits, letters, underscore and $
// variables must start with letters, $ or _

// variables names can't be reserved words like: class, this, delete...

// javascript is CaseSensitive
// if name is multiple we will write, example: firstName and not firstname
// camelCase or underscore (first_name)

// let firstName = 'luka'
// console.log(firstName);

// let first_name = "luka";
// console.log(first_name);

// ---------

// var, let, const
// var is old traditional variable, after 2015 (ES6) var replaced by let and const

// using var
// var name = "luka"; declare variable
// name = "saba"; modify later variable
// var can re-declare and re-assign variable
// var name = "saba"; redeclare variable
// console.log(name); access variable

// using let

// let firstName = "luka";
// firstName = "saba";
// only let can re-assign variable
// let firstName = "saba"; it's error
// console.log(firstName);

// using const (CONSTANT) - can't re-declare and re-assign
// const must be the only
// const name = "luka";
// console.log(name);

// const with only declare, but not assign value is an error;
// const name;
// console.log(name);

// ---------

// quotation marks
// "" or ''
// if we want quotation mark inside string we have 2 option:
// first option
// const name = "hello i'm luka";
// console.log(name);
// second option
// const name = 'hello i\'m luka sharashenidze';
// console.log(name);

// string concatenation - combine string values
// concatenation === +
// `` - backticks (template string) easier option

// there are three option to combine string values:
// first option
// const firstName = "luka";
// const lastName = "sharashenidze";
// console.log(
//   "hello, my first name is " + firstName + " and last name is " + lastName
// );

// second option
// const firstName = " luka";
// const lastName = " sharashenidze";
// const fullName = firstName + lastName;
// console.log(fullName);

// third option with backticks
// withing backticks we can use javascript - ${}
// const firstName = "luka";
// const lastName = "sharashenidze";
// console.log(
//   `hello, my first name is ${firstName} and last name is ${lastName}`
// );

// ---------

// numbers
// numbers are integers, thats why it doesnt need to write quotation marks around
// integers are blue in browser console, strings are black
// const number = 34;
// let decimal = 2.466;
// console.log(number);
// console.log(decimal);
// we can do math operations with numbers
// const number1 = 357;
// const number2 = 253;
// const plus = number1 + number2;
// const minus = number1 - number2;
// const times = number1 * number2;
// const div = number1 / number2;
// const modul = number1 % number2;
// console.log(plus);
// console.log(minus);
// console.log(times);
// console.log(div);
// console.log(modul);

// numbers - additional features
// modulus (%) - reminder after integer division

// exponentiation - ** raises the first operand to the power of the second
// const num1 = 5;
// const total = 5 ** 2;  result 25

// shorthand math operations
// +=, -=, *=, /=, ++, --, %=, **
// numbers1++ === 357 + 1
// number1 += 5 === 357 + 5
// let number1 = 357;
// number1 += 5;
// number1 -= 5;
// number1 *= 5;
// number1 /= 5;
// number1 %= 5;
// console.log(number1);

// math operations are unlimited
// let number = 4 + 5 + 6 + ((8 * 5) % 10);
// number = (4 + 5 + 6 + 7) * 5;
// console.log(number);

// number methods
// toFixed - rounds up number and shows length of reminders, if num has
// const num = 4.5654;
// console.log(num.toFixed(0)); result 5
// console.log(num.toFixed(1)); result 4.6
// console.log(num.toFixed(3)); result 4.565

// toPrecision() - rounds up number and shows length of number and also reminders
// const num = 4.5654;
// console.log(num.toPrecision(3)); result 4.57

// converting variables to numbers
// 3 method to convert variables to numbers
// 1. Number();
// 2. parseInt(); convert into number
// 3. parseFloat(); convert into decimal, if it is

// isNan() - check if it is not a number
// const num = 34.4221312;
// const text = "hello";
// console.log(isNaN(num)); result false
// console.log(isNaN(text)); result true
// console.log(Number.isNaN("hello")); result true

// Number.isInteger() - check if value is integer
// console.log(Number.isInteger(22000000));

// ---------

// implicit type conversion

// NaN - not a number
// we can't minus, multiply, divide string to number
// const name = "luka";
// const number = 5;
// console.log(name - number);

// but we can add number to name, it wil concatenate
// const name = "luka";
// const number = 5;
// console.log(name + number); result luka5

// we can also do math operations when numbers are strings and result will be integer
// const strNumber = "35";
// const number = 11;
// console.log(strNumber - number); result 24

// but we can't plus numbers and strings, it will concatanate, result will be string
// const strNumber = "35";
// const number = 11;
// console.log(strNumber + number); result 3511

// ---------

// data types - 7 total
// primitive - string, number, boolean, null, undefined, symbol
// non-primitive - object - arrays, objects, functions

// typeof operator - it tells us which data type is

// typeof
// string example
// it will show string, cuz name is string
// const name = "hello world";
// console.log(typeof name);
// number example
// const val = 4;
// console.log(typeof val);
// console.log(typeof false); it shows boolean

// string
// const name = "luka";
// console.log(typeof name);

// number
// const number = 4;
// console.log(typeof number);

// string number
// const number = "4";
// console.log(typeof number); it shows string

// boolean
// const tr = true;
// const fal = false;
// console.log(typeof tr, typeof fal); boolean

// null
// typeof null is object
// const nul = null;
// console.log(typeof nul);

// difference between null and undefined is null is object and undefined is undefined

// undefined
// declare variable without value shows undefined
// let name;
// console.log(name);
// typeof undefined is undefined
// console.log(typeof undefined);

// ---------

// arrays, function, objects

// array
// arrays [] = storing multiple values, items. in array first item has index 0
// we can store in array any data types

// const family = ["saba", "eka", 20];
// console.log(family);
// accessing item in array
// console.log(family[1]); shows eka
// or
// const name = family[1];
// console.log(name);
// changing array item
// family[2] = "luka";
// console.log(family[2]);

// recognize an array
// const fruits = ["banana", "orange", "apple"];
// option 1
// console.log(Array.isArray(fruits)); result true
// option2
// console.log(fruits instanceof Array); result true

// ---------

// functions
// functions allow us to write code in one place and re-use them how many we want

// declare (creating) function and naming it
// function greeting() {
//   const name = "luka";
//   console.log(name);
// }
// invoke function
// greeting();
// greeting();
// greeting();

// functions with parameters, arguments
// paramateres writes in parenthesis and we name it whatever we want
// function greeting(param) {
//   console.log(`hello, my name is ${param}`);
// }
// arguments pass when we are invoking function
// greeting("luka");
// greeting("saba");
// greeting(543);
// invoke function with empty arguments will be undefined
// greeting(); result undefined

// we can do also multiple parameters
// function greeting(param, param2) {
//   console.log(`hello, ${param} ${param2}`);
// }
// greeting("luka", 24);
// or
// const name = "luka";
// const number = 24;
// function greeting(param, param2) {
//   console.log(`hello, ${param} ${param2}`);
// }
// greeting(name, number);

// functions - return
// we should use return when paramaters pass in function, otherwise it shows undefined
// in function if we want calculate something and return true value we need keyword return
// const height = 80;
// function calculate(value) {
//   const val = value * 2.34;
//   return val;
// }
// const width = calculate(200);
// const hg = calculate(height);

// const dimension = [width, hg];
// console.log(dimension);

// function expression
// another way to declare function
// we will invoke function with variable
// it's optional if we leave function name 'add' or we can also delete
// const greeting = function add(value) {
//   console.log(`hello ${value}`);
//   return value;
// };
// greeting("luka");
// or
// function expression
// without function name called anonymous function
// const greeting = function(value) {
//   console.log(`hello ${value}`);
// };
// greeting("luka");

// ---------

// objects
// objects have properties also reffers to keys
// every property/key has value
// which value is function it called method
// to access object properties/keys we use . dot notation

// const person = {
//   name: "luka",
//   lastName: "sharashenidze",
//   age: 20,
//   education: true,
//   married: false,
//   siblings: ["saba", "gio", "dato", "tatia"],
//     before ES6
//     greeting: function() {
//       console.log("my name is john");
//     },
//     after ES6
//   greeting() {
//     console.log("my name is luka");
//   },
// };
// const age = person.age;
// console.log(age);
// console.log(person.name);
// console.log(person.siblings[0]);
// console.log(person.married);
// person.greeting();

// ---------

// conditional statements
// >, <, ==, ===, >=, <=, !=, !==
// > - greater than
// < - less than
// == - equal to
// === strict equal to. values must be equal to each other and also data types
// >= greater than or equal to
// <= less than or equal to
// != doesn't equal to
// !== strict doesn't equal to

// if (condition) else statement
// when we use if we write in parenthesis condition, if it is true
// if (2 < 4) {
//   if condition is true what we will write here, everything works
//   console.log("true");
// } else {
//   if, if condition is false, else condition will work
//   console.log("false");
// }
// if (2 > 4) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// else if (condition)
// if we have many values and want to check condition
// if first condition is true it will ignore everything what writes after first condition
// if first condition is false it will check second condition, if second is true it will ignore other ones
// if (2 == 4) {
//   console.log("first true");
// } else if (2 < 4) {
//   console.log("second true");
// } else {
//   console.log("third true");
// }

// strict equal
// example 1
// if (4 === 4) {
//   console.log("strict equality is true");
// }
// example 2
// if (4 === "4") {
//   console.log("strict equality is true");
// } else {
//   console.log("strict equality isn't true");
// }
// example 3
// if (null === undefined) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// doesn't equal
// const val = false;
// !val === if val isn't true display block of code
// if (!val) {
//   console.log("true");
// }

// logical operators
// (|| - or) and (&& - and)
// when we use || operator it means if one of condition is true, it displays block of code, otherwise false
// when we use && operator it means if both of condition is true, it displays block of code, otherwise false

// || example 1
// const num1 = 5;
// const num2 = 7;
// if (num1 + num2 == 12 || 2 > 3) {
//   console.log("true");
// }

// || example 2
// const num1 = 5;
// const num2 = 7;
// if (num1 + num2 == 11 || 2 > 3) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// && example 1
// const num1 = 5;
// const num2 = 7;
// if (num1 + num2 == 12 && 4 > 3) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// example 2
// const num1 = 5;
// const num2 = 7;
// if (num1 + num2 == 12 && 2 > 3) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// ---------

// switch statement
// another way to write if else statement
// case refered as if
// default is else statement
// after every case we must use break, to prevent display other conditions

// example 1
// if value matches
// const val = 3;

// switch (val) {
//   case 1:
//     console.log("value is true");
//     break;
//   case 2:
//     console.log("value is 2");
//     break;
//   case 3:
//     console.log("value is 3");
//     break;
//   default:
//     console.log("no value is here");
// }

// example 2
// if value doesn't match default will work
// const val = 5;

// switch (val) {
//   case 1:
//     console.log("value is true");
//     break;
//   case 2:
//     console.log("value is 2");
//     break;
//   case 3:
//     console.log("value is 3");
//     break;
//   default:
//     console.log("no value is here");
// }

// ---------

// while loop
// run a block of code while condition is true
// amount-- === decrease by 1 while amount won't be below 1

// let amount = 10;
// while (amount > 0) {
//   console.log(`i have ${amount} dollars`);
//   amount--;
// }

// do while loop
// we run do loop code at least one time, even condition is false

// let money = 12;
// do {
//   console.log(`i have ${money} dollars`);
// } while (money < 10);

// ---------

// for loops
// iteration block of code how many times we want
// 1. assign value; 2.value up to number. how many iteration we want; 3. increase value each iteration
// let i;
// for (i = 0; i < 10; i++) {
//   console.log(`number is ${i}`);
// }

// for decrease
// let i;
// for (i = 10; i >= 0; i--) {
//   console.log(`number is ${i}`);
// }

// string proporties and methods
// in strings base index is 0
// length - counts how many letters are in string
// const text = "sharashenidze";
// console.log(text.length); resulst 13
// also count white spaces
// const text = "sharashenidze    ";
// console.log(text.length); resulst 17

// methods
// toLowerCase();
// const firstName = "LUKA SHARASHENIDZE";
// console.log(firstName.toLowerCase()); result luka sharashenidze

// toUpperCase();
// const firstName = "luka sharashenidze";
// console.log(firstName.toUpperCase()); resulst LUKA SHARASHENIDZE

// charAt() - find specific letter with index
// include white spaces
// const lastName = 'sharashenidze';
// console.log(lastName.charAt(3)); result r

// get last value
// const lastName = "sharashenidze";
// console.log(lastName.charAt(lastName.length - 1)); result e

// indexOf() - find specific index with letter
// when it's multiple values in string it will show first index when js look at
// if index wasn't found in string it will display -1
// const last = "sharashenidze";
// console.log(last.indexOf("z")); result 11
// console.log(last.indexOf("c")); result -1

// trim() - removes white spaces from both side
// trimStart() - remove white space from left
// trimEnd() - remove white space from right
// const last = "   sharashenidze    ";
// console.log(last.trimStart());
// console.log(last.trimEnd());
// console.log(last.trim());

// startsWith() - check if value starts with specific letters
// return boolean
// const last = " Sharashenidze";
// console.log(last.startsWith(' Sh')); result true
// console.log(last.startsWith('sh')); result false

// combine multiple string methods
// const last = "     SHARASHENIDZE       ";
// console.log(last.trim().toLowerCase().startsWith("shara")); result sharashenidze, true

// includes() - check wether one or multiple character is in string
// if we enter letters which exist in string, but it isn't next to, it will display false
// return boolean
// const last = 'sharashenidze';
// console.log(last.includes('ra')); result true
// console.log(last.includes('rs')); result false

// slice() - creates new string from existing one, slicing with index
// for strings
// doesn't change orignial string/array/object
// slice(1. where to begin, 2.where to end, up to but not including)
// const last = 'sharashenidze';
// console.log(last.slice(0, 3)); result sha

// splice() - slice array items
// for arrays
// does change original string/array/object
// splice(1.start index 2. end index, up to but no including)
// let family = ["saba", "luka", "eka", "tatia"];
// console.log(family.splice(0, 2)); result saba luka

// substring() - same as slice, difference is we can't use negative values, it treated as 0
// const text = "luka sharashenidze";
// console.log(text.substring(4, 7));

// replace('old', 'new') - replaces specific value with another value
// replace() returns a new string
// replaces only first match
// doesn't change original string
// const fullName = "luka sharashenidze";
// console.log(fullName.replace("luka", "saba"));

// /i - insensitive
// const fullName = "luka sharashenidze";
// console.log(fullName.replace(/Luka/i, "saba"));

// /g - global match - changes every match value
// const fullName = "luka luka luka sharashenidze";
// console.log(fullName.replace(/luka/g, "saba"));

// multiple regular expressions
// const fullName = "luka luka luka sharashenidze";
// console.log(fullName.replace(/Luka/gi, "saba"));

// concat() - combine two or more strings, instead of + operator
// const text1 = "luka";
// const text2 = "sharashenidze";
// console.log(text1.concat(" ", text2));

// converting string to an array
// const first = "luka sharashenidze";
// console.log(first.split(",")); split on commas
// console.log(first.split(" ")); split on spaces
// console.log(first.split("|")); split on pipe

// ---------

// array proporties and methods

// length - show number of item in array
// let family = ["saba", "luka", "eka", "tatia"];
// console.log(family.length); result 4

// get last item in array
// let family = ["saba", "luka", "eka", "tatia"];
// console.log(family[family.length - 1]); result tatia

// methods

// concat() - combine two arrays
// concated array will be added end of the array
// let family = ["saba", "luka", "eka", "tatia"];
// const lastNames = ["sharashenidze", "bazali", "guchashvili"];
// const allNames = family.concat(lastNames);
// console.log(allNames); result saba luka eka tatia sharashenidze bazali guchasvili

// toString() - convert array into string
// const fruits = ["banana", "orange", "apple"];
// console.log(fruits.toString()); 'banana', 'orange', 'apple'

// join(' ') - convert into string and separate with spaces
// const fruits = ["banana", "orange", "apple"];
// console.log(fruits.join(" "));

// reverse() - reverse order of array items
// let family = ["saba", "luka", "eka", "tatia"];
// console.log(family.reverse()); result tatia eka luka saba

// unshift() - add item in array at the beginning
// let family = ["saba", "luka", "eka", "tatia"];
// family.unshift("gio");
// console.log(family); result gio saba luka eka tatia

// shift() - remove first item in array
// let family = ["saba", "luka", "eka", "tatia"];
// family.shift();
// console.log(family); luka eka tatia

// push() - add item in array at the end
// let family = ["saba", "luka", "eka", "tatia"];
// family.push("gio");
// console.log(family); saba luka eka tatia gio

// pop() -- remove item in array from right side
// let family = ["saba", "luka", "eka", "tatia"];
// family.pop();
// console.log(family); result saba luka eka

// sort and array
// sort() - sorts alphabetically
// const fruits = ["banana", "orange", "apple"];
// console.log(fruits.sort());

// sort ascending order
// const numbers = [5, 72, 54, 7, 36, 15];
// const sortNum = numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(sortNum);

// sort descending order
// const numbers = [5, 72, 54, 7, 36, 15];
// const sortNum = numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(sortNum);

// ascending and descending order
// 1 - ascending order
// -1 - descending order
// 0 - default
// const numbers = [5, 72, 54, 7, 36, 15];
// const sortNum = numbers.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(sortNum);

// keys() returns array iterator object with keys of an array
// const fruits = ["banana", "orange", "apple"];
// const keys = fruits.keys();
// let text = "";

// for (let x of keys) {
//   text += x;
// }

// entries() shows key/value pairs
// const fruits = ["banana", "orange", "apple"];
// const keys = fruits.entries();
// let text = "";

// for (let x of keys) {
//   text += x;
// }
// console.log(text);

// ---------

// example - fullNames

// const names = ["luka", "saba"];
// const lastName = "sharashenidze";
// const fullNames = names.concat(lastName);
// const newArr = [];

// for (let i = 0; i < fullNames.length; i++) {
//   newArr.push(`${fullNames[i]} sharashenidze`);
// }
// console.log(newArr);

// ---------

// value vs reference

// when assigning to primitive data type value to variable, it's affect only direct value, it doesn't change original value
// primitive value is a value that has no properties or methods.
// Primitive values are immutable

// let number1 = 4;
// let number2 = number1;
// number2 = 10;
// console.log(number1); result 4
// console.log(number2); result 10

// when assigning value to non-primitive data types value to variable, it's change all value
// non-primitive data types are mutable

// let person = { name: "luka" };
// let person2 = person;
// person2.name = "saba";
// console.log(person); result saba
// console.log(person2); result saba
// that is difference between primitive and non-primitive data types

// ---------

// null vs undefined

// undefined is when:
// variable without value
// missing function arguments
// missing object proporties

// null is object, but undefined is undefined
// const number = 20 + null;
// console.log(number); result 20 + 0 = 20
// const number2 = 20 + undefined;
// console.log(number2); result Nan

// ---------

// truthy and falsy
// empty string is false
// "", '', ``, 0, -0, NaN,false, null, undefined - they are all false

// truth example
// const text = "hey";
// if (text) {
//   console.log("truthy value"); will display
// } else {
//   console.log("falsy value"); won't display
// }

// false example
// const text = "";
// if (text) {
//   console.log("truthy value"); won't display
// } else {
//   console.log("falsy value"); will display
// }

// ---------

// ternary operator
// ternary operator is shorthand if else statement
// condition ? runs if true : runs if false
// const number1 = 5;
// const number2 = 6;
// console.log(
//   number1 + number2 < 12 ? "value is true" : "value is false"
// );

// ---------

// global scope vs local scope

// global scopes
// any variable outside of block of code {} reffers to as global scope
// global variables are what creates outside {} block of code
// accessable in whole program

// const globalNumber = 5;

// const add = function (param1, param2) {
//   const plus = param1 + param2 + globalNumber;
//   return plus;
// };
// console.log(add(7, 11));

// local scope
// local variables are what creates in {} - block of code
// can't accessable to outside block of code

// function add(arg1, arg2) {
// this globalNumber isn't accessable to outside block of code
//   const globalNumber = 5;
//   const plus = arg1 + arg2 + globalNumber;
//   return plus;
// }
// console.log(add(5, 7));
// console.log(globalNumber); this will throw an error

// ---------

// high order functions and callback function

// high order functions - call other function in function
// function firstName(arg) {
//   console.log(arg);
// }

// high order function
// const add = function (param, func) {
//   func('luka'); calling back function
//   console.log("hello my name is " + param);
//   func("luka");
// };
// add("luka", firstName);

// ---------

// array iterators

// forEach, map, filter, find, reduce
// they are all callback functions
// they iterate over array - no for loop required

// forEach()
// doesn't return a new array
// does change original array

// const people = [
//   {
//     name: "luka",
//     age: 20,
//     job: "developer",
//   },
//   {
//     name: "saba",
//     age: 27,
//     job: "wordpress developer",
//   },
//   {
//     name: "gio",
//     age: 27,
//     job: "designer",
//   },
// ];

// first option to use forEach
// function showPerson(person) {
//   console.log(person.job.toUpperCase());
// }
// people.forEach(showPerson);

// second option to use forEach
// people.forEach(function (item) {
//   console.log(item.name);
// });

// map()
// does return a new array
// doesn't change items of orignial array
// use values from original array and modify items

// const people = [
//   {
//     name: "luka",
//     age: 20,
//     job: "developer",
//   },
//   {
//     name: "saba",
//     age: 27,
//     job: "wordpress developer",
//   },
//   {
//     name: "gio",
//     age: 27,
//     job: "designer",
//   },
// ];

// const ages = people.map(function (item) {
//   return item.age + 20;
// });
// console.log(ages);

// we can also create properties and assign values whatever we want
// const newPersons = people.map(function (item) {
//   return { firstName: item.name, oldAge: item.age };
// });
// console.log(newPersons);

// filter()
// does return a new array
// doesn't change original array
// can manipulate the item of a new array

// const people = [
//   {
//     name: "luka",
//     age: 20,
//     job: "developer",
//   },
//   {
//     name: "saba",
//     age: 27,
//     job: "wordpress developer",
//   },
//   {
//     name: "gio",
//     age: 30,
//     job: "designer",
//   },
// ];

// search whose age is below 25
// it will delete all array item whose age is 25 or above
// const ageFilter = people.filter(function (item) {
//   return item.age < 25;
// });
// console.log(ageFilter);

// find()
// doesn't change original array
// returns object
// if no match, it is undefined
// great for getting unique value

// const people = [
//   {
//     name: "luka",
//     age: 20,
//     job: "developer",
//     id: 1,
//   },
//   {
//     name: "saba",
//     age: 27,
//     job: "wordpress developer",
//     id: 2,
//   },
//   {
//     name: "gio",
//     age: 27,
//     job: "designer",
//     id: 3,
//   },
// ];

// get unique value with id
// const person = people.find(function (item) {
//   return item.id === 3;
// });
// console.log(person);

// reduce
// doesn't change original array
// reduce - returns single value and function's accumulated result
// 1 parameter ('acc') - total of all calculation
// 2 parameter ('item') - item of array

// const people = [
//   {
//     name: "luka",
//     age: 20,
//     job: "developer",
//     salary: 212,
//   },
//   {
//     name: "saba",
//     age: 27,
//     job: "wordpress developer",
//     salary: 326,
//   },
//   {
//     name: "gio",
//     age: 27,
//     job: "designer",
//     salary: 557,
//   },
// ];

// calculate total salary
// const total = people.reduce(function (acc, item) {
//   const newVal = (acc += item.salary);
//   return newVal;
// }, 0);
// console.log(total);

// ---------

// Math Object

// Math.floor() - it rounds number down;
// const number = 4.5654;
// const result = Math.floor(number);
// console.log(result); result 4

// Math.ceil() - it rounds number up
// const number = 8.6654;
// const result = Math.ceil(number);
// console.log(result); result 9

// Math.sqrt() - square of the number
// const number = 81;
// const result = Math.sqrt(number);
// console.log(result); result 9

// Math.cbrt() - cube of the number
// console.log(Math.cbrt(125)); 5 * 5 * 5 = 125

// Math.abs() absolute (positive) value
// console.log(Math.abs(-4.5));

// Math.PI - shows how many is PI in math
// console.log(Math.PI);

// Math.pow(first operand, second) - raises the first operand to the power of the second operand
// console.log(Math.pow(9, 3));

// Math.min() - minimum value
// console.log(Math.min(4, 5, 6, 7, 8, 9, 19)); result 4
// Math.max() - maximum value
// console.log(Math.max(4, 5, 6, 7, 8, 9, 19)); result 19

// Math.random() - random number from 0 to 1 but not include 1

// if we want to start random number from 1 to 10, we should multiply by 10
// const result = Math.random() * 10;
// console.log(result);
// if we want rounded random number from 1 to 10
// const result = Math.floor(Math.random() * 10);
// console.log(result);

// ---------

// date object
// in date object, month is 0 to 11, cuz in js base index is 0
// it will show as integers
// const date = new Date();
// const date = new Date(year, month, day, hours, minutes, seconds, miliseconds);
// console.log(date); full date
// console.log(date.getDate()); day of the month
// console.log(date.getDay()); day of the week
// console.log(date.getMonth()); get the month
// console.log(date.getFullYear()); get only current year
// console.log(date.getHours()); hours
// console.log(date.getMinutes()); minutes
// console.log(date.getSeconds()); seconds
// console.log(date.getTime()) time in miliseconds

// setting new date
// const date = new Date("1/25/2001");
// console.log(date);
// console.log(date.setDate('2')); set day of the month
// console.log(date.setDay('3')); day of the week
// console.log(date.setMonth('11')); get the month
// console.log(date.setFullYear('2001')); get only current year
// console.log(date.setHours('22')); hours
// console.log(date.setMinutes('43')); minutes
// console.log(date.setSeconds('2')); seconds

// ---------

// IIFE - Imediately-Invoked Function Expression
// we can have same variables and same functionalities without getting an error
// IIFE is the same as normal function, better usecase is, it's good to protect variables from overwriting

// const num1 = 30;
// const num2 = 50;
// function add() {
//   console.log(`result is : ${num1 + num2}`);
// }
// add();

// IIFE
// (function () {
//   const num1 = 500;
//   const num2 = 400;
//   console.log(`reuslt is : ${num1 + num2}`);
// })();

// IIFE with parameters
// (function (param1, param2) {
//   console.log(`reuslt is : ${param1 + param2}`);
// })(300, 400);

// assing variable
// const result = (function (val1, val2) {
//   console.log(`result is ${val1 + val2}`);
// })(300, 400);

// ---------

// Hoisting
// safer to access only after initialized,
// function and var declarations are hoisted, it means that, we can access them before initialization

// console.log(firstName); cannot access before initialization
// console.log(lastName); cannot access before initialization
// but
// we can access var but not value, it shows undefined
// console.log(random); result undefined

// const firstName = "john";
// let lastName = "jordan";
// var random = "random";

// we can access function wherever we want, cuz when we create function it declaration goes top of the document
// display();
// function display() {
//   console.log("hello world");
// }

// ---------

// Closure
// function within a function
// gives u access what is written in outer function to inner function

// function outer() {
//   const private = "private";
//   function inner() {
//   we can access variable from outer function
//     console.log(`hello there secret is : ${private}`);
//   }
// function can return a function
//   return inner;
// }
// access inner function - option 1
// const value = outer();
// value();

// option 2
// we invoke amount of number how many inner function we have
// outer()();

// ---------

// Closure - example

// function newAccount(name, initialBalance) {
//   let balance = initialBalance;
//   function showBalanace() {
//     console.log(`Hey ${name}, your balance is ${balance}`);
//   }
//   function deposit(amount) {
//     balance += amount;
//     showBalanace();
//   }
//   function withDraw(amount) {
//     if (amount > balance) {
//       console.log(`Hey, ${name}, sorry not enough funds`);
//       return;
//     }
//     balance -= amount;
//     showBalanace();
//   }
//   return { showBalanace: showBalanace, deposit: deposit, withDraw: withDraw };
// }

// const john = newAccount("john", 200);
// const bob = newAccount("bob", 500);
// john.deposit(400);
// john.withDraw(100);

// ----------

// Set() - prevent display duplicate elements

// const fruits = new Set(["a", "a", "a", "b", "b", "c", "c"]);
// console.log(fruits);

// add item in Set()
// const fruits = new Set();
// fruits.add("a");
// fruits.add("b");
// fruits.add("c");
// console.log(fruits); result ['a', 'b', 'c']

// delete item in Set()
// const fruits = new Set(["a", "a", "a", "b", "b", "c", "c"]);
// fruits.delete("a");
// console.log(fruits); result ['b', 'c']

// has() check if value exists in Set()
// const fruits = new Set(["a", "a", "a", "b", "b", "c", "c"]);
// const has = fruits.has("c");
// console.log(has); result true

// values() - returns all value in Set()
// const fruits = new Set(["a", "a", "a", "b", "b", "c", "c"]);
// console.log(fruits.values());

// size - returns number of element in Set()
// const fruits = new Set(["a", "a", "a", "b", "b", "c", "c"]);
// console.log(fruits.size); result 3

// ----------

// Map() - creates key/value pairs without duplicating them

// set('key', 'value') - set up key/value pairs

// const fruits = new Map();
// fruits.set("apple", 500);
// fruits.set("apple", 700);
// fruits.set("banana", 200);
// console.log(fruits);

// get() - get value with key
// const fruits = new Map([
//   ["apples", { name: "luka" }],
//   ["bananas", 300],
//   ["bananas", 300],
//   ["peaches", 700],
//   ["oranges", 400],
//   ["peaches", 700],
// ]);
// console.log(fruits.get("apples"));

// delete() - remove value with key
// const fruits = new Map([
//   ["apples", { name: "luka" }],
//   ["bananas", 300],
//   ["bananas", 300],
//   ["peaches", 700],
//   ["oranges", 400],
//   ["peaches", 700],
// ]);
// fruits.delete('bananas');
// console.log(fruits);

// has() - Returns true if a key exists in a Map
// const fruits = new Map([
//   ["apples", { name: "luka" }],
//   ["bananas", 300],
//   ["bananas", 300],
//   ["peaches", 700],
//   ["oranges", 400],
//   ["peaches", 700],
// ]);
// console.log(fruits.has('apples')); result true

// size - number of elements in a Map
// const fruits = new Map([
//   ["apples", { name: "luka" }],
//   ["bananas", 300],
//   ["bananas", 300],
//   ["peaches", 700],
//   ["oranges", 400],
//   ["peaches", 700],
// ]);
// console.log(fruits.size); result 4

// ----------

// Errors
// Reference Error - variable isn't declared
// Syntax Error - miss spell or write something incorrectly

// ----------

// "use strict" - code should be executed in strict mode
// use it top of the document to enable strict mode
