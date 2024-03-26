const http = require("http");

// creating server
// first parameter is incoming requests
// second parameter is what we are sending back
const server = http.createServer((req, res) => {
  // it's not allowed to send two response per request
  // only allowed one response per request
  // we have two option to solve that
  // use returns in every if statement
  // or use if/else statement
  //   option 1
  //   if (req.url === "/") {
  //     res.write('it's used for first time responses')
  //     res.end("Welcome to our home page");
  //     return;
  //   }
  //   if (req.url === "/about") {
  //     res.end("here is short history");
  //     return;
  //   }
  
  // option 2
  if (req.url === "/") {
    // res.write() - appears on first response
    // res.end() - ends the current response process
    // res.end() - must be called on each response
    // res.end() - signals to server that all of response headers and body have been sent.
    res.end("Welcome to our home page");
    return;
  } else if (req.url === "/about") {
    res.end("here is short history");
    return;
  }
  res.end(
    `<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back to home</a>
    `
  );
});

// what will be our port to our server
// after execute if we go to browser localhost:5000 we see text
server.listen(5000);
