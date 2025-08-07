import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Title from "../Title";
import Product from "../Product";
import {
  getProducts,
  setSingleProduct,
  addToCart
} from "../../store/actions/products";

function Featured(props) {
  useEffect(() => {
    props.getProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <Title title="featured products" center="true" />
        <div className="row my-5">
          {props.featured.map(product => (
            <Product
              key={product.id}
              product={product}
              onSingle={props.setSingleProduct}
              onCart={props.addToCart}
            />
          ))}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
const mapStatesToProps = ({ products }) => {
  return { featured: products.featuredProducts };
};

export default connect(mapStatesToProps, {
  getProducts,
  setSingleProduct,
  addToCart
})(Featured);
