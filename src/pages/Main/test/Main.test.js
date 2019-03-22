import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';

describe('<Main />', () => {
  describe('structure', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Main />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render  <Header />', () => {
      expect(wrapper).toContainMatchingElement('Header');
    });

    it('should render  <Footer />', () => {
      expect(wrapper).toContainMatchingElement('Footer');
    });

    it('should contain div box with \'React Starting point boilerplate\' text', () => {
      expect(wrapper.find('.content').text()).toEqual('React Starting point boilerplate');
    });
  });
});
