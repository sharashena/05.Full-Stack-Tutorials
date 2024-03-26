import { CLEAR_CART, REMOVE_ITEM, GET_TOTALS, TOGGLE_AMOUNT } from "./actions";
import cartItems from "./cart-items";

const defaultStates = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const reducer = (state = defaultStates, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (total, item) => {
          const totalPrice = item.price * item.amount;
          total.amount += item.amount;
          total.total += totalPrice;
          return total;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    case TOGGLE_AMOUNT:
      const { id, toggle } = action.payload;
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === id) {
            if (toggle === "inc") {
              return { ...item, amount: item.amount + 1 };
            } else if (toggle === "dec") {
              item = { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
