const express = require("express");
const app = express();

// middleware is function which execute during request to the server
// each middleware have access to request and response object
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //   when we use middleware always send data to server otherwise it creates loop

  // option 1
  //   res.send('testing')
  //   option 2 - next displays what is written in main. i.e. it displays "home"
  next();
};

// multiple middleware
const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "luka") {
    // add property in req objeect
    req.user = { name: "luka", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

// second parameter is middleware
// instead of main page displays "home" if we put middleware it shows what is in middleware function

// if we have many routes these middlewares can cause bugs and poblems
// better use is app.use();

// app.get("/", logger, (req, res) => {
//   res.send("home");
// });
// app.get("/about", logger, (req, res) => {
//   res.send("about");
// });

// app.use(1.base path, 2.middleware function) will invoke this middleware for every route
// we can use in app.use()  our own function / express / third party libraries
// order is important
// if we pass path it will apply to any route after /about
// single middleware
// app.use("/about", logger);
// multiple middleware in array
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("go");
});

// if we want to access multiple middleware on exact route we use []
app.get("/about/api", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("about");
});

app.listen(5000, () => {
  console.log("server is listening on port : 5000");
});
