import React from 'react'
import ProdutoLocal from './ProdutoLocal';

const LocalStorange = () => {

  const [produto, setProduto ] =React.useState(null);

  React.useEffect( () => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) window.localStorage.setItem('produto', produto);
    console.log(produtoLocal);
  }, []);

  React.useEffect( () => {
    if (produto !== null) window.localStorage.setItem('Produto', produto);
  }, [produto]);

  function handleClick({ target }){
    setProduto(target.innerText);
  }
  
  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem'}}>
        Notebook
      </button>
      <button onClick={handleClick} style={{ marginRight: '1rem'}}>
        Smartphone
      </button>
      <ProdutoLocal produto={produto} />
    </div>
  )
}

export default LocalStorange
