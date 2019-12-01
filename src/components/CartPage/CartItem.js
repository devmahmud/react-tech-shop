import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";

function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={item.image} alt="item" width="60" className="img-fluid" />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product: </span>
        {item.title}
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price: </span>${item.price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              className="cart-icon text-primary"
              onClick={() => onDecrement(item.id)}
            />
            <span className="text-title text-muted mx-3">{item.count}</span>
            <FaChevronCircleUp
              className="cart-icon text-primary"
              onClick={() => onIncrement(item.id)}
            />
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => onRemove(item.id)}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <strong className="text-muted">item total: {item.count}</strong>
      </div>
    </div>
  );
}
export default CartItem;
