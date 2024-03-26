// option 2 to use express, invoke rightaway
// const app = require("express")();
// const app = express();

// option 1 to use express
const express = require("express");
const app = express();

// app.get(1.route path, 2.callback); callback function runs everytime when user is performing a get request
app.get("/", (req, res) => {
  // res.send() send response to server
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found<h1/>");
});

app.listen(5000, () => {
  console.log("server is listening on port : 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all - referrs to all of them and if page not found (error pages)
// app.use - responsible for middleware
// app.listen - listening on port
