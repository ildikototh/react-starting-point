import React from 'react';
import { mount } from 'enzyme';
import Counter from '../Counter';

describe('Counter component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Counter />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default counter value on the p tag', () => {
    expect(wrapper.find('p').text()).toEqual('You clicked 0 times');
  });

  it('should increase the counter clicking on the button', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('You clicked 1 times');
  });
});
