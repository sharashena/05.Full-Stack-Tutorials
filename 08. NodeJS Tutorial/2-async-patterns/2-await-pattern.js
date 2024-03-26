// const { readFile, writeFile } = require("fs");
// best option to read and write files
const { readFile, writeFile } = require("fs").promises;
// option 3 with util
const util = require('util')
// promisify turns promise into function
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// option 2
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// option 1 to use better code to read files

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
