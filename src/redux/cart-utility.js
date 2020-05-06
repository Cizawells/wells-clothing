export const addItemToCart = (cartItems, itemToAdd) => {
  console.log(cartItems);
  const itemExist = cartItems.find((item) => item.id === itemToAdd.id);
  if (itemExist) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};
