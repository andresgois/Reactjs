import React from 'react'

const CompSelect = ({ options, value, setValue }) => {
  return (
    <select 
      value={value}
      onChange={ ({ target}) => setValue(target.value)}
    >
      <option value="" disabled>Selecione</option>
      {
        options.map( (op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))
      }
    </select>
  )
}

export default CompSelect
