import React from "react";
import Hero from "../components/Hero";
import Cart from "../components/CartPage/Cart";
import cartBcg from "../images/storeBcg.jpeg";

function CartPage() {
  return (
    <>
      <Hero img={cartBcg} title="shopping cart" />
      <Cart />
    </>
  );
}

export default CartPage;
