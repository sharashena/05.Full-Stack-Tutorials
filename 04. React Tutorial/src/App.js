// import React, { useState } from "react";

// react hooks
// we can't place hooks into conditional statements

// useState
// every time useState changes it triggers component re-render
// useState must be in component body
// component's first letter must be uppercase
// we can pass array, object, boolean, string in useState
// we can use multiple states
// useState or React.useState(1. default value 2. function that controls the value)

// const App = () => {
//   const [text, setText] = useState("random title");
// or
// const [text1, setText1] = React.useState();

//   const handleClick = () => {
//     if (text === "random title") {
//       setText("new value");
//     } else {
//       setText("random title");
//     }
//   };
//   return (
//     <React.Fragment>
//       <h1>{text}</h1>
//       <button type="button" onClick={handleClick}>
//         change title
//       </button>
//     </React.Fragment>
//   );
// };
// export default App;

// -----------

// useState - array example

// import React from "react";
// import { data } from "./data/people.js";

// const App = () => {
//   const [people, setPeople] = React.useState(data);

//   const removeItem = id => {
//     const newPeople = people.filter(item => item.id !== id);
//     setPeople(newPeople);
//   };

//   return (
//     <React.Fragment>
//       {people.map(person => {
//         const { id, name } = person;
//         return (
//           <div key={id}>
//             <h1>{name}</h1>
//             <button onClick={() => removeItem(id)}>remove item</button>
//           </div>
//         );
//       })}
//       <button onClick={() => setPeople([])}>clear</button>
//     </React.Fragment>
//   );
// };

// export default App;

// -----------

// useState - object example

// import React, { useState } from "react";

// const App = () => {
//   const [person, setPerson] = useState({
//     name: "peter",
//     age: 24,
//     message: "random message",
//   });

//   const changeMessage = () => {
//     setPerson({ ...person, message: "hello world" });
//   };
//   return (
//     <div>
//       <h3>{person.name}</h3>
//       <h3>{person.age}</h3>
//       <h3>{person.message}</h3>
//       <button onClick={changeMessage}>change message</button>
//     </div>
//   );
// };

// export default App;

// -----------

// useState - simple counter

// import React, { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);

//   const reset = () => {
//     setValue(0);
//   };
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value - 1)}>decrease</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={() => setValue(value + 1)}>increase</button>
//     </div>
//   );
// };

// export default App;

// -----------

// useState - functional update
// state will run asynchronously

// import React, { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);

//   const complexIncrease = () => {
// setTimeout(() => {
// setValue(value + 1);
// functional approach
// setValue((oldValue) => {
// always use return
// return oldValue + 1
//       })
//     }, 2000);
//   };

//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={complexIncrease}>increase later</button>
//     </div>
//   );
// };

// export default App;

// -----------

// useEffect
// React.useEffect(1. callback function 2. dependecy list)
// by default runs after every render
// useEffect use when we use side effects like: event listeners, fetch data, document title change and etc

// import React, { useState, useEffect } from "react";

// function App() {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     if (value > 0) {
//       document.title = `New Messages (${value})`;
//     }
//   });
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value + 1)}>increase</button>
//     </div>
//   );
// }

// export default App;

// -----------

// useEffect
// we can use multiple useEffects
// useEffect - dependency list, empty array [] - runs only ones
// dependency list - [value] it runs every time when value changes

// import React, { useState, useEffect } from "react";

// function App() {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     if (value > 0) {
//       document.title = `New Messages (${value})`;
//     }
//   }, [value]);
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value + 1)}>increase</button>
//     </div>
//   );
// }

// export default App;

// -----------

// useEffect - cleanup function

// import React, { useState, useEffect } from "react";

// function App() {
//   const [size, setSize] = useState(window.innerWidth);

//   const checkSize = () => {
//     setSize(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", checkSize);
// return () => {
//   console.log("clean up");
//   window.removeEventListener("resize", checkSize);
// };
// or we clean up with dependency list
//   }, []);
//   return (
//     <div>
//       <h1>window</h1>
//       <h2>{size} PX</h2>
//     </div>
//   );
// }

// export default App;

// -----------

// useEffect - fetch example

// import React, { useState, useEffect } from "react";

