// DOM - Document Object Model

// get elements by id
// select elements or group of elements that we want
// select elements and style however we want
// if ids don't match it won't display in browser
// getElementById('element id');

// make styles with variable
// const h1 = document.getElementById("title");
// h1.style.color = "red";

// make styles directly
// document.getElementById("btn").style.color = "red";

// refactor code
// const btn = document.getElementById("btn");
// btn.style.backgroundColor = "blue";

// get elements by tag name
// node-list is array like objects
// getElementsByTagName('tagname');

// const headings = document.getElementsByTagName("h2");
// access first h2 element
// headings[0].style.color = "tomato";
// access second h2 element
// headings[1].style.color = "red";

// get elements by class name
// getElementsByClassName('class name')

// const listItems = document.getElementsByClassName("special");
// listItems[1].style.color = "blue";
// listItems[2].style.backgroundColor = "red";

// ---------

// querySelector & querySelectorAll
// querySelector('any css') - selects single
// querySelectorAll('any css') - selects all
// in querySelectorAll, we can use forEach method, but not in getElementsBy
// we can use classes, ids and tag names also

// access with id
// const ul = document.querySelector("#result");
// ul.style.backgroundColor = "blue";
// access with class
// const item = document.querySelector(".special");
// we can access also advance css
// const lastItem = document.querySelector("li:last-child");
// const list = document.querySelectorAll(".special");

// list.forEach(function (item) {
//   item.style.color = "red";
//   console.log(item);
// });

// ---------

// navigate to DOM - children
// access element children with querySelector without using any methods
// childNodes - returns all childNodes including whitespaces which is reffered as #text

// const result = document.querySelector("#result");
// console.log(result.childNodes);
// console.log(result.children); will display ul children without whitepsaces

// navigate to DOM - parentElement
// access parent element

// const heading = document.querySelector("h2");
// if there is no parent element, result will be null
// console.log(heading.parentElement);
// if parent element has parent element and on and on
// console.log(heading.parentElement.parentElement);

// styling child and parent elements
// const heading = document.querySelector("h2");
// heading.style.color = "red";
// heading.style.textTransform = "capitalize";
// const parent = heading.parentElement;
// parent.style.backgroundColor = "#dedede";
// parent.style.padding = "4rem";

// ---------

// navigate to DOM - previousSibling, nextSibling
// returns whitespaces, thats why we should use methods twice

// access next sibling
// const result = document.querySelector("li");
// console.log(result.nextSibling); result #text
// console.log(result.nextSibling.nextSibling);
// result.nextSibling.nextSibling.style.color = "red";

// access previous sibling
// const result = document.querySelector("li:last-child");
// result.previousSibling.previousSibling.style.color = "seagreen";

// ---------

// navigate to DOM - previousElementSibling, nextElementSibling
// no whitespaces, access next or previous element directly
// const first = document.querySelector("li");
// const last = document.querySelector("li:last-child");
// first.nextElementSibling.style.color = "red";
// last.previousElementSibling.style.color = 'yellow'

// ---------

// nodeValue, textContent
// textContent shows text of an element
// both are the same

// const item = document.getElementById("special");
// nodeValue
// const value = item.firstChild.nodeValue;
// console.log(value);
// console.log(item.textContent);

// override value with textContent
// const li = document.querySelector("li").nextElementSibling;
// li.textContent = "sharashena";

// ---------

// getAttribute(), setAttribute();
// getAttribute() will get attribute value
// const links = document.querySelector(".first");
// const value = links.getAttribute("class");
// console.log(links);
// console.log(value);

// setAttribute(1.what attr we want 2.attr value) will create attribute and value

// const li = document.querySelector("li");
// const last = li.nextElementSibling;
// create class in anchor element
// const newAttr = last.setAttribute("class", "last");
// console.log(last);

// ---------

// classList and className
// className will wipe out all existing classes and add new one
// className shows element class value
// const first = document.getElementById("first");
// const second = document.getElementById("second");
// const third = document.getElementById("third");
// className
// get item class value
// const classValue = first.className;
// console.log(classValue);

// add class and value to element
// second.className = "colors";
// console.log(second);

