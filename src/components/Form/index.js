import React, { useState } from 'react';
import Field from '../Field';
import FuelPrice from '../FuelPrice';
import './style.css';

const Form = () => {
  const [fuelPrice, setFuelPrice] = useState(0)
  const [requestPrice, setRequestPrice] = useState(0)
  const [realPricePaid, setRealPricePaid] = useState(0)

  return (
    <div className='form'>
      <Field
        label='Valor do combustível'
        description='Valor do combustível divulgado no posto sem km de vantagem'
        value={fuelPrice}
        setter={setFuelPrice}
      />

      <Field
        label='Valor pago sem desconto'
        description='Valor solicitado no app Abastece Ai'
        value={requestPrice}
        setter={setRequestPrice}
      />

      <Field
        label='Valor pago com desconto com km de vantagem'
        description='Valor pago na app Abastece Ai'
        value={realPricePaid}
        setter={setRealPricePaid}
      />

      <FuelPrice
        fuelPrice={fuelPrice}
        requestPrice={requestPrice}
        realPricePaid={realPricePaid}
      />
    </div>
  )
}

export default Form;
