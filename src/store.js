import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers =
  process.env.NODE_ENV === "development" ? composeWithDevTools({}) : compose;

export default (reducer, initialState) => {
  // regist middlewares
  const middlewares = [];

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};
