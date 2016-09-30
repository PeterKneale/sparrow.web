
import { applyMiddleware, createStore, compose } from 'redux'
import  rootReducer from './reducers'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import { fetchUsersIfNeeded } from "./modules/admin/users/actions"

const logger = createLogger();
const initialState = {};

export const store  = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk, promise, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(fetchUsersIfNeeded())