import React from 'react'
import './style.css';

const Field = ({ label, description, value, setter }) => (
  <label className='field'>
    <span className='field__label' title={description}>
      {label}:
    </span>

    <input
      className='field__input'
      type='number'
      step='.01'
      value={value}
      onChange={({ target }) => setter(target.value)}
    />
  </label>
)

export default Field
