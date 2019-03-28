import { createStore } from 'redux';
import rootReducer from '../rootReducer';
import loading from '../../loaderReducer/loaderReducer';

const store = createStore(rootReducer);

describe('Root reducer', () => {
  it('should match of the initial state of the child reducers', () => {
    expect(store.getState().loading).toEqual(loading(undefined, {}));
  });

  it('should check child reducers handle missing actions', () => {
    const action = { type: 'WRONG' };
    expect(store.getState().loading).toEqual(loading(undefined, action));
  });
});
