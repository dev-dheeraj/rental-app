import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { createLogger } from 'redux-logger';
import rootReducer from "../store/rootReducers";

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware // loggerMiddleware
  )
);
