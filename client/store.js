import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./src/redux-store/posts";
import usersReducer from "./src/redux-store/users";
import singleUserReducer from "./src/redux-store/singleUser";

const reducer = combineReducers({
  users: usersReducer,
  singleUser: singleUserReducer,
  posts: postsReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