// add multiple class
// second.className = "colors do";
// console.log(second);

// classList
// add class
// first.classList.add("color");
// console.log(first);

// add multiple class
// first.classList.add("color", "bcg");
// console.log(first);

// remove class
// first.classList.add("color");
// first.classList.remove("color");
// console.log(first);

// toggle class - toggling add and remove class when clicking

// contains
// if element contains specific class value, return true
// first.classList.add("color");
// console.log(first);
// const bool = first.classList.contains("color");
// if (bool) {
//   console.log("it's true");
// } else {
//   console.log("it's false");
// }

// replace class value
// replace(1. old class value 2. new class value)
// first.classList.add("color");
// console.log(first);
// first.classList.replace("color", "abc");

// ---------

// createElement, createTextNode, appendChild
// display child element with appendChild
// create elements dynamically
// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// create h1 with text
// const h1 = document.createElement("h1");
// const text = document.createTextNode("i'm heading one");
// h1.appendChild(text)
// const val = document.body.appendChild(text);

// ---------

// insertBefore(1. what element we want to instert 2. which element's insert before)

// we instert created element before h1
// const h1 = document.getElementById("title");
// const h2 = document.createElement("h2");
// const text = document.createTextNode("im heading two");
// h2.appendChild(text);
// document.body.insertBefore(h2, h1);

// ---------

// replaceChild('new', 'old')

// const h1 = document.querySelector("h1");
// const p = document.createElement("p");
// const pText = document.createTextNode("p element");
// p.appendChild(pText);
// document.body.insertBefore(p, h1);

// replaced new h4 element instead p
// const h4 = document.createElement("h4");
// const h4Text = document.createTextNode("h4 element");
// h4.appendChild(h4Text);
// document.body.replaceChild(h4, p);

// ---------

// prepend, innerText
// there are multiple ways to create and display elements
// it is more easier to display elements

// innerText
// const p = document.createElement("p");
// p.innerText = "hello i m p element";

// easier than insertBefore
// prepend() inserts before first child element
// document.body.prepend(p);

// ---------

// remove, removeChild

// remove element
// const result = document.querySelector("#result");
// result.remove();

// remove child element
// const result = document.querySelector("#result");
// const child = result.querySelector("h1");
// result.removeChild(child);

// ---------

// innerHTML, textContent
// textContent will show only text
// innerHTML will show text with html code

// const ul = document.querySelector("ul");
// we can do this with innerHTML
// ul.innerHTML = `
// <li>list item</li>
// <li>saba</li>
// <li>luka</li>
// `;
// but we can't do with textContent - that is difference

// ---------

// change css with style property
// we use style property and then css property
// const h1 = document.querySelector("h1");
// h1.style.color = "red";

// ---------

// events
// addEventListener()
// when we click button then do something we want
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   console.log("u clicked me");
// });

// ---------

// mouse events
// click - after click an element
// mouseenter - moved onto an element
// mouseleave - moved out of an element

// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log("down");
// });

// mouseenter
// button.addEventListener("mouseenter", function () {
//   console.log("entered");
// });

// mouseleave
// button.addEventListener("mouseleave", function () {
//   console.log("left");
// });

// ---------

// key events
// keypress - when keyboard key is pressed
// keydown - when key is down
// keyup - when key is released

// const input = document.querySelector("input");

// keypress
// input.addEventListener("keypress", function () {
//   console.log("key is pressed");
// });

// keydown
// input.addEventListener("keydown", function () {
//   console.log("key is down");
// });
// input.addEventListener("keyup", function () {
//   console.log("key is up");
// });

// ---------

// event object
// e.currentTarget
// e,preventDefault() - prevents refreshing page when submiting form
// const h1 = document.querySelector("h1");
// const btn = document.querySelector(".btn");

// h1.addEventListener("click", function (e) {
//   console.log(e.currentTarget);
// });

// e.currentTarget vs e.target
// currentTarget will triger to parent element, but target will triger to the only element which we clicked

// currentTarget
// const btns = document.querySelectorAll(".btn");
// btns.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     e.currentTarget.style.color = "green";
//   });
// });

