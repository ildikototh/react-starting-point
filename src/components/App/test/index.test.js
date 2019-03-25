import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import AppInterface from '../index';

jest.mock('../App', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('App Component interface', () => {
  it('Should export the main component', () => {
    shallow(<App />);
    expect(AppInterface).toHaveBeenCalled();
  });
});
