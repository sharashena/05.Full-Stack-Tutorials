import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  loading: true,
};

// createAsyncThunk(1. action type 2. callback)
// (1. access what we will pass as arguments when we are invoking 2.) => {}
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    // console.log(name);
    // console.log(thunkAPI);
    // we can access all reducers
    // console.log(thunkAPI.getState());
    try {
      // we can dispatch anything during fetching data
      // thunkAPI.dispatch(openModal())
      const res = await axios(url);
      return res.data;
    } catch (err) {
      // if we want to get specific error
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // we can mutate state directly
    // automatically created action creators in reducers prop
    clearCart: state => {
      state.cartItems = [];

      // alterntaive way with return to update state
      // return { ...state, cartItems: [] };
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const newProduct = state.cartItems.filter(item => item.id !== id);
      state.cartItems = newProduct;
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: state => {
      const { total, amount } = state.cartItems.reduce(
        (total, item) => {
          total.total += item.amount * item.price;
          total.amount += item.amount;
          return total;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      state.total = total.toFixed(2);
      state.amount = amount;
    },
  },
  extraReducers: {
    [getCartItems.pending]: state => {
      state.loading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      // access rejectWithValue error message with action.payload
      console.log(action.payload);
      state.loading = false;
    },
  },
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
