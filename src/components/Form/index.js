import React, { useState } from 'react';
import Field from '../Field';
import FuelPrice from '../FuelPrice';
import './style.css';

const Form = () => {
  const [fuelPrice, setFuelPrice] = useState()
  const [requestPrice, setRequestPrice] = useState()
  const [realPricePaid, setRealPricePaid] = useState()

  return (
    <div className='form'>
      <Field
        label='Valor do combustível'
        description='Valor do combustível divulgado no posto sem km de vantagem'
        value={fuelPrice}
        setter={setFuelPrice}
      />

      <Field
        label='Valor total a pagar na bomba'
        description='Valor solicitado no app Abastece Ai'
        value={requestPrice}
        setter={setRequestPrice}
      />

      <Field
        label='Valor pago com desconto do km de vantagem'
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
