import React, { Component, useState } from 'react';


const Mega =  (props) => {

  const [ num, setNum] = useState(Array(props.qtddeNumeros).fill(0));

  function gerarNumeroNaoContido(array){
    const min = 1;
    const max = 60;
    const novoNumero = parseInt(Math.random() * (max -min) + min)
    return array.includes(novoNumero) ? gerarNumeroNaoContido(array) : novoNumero;
  }

  function gerarNumero(){
    const novoArray = Array(props.qtddeNumeros)
                    .fill(0)
                    .reduce( (a,e) => {
                      const novoNumero = gerarNumeroNaoContido(a)
                      return [...a, novoNumero]
                    }, [])
                    .sort((a, b) => a-b)
              setNum(novoArray)
  }

  return (
    <div>
      <h3>Mega</h3>
      <h4>{num.join(' ')}</h4>
      <button onClick={gerarNumero}>Gerar Número</button>
    </div>
  )
}

export default Mega