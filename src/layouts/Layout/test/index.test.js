import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';
import LayoutInterface from '../index';

jest.mock('../Layout', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Layout Component interface', () => {
  it('Should export the Layout component', () => {
    shallow(<Layout />);
    expect(LayoutInterface).toHaveBeenCalled();
  });
});
