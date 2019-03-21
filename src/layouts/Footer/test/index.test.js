import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';
import FooterInterface from '../index';

jest.mock('../Footer', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Footer Component interface', () => {
  it('Should export the main component', () => {
    shallow(<Footer />);
    expect(FooterInterface).toHaveBeenCalled();
  });
});
