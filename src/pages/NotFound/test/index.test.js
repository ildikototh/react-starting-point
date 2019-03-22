import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';
import NotFoundInterface from '../index';

jest.mock('../NotFound', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('NotFound Component interface', () => {
  it('Should export the main component', () => {
    shallow(<NotFound />);
    expect(NotFoundInterface).toHaveBeenCalled();
  });
});
