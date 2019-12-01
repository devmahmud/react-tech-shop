import React from "react";
import Products from "../components/ProductsPage/Products";
import productBcg from "../images/productsBcg.jpeg";
import Hero from "../components/Hero";

function ProductsPage() {
  return (
    <React.Fragment>
      <Hero img={productBcg} />
      <Products />
    </React.Fragment>
  );
}
export default ProductsPage;
