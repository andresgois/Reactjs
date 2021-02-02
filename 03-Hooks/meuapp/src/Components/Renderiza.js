import React from 'react';
import Produto from './Produto';

const Renderiza = () => {

  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando ] = React.useState(null);

  async function handleClick(event){
    setCarregando(true);
    const res = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
      );
    //console.log(event.target.innerText);
    //console.log(res);
    const json = await res.json();
    console.log(json);
    setDados(json);
    setCarregando(false);
  }

  
  // https://ranekapi.origamid.dev/json/api/produto
  return (
    <div>
      <button style={{ margin: '.5rem'}} onClick={handleClick}>notebook</button>
      <button style={{ margin: '.5rem'}} onClick={handleClick}>smartphone</button>
      <button style={{ margin: '.5rem'}} onClick={handleClick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {/* {dados ? <Produto dados={dados} /> : 'Sem Informações'} */}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  )
}

export default Renderiza
