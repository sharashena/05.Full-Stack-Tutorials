// React 17
// import React from "react";
// in order to inject component to html we use ReactDom
// import ReactDom from "react-dom";

// create component with reg functions or arrow function
// we must set first letter to capitalize, when we are creating components
// function Greeting() {
// in components we use html, but officialy it called JSX syntax
//   return <h1>hello world</h1>;
// }

// ReactDom.render(<Greeting />, document.getElementById("root"));

// -----------

// React 18
// we don't need to import React
// import ReactDom from "react-dom/client";

// function Greeting() {
//   return <h4>first component</h4>;
// }

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// -----------

// react snippets
// rfc - react regular function component
// rfce - react regular function component with export default
// rafc - react arrow function component
// rafce - react arrow function component with export default

// -----------

// create element with React.createElement()
// React.createElement(1. what element we want to create 2. props object 3. element content)
// import React from "react";
// import ReactDom from "react-dom/client";

// const Greeting = () => {
//   return React.createElement("h2", {}, "hello world");
// };

// create nested element
// but this is hard coded
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

// simple code is here
// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   );
// }

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// -----------

// JSX Rules
// always return single element
// camelCase for html attribute
// className instead of class
// closing tag for every element
// formatting
// in order to create more than single element, we must wrap inside whole div, or semantic tags, or React.Fragment or <></> which is same as React.Fragment

// import React from "react";
// import ReactDom from "react-dom/client";

// const Greeting = () => {
//   return (
// <React.Fragment>
//   <div>
//     <h3>hello people</h3>
//   </div>
// </React.Fragment>

// <></>
//     <>
//       <div className="cameCase">
//         <h3 onClick={alert("hello world")}>hello people</h3>
//         <img src="" alt="" />
//       </div>
//     </>
//   );
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// -----------

// nested components, react dev tools

// import React from "react";
// import ReactDom from "react-dom/client";

// const Greeting = () => {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// };

// implicit return
// const Person = () => <h2>john doe</h2>;

// explisit return
// const Message = () => {
//   return <p>this is my message</p>;
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// -----------

// mini book project

// import React from "react";
// import ReactDom from "react-dom/client";

// const BookList = () => {
//   return (
//     <section>
//       <Book />
//       <Book />
//     </section>
//   );
// };
// const Book = () => {
//   return (
//     <article>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };
// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL604_SR604,400_.jpg"
//     alt="book"
//   />
// );
// const Title = () => <h1>Verity</h1>;
// const Author = () => <h4>Colleen Hoover</h4>;

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<BookList />);

// -----------

// CSS

// import React from "react";
// import ReactDom from "react-dom/client";
// import './index.css'

// const Greeting = () => {
//   return <div>
//     <h1 className="text" id="greeting">hello world</h1>
//   </div>;
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// JSX - CSS

// import React from "react";
// import ReactDom from "react-dom/client";
// import "./index.css";

// const Greeting = () => {
//   return (
//     <div>
//       <h1 style={{ color: "red", backgroundColor: "blue" }}>hello world</h1>
//     </div>
//   );
// };

// or

// const Greeting = () => {
// const newStyles = {
//   backgroundColor: "red",
//   color: "blue",
// };
//   return (
//     <div>
//       <h1 style={newStyles}>hello world</h1>
//     </div>
//   );
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// -----------

// JSX - JavaScript

// import React from "react";
// import ReactDom from "react-dom/client";
// import "./index.css";

// const Greeting = () => {
//   const title = "Hello World";
//   return (
//     <div>
//       <h1>{title.toUpperCase()}</h1>
//     </div>
//   );
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// -----------

// Props

// import React from "react";
// import ReactDom from "react-dom/client";

// const author = "Colleen Hoover";
// const title = "verity";
// const img =
//   "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL604_SR604,400_.jpg";

// const BookList = () => {
//   return (
//     <section>
//       <Book title={title} author={author} job="developer" />
//       <Book title="some title" author="some author" />
//     </section>
//   );
// };
// const Book = props => {
// return (
//   <article>
//     <img src={props.img} alt="book" />
//     <p>{props.job}</p>
//     <h1>{props.title}</h1>
//     <h4>{props.author}</h4>
//   </article>
// );

// with destructuring
//   const { title, author, job } = props;
//   return (
//     <article>
//       <img src={img} alt="book" />
//       <p>{job}</p>
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<BookList />);

// -----------

// props - children
// children prop is special and name must be the same
// children prop is everything that we render between opening and closing tag of the component

// import React from "react";
// import ReactDom from "react-dom/client";

// const author = "Colleen Hoover";
// const title = "verity";
// const img =
//   "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL604_SR604,400_.jpg";

// const BookList = () => {
//   return (
//     <section>
//       <Book title={title} author={author} job="developer">
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex soluta
//           dolores fugit in illo nulla adipisci, tenetur perspiciatis et cumque?
//         </p>
//       </Book>
//       <Book title="some title" author="some author" />
//     </section>
//   );
// };

// const Book = ({ job, title, author, children }) => {
//   return (
//     <article>
//       <img src={img} alt="book" />
//       <p>{job}</p>
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<BookList />);

// -----------

// simple list

// import React from "react";
// import ReactDom from "react-dom/client";

// const data = [
//   {
//     author: "Colleen Hoover",
//     title: "verity",
//     img: "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL604_SR604,400_.jpg",
//   },
//   {
//     author: "Colleen Hoover",
//     title: "Ugly Love: A Novel",
//     img: "https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL604_SR604,400_.jpg",
//   },
//   {
//     author: "Delia Owens",
//     title: "Where the Crawdads Sing",
//     img: "https://images-na.ssl-images-amazon.com/images/I/81LFAmKY4FL._AC_UL604_SR604,400_.jpg",
//   },
// ];

// const BookList = () => {
//   return (
//     <section>
//       {data.map((product, index) => {
// return <Book title={title} author={author} img={img} key={index} />;

// with spread operator
//         return <Book {...product} key={index} />;
//       })}
//     </section>
//   );
// };

// const Book = ({ title, author, img }) => {
//   return (
//     <article>
//       <img src={img} alt={title} />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<BookList />);

// -----------

// event basics
// we use html attribute as events in JSX
// if we have arguments when invoking function we must use arrow function

// import React from "react";
// import ReactDom from "react-dom/client";

// const Greeting = () => {
//   const clickHandler = () => {
//     alert("u clicked me");
//   };
//   const complexExample = text => {
//     alert(text);
//   };
//   return (
//     <article>
//       <h1 onClick={() => console.log("hey")}>hello world</h1>
//       <button type="button" onClick={clickHandler}>
//         click me
//       </button>
//       <button
//         type="button"
//         onClick={() => complexExample("complex example completed")}
//       >
//         more complex button
//       </button>
//     </article>
//   );
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// -----------

// import and export statements

// import React from "react";
// import ReactDom from "react-dom/client";
// import Book from "./Book";
// import { data } from "./books";

// const BookList = () => {
//   return (
//     <section>
//       {data.map((book, index) => {
//         return <Book key={index} {...book} />;
//       })}
//     </section>
//   );
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<BookList />);

// -----------

// react hooks

import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./useContext/context";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
