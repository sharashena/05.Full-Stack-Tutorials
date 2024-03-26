// fs - file system module
// readFileSync is for reading files in modules
// writeFileSync is for create own files in modules
const { readFileSync, writeFileSync } = require("fs");
console.log("start");

// 1. path of file 2. encode.
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// if there is no file node will create it and if file is already there node will override this file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the results ${first}, ${second}`,
  //   when we add flag we create new value
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
