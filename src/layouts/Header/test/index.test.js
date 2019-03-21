import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import HeaderInterface from '../index';

jest.mock('../Header', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Header Component interface', () => {
  it('Should export the main component', () => {
    shallow(<Header />);
    expect(HeaderInterface).toHaveBeenCalled();
  });
});
