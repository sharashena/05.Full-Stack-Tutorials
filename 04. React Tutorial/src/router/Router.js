// import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import SingleProduct from "./pages/SingleProduct";
// import Error from "./pages/Error";

// BrowserRouter connects to the browser
// Routes are parent for all router
// for every page we set Route with 2 props.
// url path and element - what we want to render when we go exact path
// * means that it matches everything even errors

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<Products />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;

// ------------

// nested route(s)
// child route(s) are relative to parent
// index always matches to parent path

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import SingleProduct from "./pages/SingleProduct";
// import Error from "./pages/Error";
// import Navbar from "./Navbar";

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route index element={<About />} />
//           <Route path="products" element={<Products />} />
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//       <footer>our footer</footer>
//     </BrowserRouter>
//   );
// };

// export default Router;

// ------------

// NavLinks

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import SingleProduct from "./pages/SingleProduct";
// import Error from "./pages/Error";
// import Navbar from "./Navbar";

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<Products />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//       <footer>our footer</footer>
//     </BrowserRouter>
//   );
// };

// export default Router;

// ------------

// url params

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import SingleProduct from "./pages/SingleProduct";
// import Error from "./pages/Error";
// import Navbar from "./Navbar";

// const Router = () => {
//   const [user, setUser] = React.useState(null);
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<Products />} />
//         <Route path="products/:productId" element={<SingleProduct />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//       <footer>our footer</footer>
//     </BrowserRouter>
//   );
// };

// export default Router;

// ------------

// Navigate
// ProtectedRoutes
// Refactor Routes

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import SingleProduct from "./pages/SingleProduct";
// import Error from "./pages/Error";
// import Navbar from "./Navbar";
// import ProtectedRoute from "./pages/ProtectedRoute";
// import ProductsLayout from "./pages/ProductsLayout";

// const Router = () => {
//   const [user] = React.useState(null);
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<ProductsLayout />}>
//           <Route
//             index
//             element={
//               <ProtectedRoute user={user}>
//                 <Products />
//               </ProtectedRoute>
//             }
//           />
//           <Route path=":productId" element={<SingleProduct />} />
//         </Route>
//         <Route path="*" element={<Error />} />
//       </Routes>
//       <footer>our footer</footer>
//     </BrowserRouter>
//   );
// };

// export default Router;
