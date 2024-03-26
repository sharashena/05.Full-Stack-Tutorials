// AJAX - Asynchronous JavaScript And XML

// XMLHttpRequest(); XML request

// readyState
// 0 - unsent - open() not called yet
// 1 - opened. open() has been called, server connection established
// 2 - headers_received - send() has been called, request has been sent to server
// 3 - loading - processing request
// 4 - done - request finished and response is ready

// status
// 200 - OK
// 403 - Forbidden
// 404 - Not Found

// statusText
// 	Returns the status text (e.g. "OK" or "Not Found")

// open() methods: the request type GET, POST, PUT, PATCH, DELETE
// url: the file/url location
// async: true (asynchronous) or false (synchronous)
// user: optional user name
// password: optional password

// const x = new XMLHttpRequest().open('method', 'url', async, user, password)
// x.onreadystatechange = callback;

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   getData();
// });

// function getData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "../js/api/sample.txt");
// function will be called when the readyState property changes
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const text = document.createElement("p");
//       text.textContent = xhr.responseText;
//       document.body.appendChild(text);
//     } else {
//       console.log({
//         status: xhr.status,
//         statusTxt: xhr.statusText,
//       });
//     }
//   };
//   xhr.send() Sends the request to the server, Used for GET requests
//   xhr.send(string); Used for POST requests
//   xhr.send();
// }

// ----------

// JavaScript Object Notation - JSON
// in JSON file format we must use double quotation mark

// const btn = document.querySelector(".btn");
// const path = "http://localhost:8080/js/api/people.json";

// btn.addEventListener("click", function () {
//   getData(path);
// });

// const getData = url => {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const parse = JSON.parse(xhr.responseText);
//       const displayData = parse
//         .map(({ name }) => {
//           return `<p>${name}</p>`;
//         })
//         .join("");
//       const el = document.createElement("div");
//       el.innerHTML = displayData;
//       document.body.append(el);
//     } else {
//       console.log({
//         status: xhr.status,
//         statusText: xhr.statusText,
//       });
//     }
//   };
//   xhr.open("GET", url);
//   xhr.send();
// };

// ----------

// fetch requests

// const path = "http://localhost:8080/js/api/people.json";

// const getData = () => {
//   fetch(path)
//     .then(response => response.json())
//     .then(data => console.log(data))
//      .catch(err => console.log(err))
// };

// fetch with async
// const getData = async () => {
// try {
//   const response = await fetch(path);
//   const data = await response.json();
//   console.log(data);
// };
// } catch (error) {
//     console.log(error);
// }