// const url = "https://api.github.com/users";

// function App() {
//   const [users, setUsers] = useState([]);

//   const getUsers = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setUsers(data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div>
//       <h3>github users</h3>
//       <ul>
//         {users.map(user => {
//           const { id, login, avatar_url, html_url } = user;
//           return (
//             <li key={id}>
//               <img src={avatar_url} alt={login} />
//               <h4>{login}</h4>
//               <a href={html_url}>profile</a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;

// -----------

// multiple returns

// import React, { useState, useEffect } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);

//   if (loading) {
//     return <h2>loading...</h2>;
//   }
//   return <div></div>;
// }

// export default App;

// -----------

// short-circuit evaluation
// we can't use if else statement in JSX but we can use ternary operator and short-circuit evaluation

// import React, { useState } from "react";

// function App() {
//   const [text, setText] = useState("");
// or, if text is false it will display anyway 'hello world'
// const first = text || "hello world";
// &&, text must be true to display 'hello world'
//   const second = text && "hello world";

//   return (
//     <div>
//       <h1>{first}</h1>
//       <h1>{second}</h1>
//       <h3>{text || "saba sharashenidze"}</h3>
//       <h3>{text && "luka sharashenidze"}</h3>
//     </div>
//   );
// }

// export default App;

// -----------

// ternary operator

// import React, { useState } from "react";

// function App() {
//   const [isError, setIsError] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsError(!isError)}>toggle error</button>
//       {isError ? <h1>there is an error...</h1> : <h1>there is no error</h1>}
//     </div>
//   );
// }

// export default App;

// -----------

// show/hide component

// import React, { useState } from "react";
// import ShowColumn from "./data/showHide";

// const App = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>show component</button>
//       {show && <ShowColumn />}
//     </div>
//   );
// };

// export default App;

// -----------

// forms - basic
// we can add onSubmit on form element or either we can add onClick on button element

// import React from "react";

// const App = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//   };
//   return (
//     <form /* onSubmit={handleSubmit} */>
//       <div>
//         <label htmlFor="firstName">Name : </label>
//         <input type="text" id="firstName" name="firstName" />
//       </div>
//       <div>
//         <label htmlFor="email">Email : </label>
//         <input type="email" id="emai" name="email" />
//       </div>
//       <button type="submit" onClick={handleSubmit}>
//         add person
//       </button>
//     </form>
//   );
// };

// export default App;

// -----------

// forms - controlled input
// onChange - runs each an every time when we type somthing in input
// value - set value of an element

// import React, { useState } from "react";

// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//   };

//   const handleChange = e => {
//     setFirstName(e.target.value);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">Name : </label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={firstName}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email : </label>
//         <input
//           type="email"
//           id="emai"
//           name="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//       </div>
//       <button type="submit">add person</button>
//     </form>
//   );
// };

// export default App;

// -----------

// controlled input - add items to list

// import React, { useState } from "react";

// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   const [email, setEmail] = useState("");
//   const [people, setPeople] = useState([]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (firstName && email) {
//       const person = { id: new Date().getTime().toString(), firstName, email };
//       setPeople(oldPeople => {
//         return [...oldPeople, person];
//       });
//       setFirstName("");
//       setEmail("");
//     }
//   };

//   const handleChange = e => {
//     setFirstName(e.target.value);
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">Name : </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email : </label>
//           <input
//             type="text"
//             id="emai"
//             name="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </div>
//         <button type="submit">add person</button>
//       </form>
//       {people.map(person => {
//         const { id, firstName, email } = person;
//         return (
//           <div key={id}>
//             <h4>{firstName}</h4>
//             <h4>{email}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default App;

// -----------

// multiple inputs

// import React, { useState } from "react";

// const App = () => {
//   const [person, setPerson] = useState({
//     firstName: "",
//     email: "",
//     age: "",
//   });
//   const [people, setPeople] = useState([]);

//   const handleChange = e => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setPerson({ ...person, [name]: value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (person.firstName && person.email && person.age) {
//       const id = new Date().getTime().toString();
//       const newPerson = { ...person, id };
//       setPeople(oldPeople => {
//         return [...oldPeople, newPerson];
//       });
//       setPerson({ firstName: "", email: "", age: "" });
//     }
//   };

