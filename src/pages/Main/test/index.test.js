import React from 'react';
import { shallow } from 'enzyme';
import Main from '..';
import MainInterface from '../index';

jest.mock('../Main', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Main Component interface', () => {
  it('Should export the main component', () => {
    shallow(<Main />);
    expect(MainInterface).toHaveBeenCalled();
  });
});
