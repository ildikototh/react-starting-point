import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('<Footer />', () => {
  describe('structure', () => {
    it('should be displayed', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper).toExist();
    });
  });
});
