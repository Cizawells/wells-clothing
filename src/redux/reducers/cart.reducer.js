import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_TO_CART,
} from "../types";
import {
  addItemToCart,
  reduceQuantityOrRemoveItemToCart,
} from "../cart-utility";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case REMOVE_ITEM_TO_CART:
      return {
        ...state,
        cartItems: reduceQuantityOrRemoveItemToCart(
          state.cartItems,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
