import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { createPromise } from "redux-promise-middleware";

describe('Store', () => {
  const SAVED_ENV = process.env;
  const promise = createPromise({});

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...SAVED_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = SAVED_ENV;
  });

  it('should match the initial state of the child reducer', () => {
    process.env.NODE_ENV = 'dev';

    // eslint-disable-next-line global-require
    const store = require('./store').default;

    const mockStore = createStore(
      rootReducer,
      applyMiddleware(promise),
    );
    expect(store.getState()).toEqual(mockStore.getState());
  });

  it('should match the initial state when NODE_ENV is set to production', () => {
    process.env.NODE_ENV = 'production';

    // eslint-disable-next-line global-require
    const store = require('./store').default;

    const mockStore = createStore(
      rootReducer,
      applyMiddleware(promise),
    );
    expect(store.getState()).toEqual(mockStore.getState());
  });
});
