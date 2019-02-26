import React from 'react';
import { hasValues, getLiters, getRealFuelPrice } from '../../fuelPrice';
import './style.css';

const FuelPrice = ({ fuelPrice, requestPrice, realPricePaid }) => {
  const hasAllValues = hasValues(fuelPrice, requestPrice, realPricePaid);

  if (!hasAllValues) {
    return (
      <p className='text'>
        Preencha os campos acima para obter o valor do combustível.
      </p>
    );
  }

  const liters = getLiters(requestPrice, fuelPrice);
  const price = getRealFuelPrice(liters, realPricePaid);

  return (
    <p className='text'>
      O valor do combustível é de R$ {price.toFixed(2)} ({liters.toFixed(2)} litros abastecidos)
    </p>
  );
};

export default FuelPrice;
