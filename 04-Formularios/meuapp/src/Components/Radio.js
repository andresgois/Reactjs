import React from 'react'

const Radio = () => {

  const [ Radio, setRadio ]  = React.useState('');

  function handleClick({target}){
    setRadio(target.value)
  }

  return (
    <div>
       <form>
         <label>
          <input 
            type="radio" 
            onChange={ ({target}) => setRadio(target.value)} 
            name="produto"
            value="Smartphone"
          />Smartphone
          </label>

          <label>
          <input 
            type="radio" 
            onChange={ ({target}) => setRadio(target.value)} 
            name="produto"
            value="Notebook"
          />Notebook
          </label>
          
          <p>{Radio}</p>
      </form>    
    </div>
  )
}

export default Radio
