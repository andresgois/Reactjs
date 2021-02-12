import React from 'react';
import { GlobalContext } from './GlobalContext';


const Produto = () => {
  const global = React.useContext(GlobalContext)
  console.log(global);

  return (
      <div>
        <div>Produto: {global.contar}</div>
        
        <br />
        
        <button 
            className="bg-blue-700 text-white p-3 rounded-md" 
            onClick={ () => global.contarUm()}>
          Adicionar
        </button>
      </div>
  )
}

export default Produto
