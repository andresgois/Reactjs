import React from 'react'

const CompRadio = ({ options, value, setValue}) => {
  return (
    <>
      {
      options.map( (op) => (
        <label key={op} >
          <input
            type="radio"
            value={op}
            checked={value === op}
            onChange={ ({target}) => setValue(target.value)}
          />
          {op}
        </label>
      ))
    }
    </>
  )
}

export default CompRadio
