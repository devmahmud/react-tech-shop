import { linkData } from "../linkData";
import { items } from "../productData";
import { socialData } from "../socialData";
import {
  SIDEBAR_CLICK,
  CART_CLICK,
  GET_PRODUCTS,
  SET_SINGLE_PRODUCT,
  ADD_TO_CART,
  SET_TOTAL,
  SYNC_STORAGE,
  GET_STORAGE_CART,
  GET_STORAGE_PRODUCT,
  CLEAR_CART,
  DECREMENT,
  REMOVE,
  FILTER_PRODUCTS,
  SORT_DATA
} from "../types";

const initialState = {
  sideBarOpen: false,
  cartOpen: false,
  links: linkData,
  socialLinks: socialData,
  cart: [],
  cartItems: 0,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProduct: {},
  loading: false,
  search: "",
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  company: "all",
  shipping: false
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_CLICK:
      return { ...state, sideBarOpen: !state.sideBarOpen };
    case CART_CLICK:
      return { ...state, cartOpen: !state.cartOpen };
    case GET_PRODUCTS:
      const featured = items.filter(item => item.featured === true);
      let maxPrice = Math.max(...state.storeProducts.map(item => item.price));
      let minPrice = Math.min(...state.storeProducts.map(item => item.price));
      return {
        ...state,
        storeProducts: items,
        featuredProducts: featured,
        filteredProducts: items,
        maxPrice: maxPrice,
        minPrice: minPrice,
        price: maxPrice,
        loading: false
      };
    case SET_SINGLE_PRODUCT:
      let product = state.storeProducts.find(
        item => item.id === action.payload
      );
      localStorage.setItem("singleProduct", JSON.stringify(product));
      return { ...state, singleProduct: product, loading: false };

    case ADD_TO_CART:
      let tempCart = [...state.cart];
      let tempProducts = [...state.storeProducts];
      let tempItem = tempCart.find(item => item.id === action.payload);
      if (!tempItem) {
        tempItem = tempProducts.find(item => item.id === action.payload);
        let total = tempItem.price;
        let cartItem = { ...tempItem, count: 1, total };
        tempCart = [...tempCart, cartItem];
      } else {
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
      }
      return { ...state, cart: tempCart };
    case SET_TOTAL:
      let subTotal = 0;
      let cartItems = 0;

      state.cart.forEach(item => {
        subTotal += item.total;
        cartItems += item.count;
      });

      subTotal = parseFloat(subTotal.toFixed(2));
      let tax = subTotal * 0.2;
      tax = parseFloat(tax.toFixed(2));
      let total = subTotal + tax;
      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        cartItems: cartItems,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    case SYNC_STORAGE:
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return state;

    case GET_STORAGE_CART:
      let cart;
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      } else {
        cart = [];
      }
      return { ...state, cart: cart };

    case GET_STORAGE_PRODUCT:
      const single = localStorage.getItem("singleProduct")
        ? JSON.parse(localStorage.getItem("singleProduct"))
        : {};
      return { ...state, singleProduct: single };
    case CLEAR_CART:
      localStorage.removeItem("cart");
      return { ...state, cart: [] };

    case DECREMENT:
      let filteredCart = state.cart.filter(item => item.id !== action.payload);
      const item = state.cart.find(item => item.id === action.payload);

      item.count = item.count - 1;
      if (item.count === 0) {
        return { ...state, cart: filteredCart };
      } else {
        item.total = item.count * item.price;
        item.total = parseFloat(item.total.toFixed(2));
      }
      return { ...state, cart: [...filteredCart, item] };

    case REMOVE:
      const rmCart = state.cart.filter(item => item.id !== action.payload);
      return { ...state, cart: rmCart };

    case FILTER_PRODUCTS:
      const { name, type } = action.payload.target;
      const value =
        type === "checkbox"
          ? action.payload.target.checked
          : action.payload.target.value;
      return { ...state, [name]: value };

    case SORT_DATA:
      let sortedProduct = [...state.storeProducts];

      sortedProduct = sortedProduct.filter(
        item => item.price <= parseInt(state.price)
      );
      if (state.company !== "all") {
        sortedProduct = sortedProduct.filter(
          item => item.company === state.company
        );
      }
      if (state.shipping) {
        sortedProduct = sortedProduct.filter(
          item => item.freeShipping === true
        );
      }
      if (state.search.length > 0) {
        sortedProduct = sortedProduct.filter(item => {
          const regex = new RegExp(`${state.search}`, "gi");
          return item.title.match(regex) || item.company.match(regex);
        });
      }

      return { ...state, filteredProducts: sortedProduct };

    default:
      return state;
  }
}

export default productReducer;
