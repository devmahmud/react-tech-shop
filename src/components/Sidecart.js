import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { handleCart } from "../store/actions/products";

function Sidecart(props) {
  return (
    <CartWrapper show={props.cartOpen} onClick={props.handleCart}>
      <ul>
        {props.cart.map(item => (
          <li key={item.id} className="cart-item mb-4">
            <img src={`../${item.image}`} alt="cart item" width="35" />
            <div className="mt-3">
              <h6 className="text-uppercase">{item.title}</h6>
              <h6 className="text-title text-capitalize">
                amount: {item.count}
              </h6>
            </div>
          </li>
        ))}
      </ul>
      <h4 className="text-capitalize text-main">
        cart total: ${props.cartTotal}
      </h4>
      <div className="text-center my-5">
        <Link to="/cart" className="main-link">
          cart page
        </Link>
      </div>
    </CartWrapper>
  );
}

const mapStatesToProps = ({ products }) => {
  return {
    cartOpen: products.cartOpen,
    cart: products.cart,
    cartTotal: products.cartTotal
  };
};
const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll !important;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;

export default connect(mapStatesToProps, { handleCart })(Sidecart);
