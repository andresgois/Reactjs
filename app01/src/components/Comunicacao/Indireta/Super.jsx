import React, { useState } from 'react';
import Sub from './Sub';


const Super = props => {

  const [text, setTexto] = useState('Valor');
  const [num, setNum] = useState(0);

  function quandoClicar(v,  t){
    setTexto(t);
    setNum(v)
    console.log("Ação!!");
    console.log(v);
  }

    return (
        <div>
          <h4>{text} {num} </h4>
          <Sub qdClicar={quandoClicar}></Sub>
        </div>
    );
}

export default Super
