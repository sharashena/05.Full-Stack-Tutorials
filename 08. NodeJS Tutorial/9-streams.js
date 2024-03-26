// streams are good for reading big files
// by default size of buffer is 64kb
// last buffer is reminder
// highWaterMark is control size

const { createReadStream } = require("fs");

// const stream = createReadStream("./content/first.txt");
const stream = createReadStream("./content/first.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", result => {
  console.log(result);
});

// handle error with events
stream.on("error", err => {
  console.log(err);
});

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const fileStrem = fs.createReadStream("./content/first.txt", "utf8");
    fileStrem.on("open", () => {
      // pushin from readStrem into writeStream
      // we can read and write data
      fileStrem.pipe(res);
    });
    fileStrem.on("error", err => {
      console.log(err);
    });
  })
  .listen(5000);
