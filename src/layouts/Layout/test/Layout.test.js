import React from 'react';
import { shallow } from 'enzyme';
import Layout  from '../Layout';

describe('<Layout />', () => {
  describe('structure', () => {
    it('should display Header, main and Footer', () => {
      const wrapper = shallow(<Layout />);
      expect(wrapper).toContainMatchingElement('Header');
      expect(wrapper).toContainMatchingElement('main');
      expect(wrapper).toContainMatchingElement('Footer');
    });

    it('should display a child component', () => {
      const wrapper = shallow(<Layout><span>test</span></Layout>);
      expect(wrapper).toContainMatchingElement('span');
    });
  });
});
