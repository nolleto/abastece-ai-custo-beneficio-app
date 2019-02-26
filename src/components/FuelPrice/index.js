import React from 'react';
import './style.css';

const FuelPrice = ({ valorCombustivel, valorInteiroPago, valorRealPago}) => {
  const hasValue = value => value > 0;
  const hasValues = (...values) => values.every(hasValue)
  const hasValorRealCombustivel = hasValues(valorCombustivel, valorInteiroPago, valorRealPago);
  const getLitrosAbastecidos = () => valorInteiroPago / valorCombustivel;
  const getValorRealCombustivel = () => (valorRealPago / getLitrosAbastecidos()).toFixed(2);

  if (!hasValorRealCombustivel) {
    return (
      <p className='text'>
        Preencha os campos acima para obter o valor do combustível.
      </p>
    );
  }

  return (
    <p className='text'>
      O valor do combustível é de R$ {getValorRealCombustivel()}
    </p>
  );
};

export default FuelPrice;
