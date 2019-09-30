import { cartActionTypes } from "./cart.types";

export const addCartItem = item => {
  return {
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item
  };
};
export const removeCartitem = item => {
  return {
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
  };
};
export const setCartItems = items => {
  return {
    type: cartActionTypes.SET_CART_ITEM,
    payload: items
  };
};
export const addStock = item => {
  return {
    type: cartActionTypes.ADD_STOCK,
    payload: item
  };
};
export const removeStock = item => {
  return {
    type: cartActionTypes.REMOVE_STOCK,
    payload: item
  };
};