//   return (
//     <>
//       <form>
//         <div>
//           <label htmlFor="firstName">Name : </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={person.firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email : </label>
//           <input
//             type="text"
//             id="emai"
//             name="email"
//             value={person.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age : </label>
//           <input
//             type="text"
//             id="age"
//             name="age"
//             value={person.age}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" onClick={handleSubmit}>
//           add person
//         </button>
//       </form>
//       {people.map(person => {
//         const { id, firstName, email, age } = person;
//         return (
//           <div key={id}>
//             <h4>{firstName}</h4>
//             <h4>{email}</h4>
//             <h4>{age}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default App;

// -----------

// useRef - basics
// or React.useRef
// doesn't trigger re-render
// uncontrolled inputs with useRef
// target DOM nodes/elements

// import React, { useRef } from "react";

// const App = () => {
//   const refContainer = useRef(null);
//   const divContainer = useRef(null);

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(refContainer.current.value);
//     console.log(divContainer.current);
//   };

//   React.useEffect(() => {
//     refContainer.current.focus();
//   });
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input type="text" ref={refContainer} />
//       </div>
//       <button type="submit">submit</button>
//       <div ref={divContainer}>hello</div>
//     </form>
//   );
// };

// export default App;

// -----------

// useReducer
// React.useReducer(1.reducer function for change/add/remove anything 2. default values object)
// when using dispatch we must use object and property type
// dispatch({type: 'STRING'}) common case to use uppercase letters

// import React, { useState, useReducer } from "react";
// import Modal from "./useReducer/Modal";

// const reducer = (state, action) => {
// always return state
// return state
// };

// const defaultState = {
//   people: [],
//   isModalOpen: false,
//   modalContent: "hello world",
// };

