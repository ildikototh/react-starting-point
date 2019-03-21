import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';

describe('<NotFound />', () => {
  describe('structure', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<NotFound />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });


    it('should render a connected <Layout />', () => {
      expect(wrapper).toContainMatchingElement('Layout');
    });


    it('should contain a heading and paragraph', () => {
      expect(wrapper).toContainMatchingElement('h2');
      expect(wrapper).toContainMatchingElement('p');
    });
  });
});
