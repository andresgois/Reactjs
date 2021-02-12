import React from 'react';
import Produto from './Produto';
import { GlobalStorange } from './GlobalContext';

function App() {
  return (
    <div>
      <GlobalStorange>
        <Produto />
      </GlobalStorange> 
    </div>     
  );
}

export default App;
