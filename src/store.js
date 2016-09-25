
import { applyMiddleware, createStore } from 'redux'
import  rootReducer from './reducers'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, promise, logger)
);
