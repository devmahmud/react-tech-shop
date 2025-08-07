import { combineReducers } from "redux";
import productReducer from "./productReducer";

const reducer = combineReducers({ products: productReducer });

export default reducer;
