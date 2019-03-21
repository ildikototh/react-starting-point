import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';
import LayoutInterface from '../index';

jest.mock('../Layout', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('App Component interface', () => {
  it('Should export the main component', () => {
    shallow(<Layout />);
    expect(LayoutInterface).toHaveBeenCalled();
  });
});
