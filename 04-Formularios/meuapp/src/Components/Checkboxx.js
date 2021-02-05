import React from 'react'

const Checkboxx = () => {

  const [ cores, setCores ]  = React.useState(['azul']);

  function handleChange({target}){
    if(target.checked){
      setCores([...cores, target.value]);
    }else{
      setCores(cores.filter( (cor) => cor !== target.value));
    }
  }

  function checkColor(cor){
    return cores.includes(cor);
  }

  return (
    <div>
       <form>
          <label>
            <input 
              type="checkbox" 
              value="azul"
              checked={checkColor('azul')}
              onChange={handleChange} 
            />Azul
          </label>

          <label>
            <input 
              type="checkbox" 
              value="Branco"
              checked={checkColor('Branco')}
              onChange={handleChange} 
            />Branco
          </label>

          <label>
            <input 
              type="checkbox" 
              value="Preto"
              checked={checkColor('Preto')}
              onChange={handleChange} 
            />Preto
          </label>
          
          <p>{cores}</p>
      </form>    
    </div>
  )
}

export default Checkboxx
