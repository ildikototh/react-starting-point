import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  let location;
  let wrapper;

  beforeEach(() => {
    location = {
      pathname: '',
    };
    wrapper = shallow(<App location={location} />);
  });

  describe('Structure', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should include the Routes', () => {
      expect(wrapper).toContainMatchingElement('Switch');
      expect(wrapper).toContainMatchingElements(2, 'Route');
    });
  });
});
