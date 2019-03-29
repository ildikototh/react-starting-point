import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import AppContainer from '../AppContainer';

const mockedStore = configureStore();
describe('AppContainer', () => {
  const initialState = {};
  let store;
  let container;

  beforeEach(() => {
    store = mockedStore(initialState);
    store.dispatch = jest.fn();
    container = shallow(<AppContainer store={store}><span /></AppContainer>);
  });

  it('should render the connected App', () => {
    expect(container).not.toBeEmptyRender();
  });
});
