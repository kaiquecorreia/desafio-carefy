import React from 'react';
import Login from '../../src/pages/Login';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('View').exists.toBe(true));
});
