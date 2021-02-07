import React from 'react'

const CompRadio = ({ options, value, setValue, ...props}) => {

  console.log(value);

  return (
    <div>
      { options.map( (option) => (
        <label key={option} >
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={ ({ target }) => setValue(target.value)}
            {...props}
          />
          
          {option}
        </label>
      ))}
    </div>
  
  )
}

export default CompRadio
