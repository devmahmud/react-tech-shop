import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidecart from './components/Sidecart';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Default from './pages/Default';
import { getProducts } from './store/actions/products';

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default connect(null, { getProducts })(App);
