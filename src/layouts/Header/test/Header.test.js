import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('<Header />', () => {
  describe('structure', () => {
    it('should be displayed', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper).toExist();
    });
  });
});
