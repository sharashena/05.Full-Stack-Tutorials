// CommonJS, every file in node is module (by default)
// if we want to access modules we use require

// option 1 with properties
// it's same as import names from './names';
const names = require("./names");
const sayHi = require("./utils");

// sayHi("luka");
// sayHi(names.john);
// sayHi(names.peter);

// option 2 with destructure
const { john, peter } = require("./names");
const sayHi = require("./utils");

sayHi("luka");
sayHi(john);
sayHi(peter);

// alternative syntax
const data = require("./alternative-syntax");
console.log(data);
