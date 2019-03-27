import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../Checkbox';

const props = {
  name: 'accept',
  label: 'Checkbox label',
};

describe('<Checkbox />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Checkbox {...props} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the input with the name correctly', () => {
    expect(wrapper.find('input').prop('name')).toBe('accept');
  });

  it('should render the label correctly', () => {
    expect(wrapper.find('label').text()).toEqual('Checkbox label');
  });

  it('should render the checkbox ticked when true \'checked\' props sent through', () => {
    wrapper.setProps({ checked: true });
    expect(wrapper.find('input').prop('checked')).toBe(true);
  });

  it('should render the checkbox unticked when false \'checked\' props sent through', () => {
    wrapper.setProps({ checked: false });
    expect(wrapper.find('input').prop('checked')).toBe(false);
  });
});
