import './App.css';
import Button from './Componets/Button';
import React from 'react';
import Header from './Componets/Header';
import Redutor from './Componets/Redutor';
import Produtos from './Componets/Produtos';
//import Contato from './Componets/Contato';
const Contato = React.lazy( () => import('./Componets/Contato'));

function App() {
  const [ ativo, setAtivo ] = React.useState(false);
  const [ ativoProd, setAtivoProd ] = React.useState(false);
  const [ contar, setContar ] = React.useState(0);

  return (
    <div className="App">
     <hr />
      {ativoProd && <Produtos titulo="Produtos importados" />}
      <button onClick={ () => setAtivoProd(!ativoProd)}>Mostrar produto</button>
     <hr />
     
     <div className="Contato">
        {ativo && (
          <React.Suspense fallback={ <div>Carregando ...</div>}>
              <Contato />
          </React.Suspense>
        )}
          <button onClick={ () => setAtivo(!ativo)}>Ativar</button>
        <hr />
     </div>

    <hr />
    <p>Contador: {contar}</p>
    <button onClick={ () => setContar(contar+1)}>Contar</button>
    <Header />
    
    <hr />

    <hr />
    <Redutor />
    
    <hr />

     <Button width={60}>
       Enviar
     </Button>
    </div>
  );
}

export default App;
