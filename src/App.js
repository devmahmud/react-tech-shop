import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";
import { getProducts } from "./store/actions/products";

function App(props) {
  useEffect(() => {
    props.getProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {/** navbar,sidebar,cart,footer */}
      <Navbar />
      <Sidebar />
      <Sidecart />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default connect(null, { getProducts })(App);
