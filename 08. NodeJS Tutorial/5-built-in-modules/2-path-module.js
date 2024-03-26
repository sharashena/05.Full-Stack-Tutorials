const path = require("path");

console.log(path.sep);
console.log(path.join("/content", "test.txt"));
const filePath = path.join("/content", "test.txt");

// path of last portion
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, "content", "test.txt");
console.log(absolute);
