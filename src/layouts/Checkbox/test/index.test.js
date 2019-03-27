import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../Checkbox';
import CheckboxInterface from '..';

jest.mock('../Checkbox', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Checkbox Component interface', () => {
  it('Should export the main component', () => {
    shallow(<Checkbox name="accept" label="label" />);
    expect(CheckboxInterface).toHaveBeenCalled();
  });
});
