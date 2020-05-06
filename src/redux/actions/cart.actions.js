import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../types";

export const toggleCart = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
