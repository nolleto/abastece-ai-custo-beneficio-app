import React from 'react';
import Field from './index';
import { shallow } from 'enzyme';

describe('Field component', () => {
  it('matches snapshot', () => {
    const snapshot = shallow(
        <Field
          label='label'
          description='description'
          value='value'
          setter={jest.fn()}
        />
      );
    expect(snapshot).toMatchSnapshot();
  });

  describe('Event Listeners', () => {
    it('on change value trigger setter function', () => {
      const setter = jest.fn();
      const newValue = 1.23;
      const component = shallow(
        <Field
          label='label'
          description='description'
          value='value'
          setter={setter}
        />
      );
      const input = component.find('input');
      input.simulate('change', { target: { value: newValue }});

      expect(setter).toBeCalledWith(newValue);
    });
  });
});
