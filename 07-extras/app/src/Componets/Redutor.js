import React from 'react'
import Exemplo from './Exemplo';

function reduce(state, action) {
  switch(action){
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error();
  }
}

const Redutor = () => {
  const [ state, dispatch ] = React.useReducer(reduce, 0);

  return (
    <div>
      
      <button onClick={ () => dispatch('aumentar')}>+</button>
      <button onClick={ () => dispatch('diminuir')}>-</button>

      <p>{state}</p>  
      <Exemplo />
    </div>
  )
}



export default Redutor
