import { createStore, applyMiddleware, compose } from "redux";
import "regenerator-runtime/runtime";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/index";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(apiSaga);

export default store;
