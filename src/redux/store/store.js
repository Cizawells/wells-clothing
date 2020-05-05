import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../root reducer/rootReducer";

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
