import React from 'react'

export default function FormInput({title, name, value, onChange, type}) {
  return (
    <div className='form-input'>
        <label>{title}</label>
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange} 
        />
    </div>
  )
}
