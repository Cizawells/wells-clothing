import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce(
    (accumulatedQuantity, item) =>
      accumulatedQuantity + item.quantity * item.price,
    0
  )
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
      0
    )
);
