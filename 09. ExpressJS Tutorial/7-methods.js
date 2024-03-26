// GET - read data
// POST - insert data
// PUT - update specific data
// DELETE - delete data

const express = require("express");
const app = express();
let { people } = require("./data");
// urlencoded is middleware function, it parses incoming request with URL-encoded payloads and it is based on a body parser
// extended option allows to choose between parsing the URL-encoded data with the querystring library (when false ) or the qs library (when true )
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./methods-public"));

// get method
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// post request
app.post("/login", (req, res) => {
  // we can't access what request we are sending back in body before we setup middleware express
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    return res.status(401).send("Please Provide Credentials");
  }
});

// express.json() function is a middleware function used in Express. It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

// javascript example
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

// postman
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

// put method
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find(person => person.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map(person => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

// delete method
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find(person => person.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.filter(person => person.id !== Number(id));
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server is listening on port : 5000");
});
