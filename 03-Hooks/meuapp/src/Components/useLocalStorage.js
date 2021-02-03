import React from 'react'
import HookCustomizado from './HookCustomizado';

const Hook = () => {

  const [produto, setProduto ] = HookCustomizado('produto','');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default Hook
