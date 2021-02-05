import React from 'react'

const Selecte = () => {

  const [ selecte, setSelecte ]  = React.useState('');

  return (
    <div>
       <form>
          <select value={selecte} 
          onChange={({target}) => setSelecte(target.value)}
          id="produtos"
          >
            <option disabled value="">Selecione</option>
            <option value="notebook">notebook</option>
            <option value="Smartphone">Smartphone</option>
            <option value="tablet">tablet</option>
          </select>
          
          <p>{selecte}</p>
      </form>    
    </div>
  )
}

export default Selecte
