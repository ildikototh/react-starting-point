import { applyMiddleware, compose, createStore } from 'redux';
import { createPromise } from 'redux-promise-middleware';
import rootReducer from '../reducers/rootReducer';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const promise = createPromise({});

const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(promise),
));

export default store;
