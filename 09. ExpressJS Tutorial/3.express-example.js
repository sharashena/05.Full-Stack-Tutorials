const express = require("express");
const app = express();
const path = require("path");

// static assets - static files are files which mustn't change during running a server
// grab static resources such as css, javascript .svg files and express will handle to use proper status codes, and content-types and etc. by itself.
app.use(express.static("./public"));

// option 1
// if in public is not index.html
app.get("/", (req, res) => {
  // send file to server with res.sendFile();
  res.sendFile(path.resolve(__dirname, "./navbar-app", "index.html"));
});

// option 2 - all Static
// if we grab index.html into public folder, when we enter to browser, it will serve index.html by default
// index.html always gonna be root
// we dont need anymore app.get('/') cuz index.html is into public folder.

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server listening on port : 5000");
});
