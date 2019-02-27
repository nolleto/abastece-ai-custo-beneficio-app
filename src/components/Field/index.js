import React from 'react'
import './style.css';

const Field = ({ label, description, placeholder, value, setter }) => (
  <label className='field'>
    <span className='field__label'>
      {label}:
    </span>
    <span className='field__description'>
      {description}
    </span>

    <input
      className='field__input'
      type='number'
      step='.01'
      value={value}
      placeholder={placeholder}
      onChange={({ target }) => setter(target.value)}
    />
  </label>
)

export default Field
