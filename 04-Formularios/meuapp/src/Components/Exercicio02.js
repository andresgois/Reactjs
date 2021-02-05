import React from 'react'

const Checkboxx = () => {

  const coresArray = ['Azul','Roxo','Laranja','Verde','Vermelho'];

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
         {
           coresArray.map( (cor, index) => (
            <label key={index} style={{ textTransform: 'capitalize'}}>
              <input 
                type="checkbox" 
                value={cor}
                checked={checkColor({cor})}
                onChange={handleChange} 
              />{cor}
            </label>
           ))
         }
                    
          <p>{cores}</p>
      </form>    
    </div>
  )
}

export default Checkboxx
