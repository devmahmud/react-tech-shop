import React from "react";
import { connect } from "react-redux";
import { clearCart } from "../../store/actions/products";

function CartTotals(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-title text-center my-4">
          <button
            className="btn btn-outline-danger text-capitalize mb-4"
            onClick={props.clearCart}
          >
            clear cart
          </button>
          <h3>subtotal: ${props.cartSubTotal}</h3>
          <h3>tax: ${props.cartTax}</h3>
          <h3>total: ${props.cartTotal}</h3>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ products }) => {
  const { cartSubTotal, cartTax, cartTotal } = products;
  return { cartSubTotal, cartTax, cartTotal };
};
export default connect(mapStateToProps, { clearCart })(CartTotals);
