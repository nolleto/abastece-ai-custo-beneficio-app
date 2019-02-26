import React from 'react';
import Header from './index';
import { shallow } from 'enzyme';

describe('Header component', () => {
  it('matches snapshot', () => {
    const snapshot = shallow(<Header />);

    expect(snapshot).toMatchSnapshot();
  });
});
