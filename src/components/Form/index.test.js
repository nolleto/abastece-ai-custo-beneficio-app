import React from 'react';
import Form from './index';
import { shallow } from 'enzyme';

describe('Form component', () => {
  it('matches snapshot', () => {
    const snapshot = shallow(<Form />);

    expect(snapshot).toMatchSnapshot();
  });
});
