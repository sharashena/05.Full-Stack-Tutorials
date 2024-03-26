// JavaScript is synchronous language
// JavaScript is single threaded it's means that, regardless how many lines of code we have, javascript will execute next line when current is finished, even calculation takes long time

// console.log("i'm first"); first execute
// console.log("i'm second"); second execute
// console.log("i'm third"); third execute

// console.log("i'm first"); fourth
// console.log("i'm second"); fifth
// boilingWater(); sixth
// console.log("i'm third"); seventh

// function boilingWater() {
//   console.log("boiling..."); sixth
//   for (let i = 0; i < 100; i++) {
//     console.log("still not done"); sixth
//   }
//   console.log("done"); sixth
// }

// -----------

// asynchronous
// first execute synchronous and second asnychronous
// if js has to do something, only when js finish doing then it will execute code
// setTimeout runs asynchronously
// callbacks runs asynchronously

// boilingWater(5000);
// console.log("chop carrot");

// callback hell
// function boilingWater(time) {
//   console.log("boiling...");
//   setTimeout(function () {
//     console.log("done");
//     console.log("add carrots");
//     setTimeout(() => {
//       console.log("carrots done");
//       console.log("add onion");
//       setTimeout(() => {
//         console.log("onion done");
//       }, 1000);
//     }, 2000);
//   }, time);
// }

// -----------

// Promises
// Promises - Pending, resolved, rejected
// promises are the same as callback functions, using promise is clean code
// if successfuly completed we use resolve
// if not successfuly completed we use reject
// .then - if promise success and access resolve
// .catch - if promise fails and access reject
// if resolve is empty, also .then will be undefined
// we can pass in resolve or reject whatever we want, exam: array, object, string, callbacks

// pending now
// const promise = new Promise((resolve, reject) => {});
// console.log(promise);

// full filled
// const promise = new Promise((resolve, reject) => {
//   let value = true;
//   if (value) {
//     resolve([1, 2, 3, 4, 5]);
//   } else {
//     reject("value is false");
//   }
// });
// access promise resolve
// promise.then(data => {
//   console.log(data);
// });

// access promise reject
// promise.catch(error => {
//   console.log(error);
// });

// -----------

// reject - example
// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");
// const url = "https://source.unsplash.com/random/800x800/?img=1";

// btn.addEventListener("click", () => {
//   loadImage(url)
//     .then(data => container.appendChild(data))
//     .catch(err => console.log(err));
// });

// const loadImage = function (url) {
//   const promise = new Promise((resolve, reject) => {
// Image constructor create html img element
//     let img = new Image();
//     img.addEventListener("load", () => {
//       resolve(img);
//     });
//     img.addEventListener("error", () => {
//       reject(new Error(`failed to load image from the source : ${url}`));
//     });
//     img.src = url;
//   });
//   return promise;
// };

// -----------

// promise - example

// const h1 = document.querySelector(".h1");
// const h2 = document.querySelector(".h2");
// const h3 = document.querySelector(".h3");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   colors(2000, h1, "red")
//     .then(() => colors(1000, h3, "blue"))
//     .then(() => colors(1500, h2, "yellow"))
//     .catch(err => console.log(err));
// });

// const colors = (time, element, color) => {
//   const promise = new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`there is an error with your element ${element}`));
//     }
//   });
//   return promise;
// };

// -----------

// async/await
// it is same as regual promise, in asyc/await we avoid chains, like: .then, catch
// we use try {} catch () {}
// we must use async before a function
// we must use await inside async function
// async returns a promise by default, it means that it's wrapped in promise
// await makes javascript wait until the promise resolves and return its result, after await complete, then below of await code will work
// in async function, other values are wrapped in a resolved promise automaticaly

// async in regural function
// async function something() {
//     await
// }

// arrow function
// const otherFunction = async () => {
//     await
// }

// const h1 = document.querySelector(".h1");
// const h2 = document.querySelector(".h2");
// const h3 = document.querySelector(".h3");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", async () => {
//   try {
// in try we put code and if one of them is error, it will handle them in catch block
//     await colors(1000, h1, "red");
//     await colors(2500, h3, "green");
//     await colors(2000, h2, "blue");
//   } catch (err) {
//     console.log(err);
//   }
//   console.log("hello");
// });
// const colors = (time, element, color) => {
//   const promise = new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`there is an error with your element ${element}`));
//     }
//   });
//   return promise;
// };
