// named export - export import names must match each others
// import { people, random } from "./modules/data.js";
// console.log(random);

// ----------

// default export - import with whatever name we want
// import whateverNameWeWant from "./modules/showPeople.js";

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   container.innerHTML = whateverNameWeWant(people);
// });

// ----------

// renaming named exports with keyword as
// import { name as free } from "./modules/data.js";
// console.log(free);

// ----------

// change named export as default
// import hello from "./modules/data.js";
// console.log(hello);

// ----------

// import everything
// import * as data from "./modules/data.js";
// console.log(data.random, data.name, data.random2);

// ----------

// import everything what is written in data
// import './modules/data.js';
