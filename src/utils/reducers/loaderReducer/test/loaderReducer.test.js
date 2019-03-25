import { SET_LOADING } from '../../../../actions/loader';
import loading, { defaultState } from '../loaderReducer';

describe('loader reducer', () => {
  it('should set our initial state to be the defined initial state', () => {
    expect(loading(undefined, {}))
      .toEqual(defaultState);
  });

  it('should return the default state if none of the action types match', () => {
    expect(loading(undefined, { type: 'WRONG' }))
      .toEqual(defaultState);
  });
  it('should return the updated state when the SET_GLOBAL_FOCUS action is fired', () => {
    expect(loading(undefined, {
      type: SET_LOADING,
      loading: true,
    }))
      .toEqual({ loading: true });
  });
});
