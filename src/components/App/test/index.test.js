import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import AppContainer from '../AppContainer';
import AppInterface, { AppContainer as AppContainerInterface } from '../index';

jest.mock('../App', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../AppContainer', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('App Component interface', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('Should export the main App component', () => {
    shallow(<AppInterface />);
    expect(App).toHaveBeenCalled();
  });
  it('Should export the Container', () => {
    shallow(<AppContainerInterface />);
    expect(AppContainer).toHaveBeenCalled();
  });
});
