import React from 'react';
import FuelPrice from './index';
import { shallow } from 'enzyme';

describe('FuelPrice component', () => {
  it('matches snapshot when has no values', () => {
    const snapshot = shallow(<FuelPrice />);

    expect(snapshot).toMatchSnapshot();
  });

  it('matches snapshot when has all values', () => {
    const snapshot = shallow(
      <FuelPrice
        fuelPrice={2}
        requestPrice={50}
        realPricePaid={40}
      />
    );

    expect(snapshot).toMatchSnapshot();
  });
});
