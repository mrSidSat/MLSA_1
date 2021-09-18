import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterStateChanger } from "../reducers/counterStateChanger";
import { letterStateChanger } from "../reducers/letterStateChange";
import logger from "redux-logger";

//  The counter reducer is active

// const store = createStore(counterStateChanger);

// The letter reducer is active

// const store = createStore(letterStateChanger);

//Both reducers are active

const store = createStore(
  combineReducers({ counterStateChanger, letterStateChanger })
);

// MiddleWare Applied (logger)

// const store = createStore(
//   combineReducers({ counterStateChanger, letterStateChanger }),
//   applyMiddleware(logger)
// );

export default store;
