import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { increment, decrement, removeItem } from "../../store/actions/products";

function CartList(props) {
  const { cart, increment, decrement, removeItem } = props;

  if (props.cart.length === 0) {
    return (
      <h1 className="text-title text-center my-4">
        Your cart is currently empty
      </h1>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={increment}
              onDecrement={decrement}
              onRemove={removeItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ products }) => {
  return { cart: products.cart };
};

export default connect(mapStateToProps, { increment, decrement, removeItem })(
  CartList
);
