// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// -----------

// other window methods
// window.open() - open a new window
// window.close() - close the current window

// -----------

// Window Screen
// The window.screen object can be written without the window prefix.

// screen.width
// returns the width of the visitor's screen in pixels
// console.log(screen.width);

// screen.height
// returns the height of the visitor's screen in pixels
// console.log(screen.height);

// screen.availWidth and screen.availHeight
// returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
// console.log(screen.availWidth);
// console.log(screen.availHeight);

// -----------

// window location
// The window.location object can be written without the window prefix.

// console.log(location.href); current page path
// console.log(location.hostname); returns domain name
// console.log(window.location.pathname); returns the path and filename of the current page
// console.log(window.location.protocol); returns web protocol used (http: or https:)
// console.log(location.search) returns browser url query parameters
// console.log(location.assign("index.html")); redirect to other document

// -----------

// window history - contains browser history
// written without the window prefix.

// window.history.back(); same as clicking back in the browser
// history.forward(); same as clicking forward in the browser
// history.go(1); go forward by 1
// history.go(-2); go back by 2

// -----------

// window.confirm()
// confirm()
// confirm box is often used if you want the user to verify or accept something.
// When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
// If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

// if (confirm("press a button")) {
//   console.log("pressed ok");
// } else {
//   console.log("pressed cancel");
// }

// -----------

// prompt box is often used if you want the user to input a value before entering a page.
// window.prompt();
// prompt('question', 'defaultText')

// const prom = prompt("please enter your name", "john doe");
// console.log(prom); result john doe

// -----------

// Locate the User's Position
// getCurrentPosition(1. if user accept geolocation. 2. if user doesn't accept location it will handle callback function) method is used to return the user's position.

// const btn = document.querySelector("button");
// const h1 = document.querySelector("h1");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         h1.innerHTML =
//           position.coords.latitude + "<br>" + position.coords.longitude;
//       },
//       err => {
//         h1.innerHTML = err.message;
//       }
//     );
//   } else {
//     h1.innerHTML = "geolocation doesn't support your device";
//   }
// }

// btn.addEventListener("click", getLocation);

// watchPosition() - watching current user's position
// clearWatch() - stop watching user's current postion, the watchPosition() method

// const btn = document.querySelector("button");
// const h1 = document.querySelector("h1");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(
//       position => {
//         h1.innerHTML =
//           position.coords.latitude + "<br>" + position.coords.longitude;
//       },
//       err => {
//         if (err.code) {
//           h1.innerHTML = err.message;
//         }
//       }
//     );
//   } else {
//     h1.innerHTML = "geolocation doesn't support your device";
//   }
// }

// btn.addEventListener("click", getLocation);
