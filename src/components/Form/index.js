import React, { useState } from 'react';
import Field from '../Field';
import FuelPrice from '../FuelPrice';
import './style.css';

const Form = () => {
  const [valorCombustivel, setValorCombustivel] = useState(0)
  const [valorInteiroPago, setValorInteiroPago] = useState(0)
  const [valorRealPago, setValorRealPago] = useState(0)

  return (
    <div className='form'>
      <Field
        label='Valor do combustível'
        description='Valor do combustível divulgado no posto sem km de vantagem'
        value={valorCombustivel}
        setter={setValorCombustivel}
      />

      <Field
        label='Valor pago sem desconto'
        description='Valor solicitado no app Abastece Ai'
        value={valorInteiroPago}
        setter={setValorInteiroPago}
      />

      <Field
        label='Valor pago com desconto com km de vantagem'
        description='Valor pago na app Abastece Ai'
        value={valorRealPago}
        setter={setValorRealPago}
      />

      <FuelPrice
        valorCombustivel={valorCombustivel}
        valorInteiroPago={valorInteiroPago}
        valorRealPago={valorRealPago}
      />
    </div>
  )
}

export default Form;