// const App = () => {
//   const [name, setName] = useState("");
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const handleSubmit = e => {
//     e.preventDefault();
//   };

//   return (
//     <React.Fragment>
//       {state.isModalOpen && <Modal modalContent={state.modalContent} />}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">add</button>
//       </form>
//       {state.people.map(({ id, name }) => {
//         return (
//           <div key={id}>
//             <h4>{name}</h4>
//           </div>
//         );
//       })}
//     </React.Fragment>
//   );
// };

// export default App;

// -----------

// useReducer - add item with dispatch

// import React, { useState, useReducer } from "react";
// import Modal from "./useReducer/Modal";
// import { reducer } from "./useReducer/reducer";

// const defaultState = {
//   people: [],
//   isModalOpen: false,
//   modalContent: "hello world",
// };

// const App = () => {
//   const [name, setName] = useState("");
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (name) {
//       const id = new Date().getTime().toString();
//       const newItem = { id, name };
//       dispatch({ type: "ADD_ITEM", payload: newItem });
//       setName("");
//     } else {
//       dispatch({ type: "NO_VALUE" });
//     }
//   };

//   const closeModal = () => {
//     dispatch({ type: "CLOSE_MODAL" });
//   };

//   const removeItem = id => {
//     const newProducts = state.people.filter(item => item.id !== id);
//     dispatch({ type: "REMOVE_ITEM", payload: newProducts });
//   };

//   return (
//     <React.Fragment>
//       {state.isModalOpen && (
//         <Modal closeModal={closeModal} modalContent={state.modalContent} />
//       )}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">add</button>
//       </form>
//       {state.people.map(({ id, name }) => {
//         return (
//           <div key={id}>
//             <h4>{name}</h4>
//             <button type="button" onClick={() => removeItem(id)}>
//               remove item
//             </button>
//           </div>
//         );
//       })}
//     </React.Fragment>
//   );
// };

// export default App;

// -----------

// props drilling
// pass properties components to componets and on and on inside of it

// import React, { useState } from "react";
// import { data } from "./data/data";

// function App() {
//   const [people, setPeople] = useState(data);
//   const removeItem = id => {
//     const newPeople = people.filter(item => item.id !== id);
//     setPeople(newPeople);
//   };
//   return (
//     <section>
//       <h3>prop drilling</h3>
//       <List people={people} removeItem={removeItem} />
//     </section>
//   );
// }

// const List = ({ people, removeItem }) => {
//   return (
//     <>
//       {people.map(person => {
//         return (
//           <SinglePerson key={person.id} {...person} removeItem={removeItem} />
//         );
//       })}
//     </>
//   );
// };

// const SinglePerson = ({ id, name, removeItem }) => {
//   return (
//     <div>
//       <h4>{name}</h4>
//       <button type="button" onClick={() => removeItem(id)}>
//         remove item
//       </button>
//     </div>
//   );
// };

// export default App;

// -----------

// context API - useContext
// access values without prop drilling

// import React from "react";
// import { useGlobalContext } from "./useContext/context";

// function App() {
//   return (
//     <section>
//       <h3>context api</h3>
//       <List />
//     </section>
//   );
// }

// const List = () => {
//   const { people } = useGlobalContext();
//   return (
//     <>
//       {people.map(person => {
//         return <SinglePerson key={person.id} {...person} />;
//       })}
//     </>
//   );
// };

// const SinglePerson = ({ id, name }) => {
//   const { removeItem } = useGlobalContext();
//   return (
//     <div>
//       <h4>{name}</h4>
//       <button type="button" onClick={() => removeItem(id)}>
//         remove item
//       </button>
//     </div>
//   );
// };

// export default App;

// -----------

// custom hooks - useFetch()
// creating custom hooks
// we are able to reuse functionality

// import React from "react";
// import { useFetch } from "./customHook/useFetch";

// const url = "https://course-api.com/javascript-store-products";

// const App = () => {
//   const { loading, products } = useFetch(url);
//   console.log(products);
//   return (
//     <div>
//       <h2>{loading ? "loading" : "data"}</h2>
//     </div>
//   );
// };

// export default App;

// -----------

// propTypes
// it allows us to validate props that we are passing in component

// import React from "react";
// import PropTypes from "prop-types";
// import { useFetch } from "./customHook/useFetch";
// import defaultImg from "./assets/default-image.jpeg";

// const url = "https://course-api.com/react-prop-types-example";

// const App = () => {
//   const { products } = useFetch(url);
//   return (
//     <div>
//       {products.map(product => {
//         return <Product key={product.id} {...product} />;
//       })}
//     </div>
//   );
// };

// const Product = ({ name, price, image }) => {
//   const url = image && image.url;
//   return (
//     <div>
//       <img src={url || defaultImg} alt={name || "default name"} />
//       <h4>{name}</h4>
//       <p>${price || "default price"}</p>
//     </div>
//   );
// };

// propTypes snippet
// ptar - PropTypes.array.isRequired
// ptor - PropTypes.object.isRequired
// ptsr - PropTypes.string.isRequired,
// ptnr - PropTyps.Number.isRquired,
// ptbr - PropTypes.bool.isRequired,

// Product.propTypes = {
//   image: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

// set default props if something is missing
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImg,
// };

// export default App;

// -----------

// react optimization

// React.memo
// every time props or state changes, components re-renders
// memo prevents from re-render

// import React, { useState } from "react";

// const url = "https://course-api.com/react-prop-types-example";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);

//   const getProducts = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setProducts(data);
//   };

//   React.useEffect(() => {
//     getProducts();
//   }, []);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button type="button" onClick={() => setCount(count + 1)}>
//         increase
//       </button>
//       {products.map(({ id, name }) => (
//         <Product key={id} name={name} />
//       ))}
//     </div>
//   );
// };

// const Product = React.memo(({ name }) => {
//   React.useEffect(() => {
//     console.count("product component");
//   });
//   return <h2>{name}</h2>;
// });

// export default App;

// -----------

// useCallback prevents from function re-render

// import React, { useState, memo, useCallback } from "react";

// const url = "https://course-api.com/react-prop-types-example";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);
//   const [cart, setCart] = useState(0);

//   const addToCart = useCallback(() => {
//     setCart(cart + 1);
//   }, [cart]);

//   const getProducts = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setProducts(data);
//   };

//   React.useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button type="button" onClick={() => setCount(count + 1)}>
//         increase
//       </button>
//       <h1>cart : {cart}</h1>
//       {products.map(({ id, name }) => (
//         <Product key={id} name={name} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// };

// const Product = memo(({ name, addToCart }) => {
//   React.useEffect(() => {
//     console.count("product component");
//   });
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={addToCart}>add to cart</button>
//     </div>
//   );
// });

// export default App;

// -----------

// useMemo - prevent from rendering returned value

// import React, { useState, memo, useCallback, useMemo } from "react";

// const url = "https://course-api.com/javascript-store-products";

// const calculateTotal = data => {
//   console.log("hello");
//   return (
//     data.reduce((total, item) => {
//       const price = item.fields.price;
//       if (price >= total) {
//         total = price;
//       }
//       return total;
//     }, 0) / 100
//   );
// };

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);
//   const [cart, setCart] = useState(0);

//   const addToCart = useCallback(() => {
//     setCart(cart + 1);
//   }, [cart]);

//   const mostExpensive = useMemo(() => calculateTotal(products), [products]);

//   const getProducts = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setProducts(data);
//   };

//   React.useEffect(() => {
//     getProducts();
//   }, []);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button type="button" onClick={() => setCount(count + 1)}>
//         increase
//       </button>
//       <h1>cart : {cart}</h1>
//       <h1>Most Expensive : ${mostExpensive}</h1>
//       {products.map(({ id, name }) => (
//         <Product key={id} name={name} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// };

// const Product = memo(({ name, addToCart }) => {
//   React.useEffect(() => {
//     console.count("product component");
//   });
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={addToCart}>add to cart</button>
//     </div>
//   );
// });

// export default App;

// -----------

// router

// import React from "react";
// import Router from "./Router/Router";

// const App = () => {
//   return (
//     <>
//       <Router />
//     </>
//   );
// };

// export default App;

// -----------

// axios
// returns a promise
// by default is axios(url) is axios.get(url)

// axios.get(url, {})
// axios.psot(url, {data}, {})

// import { useEffect, useCallback } from "react";
// import axios from "axios";

// const url = "https://course-api.com/react-store-products";

// const App = () => {
//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios(url);
//       console.log(response);
//     } catch (error) {
//       console.log(error.response);
//     }
//   }, [url]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);
//   return <div>App</div>;
// };

// export default App;

// -----------

// axios headers
// in order if axios returns data as json format we must use headers to parse it into html

// import { useEffect, useCallback } from "react";
// import axios from "axios";

// dad jokes
// const jokesAPI = "https://icanhazdadjoke.com/";

// const App = () => {
//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios(jokesAPI, {
//         headers: {
//           Accept: "application/json",
//         },
//       });
//       console.log(response);
//     } catch (error) {
//       console.log(error.response);
//     }
//   }, [jokesAPI]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);
//   return <div>App</div>;
// };

// export default App;

// -----------

// post request
// send data to the server
// axios.post(url, {data})
// more option (auth header) - axios.post(url, {data}, {})

// import { useState } from "react";
// import axios from "axios";

// const url = "https://course-api.com/axios-tutorial-post";

// const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(url, { name, email });
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={e => setName(e.target.value)} />
//       <input
//         type="text"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <button type="submit">submit</button>
//     </form>
//   );
// };

// export default App;

// -----------

// global defaults

// import { useEffect } from "react";
// import axios from "axios";
// import "./axios/global";

// const url = "https://course-api.com/react-store-products";
// const randomUserAPI = "https://randomuser.me/api";

// const App = () => {
//   const fetchData = async () => {
//     try {
//       const response = await axios(url);
//       const response2 = await axios(randomUserAPI);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return <h2>global instance</h2>;
// };

// export default App;

// -----------

// custom instances

// import { useEffect } from "react";
// import authFetch from "./axios/custom";
// import axios from "axios";

// const url = "https://course-api.com/react-store-products";
// const randomUserAPI = "https://randomuser.me/api";

// const App = () => {
//   const fetchData = async () => {
//     try {
//       const response = await authFetch("react-store-products");
//       const response2 = await axios(randomUserAPI);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return <h2>global instance</h2>;
// };

// export default App;

// -----------

// axios interceptors

// -----------

import React from "react";

const App = () => {
  return <div>App</div>;
};

export default App;
