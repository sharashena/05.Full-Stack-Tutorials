// actions as variables
export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const RESET = "RESET";
export const CHANGE_NAME = "CHANGE_NAME";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";

// action creators
export const removeItem = id => {
  return { type: REMOVE_ITEM, payload: id };
};
