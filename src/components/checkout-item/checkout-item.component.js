import React from "react";
import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  removeItemToCart,
  addItemToCart,
} from "../../redux/actions/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({
  item,
  clearItemFromCart,
  addItemToCart,
  removeItemToCart,
}) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemToCart(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItemFromCart(item)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemToCart: (item) => dispatch(removeItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
