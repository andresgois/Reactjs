import React from 'react';
import './App.css';
import ProdutoAnimado from './Componentes/ProdutoAnimado';
import Produtos from './Componentes/Produtos';
import AppSlide from './Componentes/AppSlide';
import foto from './Img/react.png'


function App() {
  const [ativar, setAtivar ] = React.useState(false);
  return (
    <div className="container">
      <p>Hello wold</p>
      <Produtos />
      <hr />
      
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <ProdutoAnimado />}

      <hr />

      <AppSlide />

      <hr />
      <img src={foto} alt="React" />
    </div>
  );
}

export default App;
