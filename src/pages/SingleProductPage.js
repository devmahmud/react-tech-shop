import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, getStorageProduct } from "../store/actions/products";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";

function SingleProductPage({ product, loading, addToCart, getStorageProduct }) {
  useEffect(() => {
    getStorageProduct();
    //eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Hero img={singleProductImg} title="single product" />
      {loading && <h1>product is loading...</h1>}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
              <img
                src={`../${product.image}`}
                alt="single product"
                className="img-fluid"
              />
            </div>
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
              <h5 className="text-title mb-4">model: {product.title}</h5>
              <h5 className="text-capitalize text-muted mb-4">
                company: {product.company}
              </h5>
              <h5 className="text-main text-capitalize mb-4">
                price: ${product.price}
              </h5>
              <p className="text-title mt-3">some info about product:</p>
              <p>{product.description}</p>
              <button
                className="main-link m-2"
                onClick={() => addToCart(product.id)}
              >
                add to cart
              </button>
              <Link to="/products" className="main-link m-2">
                back to products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
const mapStatesToProps = ({ products }) => {
  return { product: products.singleProduct, loading: products.loading };
};

export default connect(mapStatesToProps, { addToCart, getStorageProduct })(
  SingleProductPage
);
