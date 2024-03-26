// asyncronously
const { readFile, writeFile } = require("fs");
// 1
console.log("start");

// we must use utf8 encode to prevent getting buffer
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the results : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // 3
        console.log("done with this task");
      }
    );
  });
});
// 2
console.log("starting next task");
