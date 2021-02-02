import React from 'react';


const Dados = (props) => {

  function handleClick(event){
    console.log(event.target);
  }
    //https://pt-br.reactjs.org/docs/handling-events.html
  return (
    <div>
      <button onClick={handleClick}>
        Clique
      </button>
    </div>
  );
}


export default Dados;