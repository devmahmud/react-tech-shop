import React from "react";
import Hero from "../components/Hero";
import Products from "../components/ProductsPage/Products";
import productsBcg from "../images/productsBcg.jpeg";

function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} title="products" />
      <Products />
    </>
  );
}

export default ProductsPage;
