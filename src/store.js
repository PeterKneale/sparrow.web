
import { applyMiddleware, createStore, compose } from 'redux'
import  rootReducer from './reducers'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import { listUsers } from "./modules/admin/users/actions"

const logger = createLogger();
const initialState = {};

// Enable browser extension
// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store  = createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(thunk, promise, logger)
));

store.dispatch(listUsers())