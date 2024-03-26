import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// redux stuff
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./reducer";
import { Provider } from "react-redux";

// createStore stores reducer(s)
// createStore(1.reducer function 2.defaultStates, 3. composeWithDevTools())
const store = createStore(reducer, composeWithDevTools());

function App() {
  return (
    // connect redux to react with Provider
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
