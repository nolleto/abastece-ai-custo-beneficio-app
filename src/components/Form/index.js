import React, { useState } from 'react';
import Field from '../Field';
import FuelPrice from '../FuelPrice';
import './style.css';

const Form = () => {
  const [fuelPrice, setFuelPrice] = useState();
  const [requestPrice, setRequestPrice] = useState();
  const [realPricePaid, setRealPricePaid] = useState();

  return (
    <div className='form'>
      <Field
        label='Valor do combustível'
        description='Valor do combustível divulgado no posto'
        placeholder={'Ex.: 3,759'}
        value={fuelPrice}
        setter={setFuelPrice}
      />

      <Field
        label='Valor total a pagar na bomba'
        description='É o mesmo valor solicitado no app Abastece Aí'
        placeholder={'Ex.: 50,00'}
        value={requestPrice}
        setter={setRequestPrice}
      />

      <Field
        label='Valor pago com desconto do km de vantagem'
        description='Valor final a pagar no app Abastece Aí'
        placeholder={'Ex.: 47,50'}
        value={realPricePaid}
        setter={setRealPricePaid}
      />

      <FuelPrice
        fuelPrice={fuelPrice}
        requestPrice={requestPrice}
        realPricePaid={realPricePaid}
      />
    </div>
  );
};

export default Form;
