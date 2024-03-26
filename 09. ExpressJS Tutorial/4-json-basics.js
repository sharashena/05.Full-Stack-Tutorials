const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  // res.json() sends a JSON response with correct content-type, it uses JSON.stringify();
  //   create api with res.json(body goes here)
  res.json(products);
});

app.listen(5000, () => {
  console.log("server is listening on port : 5000");
});
