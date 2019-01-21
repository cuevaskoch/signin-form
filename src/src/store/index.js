import Immutable from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux-immutablejs';
import setup from './setup';

const initialState = new Immutable.Map();
const rootReducer = combineReducers({
  setup,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
    ),
  )
);
