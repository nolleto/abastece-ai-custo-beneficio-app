const hasValue = value => value > 0;

export const hasValues = (...values) => values.every(hasValue);
export const getLiters = (requestPrice, fuelPrice) => requestPrice / fuelPrice;
export const getRealFuelPrice = (liters, realPricePaid) => (realPricePaid / liters);
