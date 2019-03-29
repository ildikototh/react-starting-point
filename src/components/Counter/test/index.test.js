import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';
import CounterInterface from '../index';

jest.mock('../Counter', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Counter Component interface', () => {
  it('Should export the main component', () => {
    shallow(<Counter />);
    expect(CounterInterface).toHaveBeenCalled();
  });
});
