const EventEmitter = require("events");

const customEmitter = new EventEmitter();
// on - on will listen that event
// emit - emits an event

// 1.string (name of event) 2. callback function
// we can create many emits how many we want
// and use emit arguments in on() callback functions
customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} ${id}`);
});
// if emit will be here emit will listen only one event
// customEmitter.emit("response");
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

// emit this
// but order is important
// emit function must be bottom to listen all emits
// customEmitter.emit("response");

// we can pass arguments in emit
// 1. name of event, 2. arguments
customEmitter.emit("response", "john", 34);

// using event with http module
// another way

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
