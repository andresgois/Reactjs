import React from 'react'


const Sub = props => {

  function acao(){
    props.qdClicar(Math.floor(Math.random() * 100), 'Gerado');
  }
    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );
}

export default Sub
