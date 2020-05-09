export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExist = cartItems.find((item) => item.id === itemToAdd.id);
  if (itemExist) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const reduceQuantityOrRemoveItemToCart = (cartItems, itemToRemove) => {
  const itemExist = cartItems.find((item) => item.id === itemToRemove.id);

  if (itemExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 }
      : cartItem
  );
};
