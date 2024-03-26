// npm - global command, comes with node
// npm stands for - node package manager

// local dependency - use for particular project
// npm i <packageName>

// global dependency - use for any project
// npm i -g <packageName>

// package.json - manifest file (stores important info about project/package exm: dependencies)
// there is three way to create package.json
// 1.
// manual approach (create package.json in the root, create properties and etc)
// 2.
// npm init - to create package.json and set properties and values what we want
// 3.
// npm init -y (everything sets up by default)

// access package
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
