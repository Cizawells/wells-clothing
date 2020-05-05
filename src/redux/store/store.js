import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "../root reducer/rootReducer";

const middleware = [logger];
const enhancer = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, enhancer);
