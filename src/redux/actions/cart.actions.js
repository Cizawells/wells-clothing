import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_TO_CART,
} from "../types";

export const toggleCart = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});
export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItemToCart = (item) => ({
  type: REMOVE_ITEM_TO_CART,
  payload: item,
});
