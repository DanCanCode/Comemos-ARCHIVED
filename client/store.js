import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import posts from "./src/redux-store/posts";

const reducer = combineReducers({
  posts,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
