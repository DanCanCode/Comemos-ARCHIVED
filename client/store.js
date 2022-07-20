import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import posts from "./src/redux-store/posts";

const reducers = combineReducers({
  posts,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
