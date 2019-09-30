import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const rootMiddleware = [logger];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...rootMiddleware)
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

export default store;
