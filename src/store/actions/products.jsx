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

export const handleSidebar = () => {
  return {
    type: SIDEBAR_CLICK
  };
};

export const handleCart = () => {
  return {
    type: CART_CLICK
  };
};

export const getProducts = () => dispatch => {
  dispatch({ type: GET_PRODUCTS });
  dispatch({ type: GET_STORAGE_CART });
  dispatch({ type: SET_TOTAL });
};

export const setSingleProduct = id => {
  return { type: SET_SINGLE_PRODUCT, payload: id };
};

export const addToCart = id => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: id });
  dispatch({ type: SET_TOTAL });
  dispatch({ type: SYNC_STORAGE });
};

export const getStorageProduct = () => dispatch => {
  dispatch({ type: GET_STORAGE_PRODUCT });
};

export const increment = id => dispatch => {
  dispatch(addToCart(id));
};

export const decrement = id => dispatch => {
  dispatch({ type: DECREMENT, payload: id });
  dispatch({ type: SET_TOTAL });
  dispatch({ type: SYNC_STORAGE });
};

export const removeItem = id => dispatch => {
  dispatch({ type: REMOVE, payload: id });
  dispatch({ type: SET_TOTAL });
  dispatch({ type: SYNC_STORAGE });
};

export const clearCart = () => dispatch => {
  dispatch({ type: CLEAR_CART });
  dispatch({ type: SET_TOTAL });
  dispatch({ type: SYNC_STORAGE });
};

export const handleChange = e => dispatch => {
  dispatch({ type: FILTER_PRODUCTS, payload: e });
  dispatch({ type: SORT_DATA });
};
