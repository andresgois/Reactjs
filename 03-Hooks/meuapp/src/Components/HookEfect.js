import React from 'react'
import Prod from './Prod';


// não pode ter hook fora da const principal
// a não ser que, a função comece com use
function useNumeroAleatorio(){
  React.useEffect( () => {
    document.title = Math.random();
  }, []);
}

const HookEfect = () => {
  const [contar, setContar ] = React.useState(0);
  const [ativo, setAtiva ] = React.useState(false);

  console.log('Executou fora');

  React.useEffect( () => {
    console.log('Executou');
  }, []);// ´so executa essa uma vex

  React.useEffect( () => {
    document.title = 'Total'+contar;
  }, [contar]);// executa todas as vezes que o contar mudar o valor

  useNumeroAleatorio();

  return (
    <div>
      { ativo && <Prod/>}
      <button onClick={ () => setAtiva(!ativo)}>Ativar</button>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default HookEfect
