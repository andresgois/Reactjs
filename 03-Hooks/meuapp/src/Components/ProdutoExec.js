import React from 'react';
import { GlobalContext } from './GlobalContextExec';

const ProdutoContext = () => {
  const global = React.useContext(GlobalContext);

  console.log(global);
  if (global.dados === null) return null;

  return (
    <div>
      Produto: {' '}
      <br />
    {
      global.dados.map( (produto) => (
        <li key={produto.id}>
          {produto.nome}
        </li>
      ))
    }
      
    </div>
  )
}

export default ProdutoContext