// target
// const btns = document.querySelectorAll(".btn");
// btns.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     e.target.style.color = "green";
//   });
// });

// ---------

// mouseenter
// if we mouse over to child element it will point anyway to parent element
// const element = document.querySelector("button");
// document.body.prepend(element);
// element.addEventListener("mouseenter", function (e) {
//   console.log("mouse enter");
//   console.log(e.target);
// });

// mouseleave
// event fires when mouse leave parent element
// const element = document.querySelector("button");
// document.body.prepend(element);
// element.addEventListener("mouseleave", function (e) {
//   console.log("mouse left");
//   console.log(e.target);
// });

// mouseover
// event fires when mouse enters to parent element and also children
// const element = document.querySelector("div");
// document.body.prepend(element);
// element.addEventListener("mouseover", function (e) {
// console.log("mouse over");
// console.log(e.target);
// });

// mouseout
// event fires when mouse leave parent element and also children
// const element = document.querySelector("div");
// document.body.prepend(element);
// element.addEventListener("mouseout", function (e) {
//   console.log("mouse left");
//   console.log(e.target);
// });

// mousedown
// event fires when mouse is clicked but not released, to whole element also children
// const element = document.querySelector("div");
// document.body.prepend(element);
// element.addEventListener("mousedown", function (e) {
//   console.log("mouse button clicked but not released");
//   console.log(e.target);
// });

// mouseup
// event fires when mouse is released, to whole element also children
// const element = document.querySelector("div");
// document.body.prepend(element);
// element.addEventListener("mouseup", function (e) {
//   console.log("mouse button released");
//   console.log(e.target);
// });

// ---------

// forms
// in form we have value property which presents input value

// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const password = document.getElementById("password");

// form.addEventListener("submit", function (e) {
// prevent refreshing page
//   e.preventDefault();
//   console.log(name.value);
// });

// ---------

// localStorage and sessionStorage
// between these two is, localStorage will storage something permanently untill we delete it, while session storage, when we close tab session will deleted
// web storage API - provided by browser
// getItem, setItem, removeItem, clear

// localStorage.setItem('key, with this key we can getItem from localStorage', 'value, what value will be saved in localStorage')
// localStorage.setItem('key', 'value')
// sessionStorage.setItem("key", "saba");

// localStorage.setItem("key", "saba");
// getItem with key
// const newItem = localStorage.getItem("key");
// console.log(newItem);

// remove item from localStorage
// removeItem('key') remove item with key
// localStorage.setItem("name", "saba");
// localStorage.setItem("first", "luka");
// localStorage.setItem("second", "tatia");

// removing item
// localStorage.removeItem("name");

// clear everything from localStorage
// localStorage.clear();

// ---------

// JSON.stringify(), JSON.parse()
// when we save something to localStorage, we should turns into string and when we get item we parse to orginal array
// in localStorage or sessionStorage everything is saved as string
// JSON.stringify() turns into string
// JSON.parse() turns into original value

// const friends = ["john", "peter", "bob"];
// localStorage.setItem("friends", JSON.stringify(friends)); result 'john', 'peter', 'bob'
// const getValue = JSON.parse(localStorage.getItem("friends"));
// console.log(getValue); result ['john', 'peter', 'bob']

// let fruits;
// if (localStorage.getItem("fruits")) {
//   fruits = JSON.parse(localStorage.getItem("fruits"));
// } else {
//   fruits = [];
// }
// fruits.push("apple");
// fruits.push("apple");
// localStorage.setItem("fruits", fruits);

// ---------

// DomContentLoaded and load events
// DomContentLoaded - html document has been completly loaded, wtihout waiting for stylesheets, images to finish loading
// load - when the whole page has loaded, including all dependent resources such as stylesheets and images.

// click event
// doing after clicking an element
// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   btn.style.backgroundColor = "red";
// });

// DomContentLoaded
// const btn = document.querySelector("button");
// display when website loads
// window.addEventListener("DOMContentLoaded", function () {
//   btn.style.background = "tomato";
// });

// load
// when website fully loads
// window.addEventListener("load", function () {
//   btn.style.background = "tomato";
// });
