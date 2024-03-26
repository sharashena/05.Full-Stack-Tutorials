const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Home Page<h1/><a href='/api/products'>products<a/>");
});

// limited products when we are all products section
// app.get("/api/products", (req, res) => {
//   const newProducts = products.map(product => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });

// set single product with params
// route parameter :productID
app.get("/api/products/:productID", (req, res) => {
  // to access single product id we have req.params
  //   console.log(req.params);
  //   req.params object values are strings
  const { productID } = req.params;
  const singleProduct = products.find(
    product => product.id === Number(productID)
  );
  //   if we pass params which doesn't exist it will be undefined
  // solution is setting up if/else statement
  if (!singleProduct) {
    return res.status(404).send("product doesn't exist");
  }
  res.json(singleProduct);
});

// more complex route parameters and access all of them route params

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  //   const params = req.params; { productID: '1', reviewID: 'abc' }
  res.send("Hello World");
});

// query parameters
// when we set keyword query we can access that query with req.query
// then we can add many query as we want after ?, these query will be saved in object
// we must use return in every if statement, cuz without return node will read anyway other responses and it's not allowed send more than one response per request

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // option 1
    // res.status(200).send("no products matched your search");

    // option 2
    res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server listening on port : 5000");
});
