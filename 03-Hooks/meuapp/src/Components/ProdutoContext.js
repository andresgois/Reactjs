import React from 'react';
import { UseContext } from './UseContext';

const ProdutoContext = () => {
  const global = React.useContext(UseContext);

  console.log(global);

  return (
    <div>
      Produto: {global.contar}
      <br />

      <button onClick={() => global.adicionarUm() }>Contar</button>
    </div>
  )
}

export default ProdutoContext
