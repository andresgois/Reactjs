import React from 'react';
import Style from './Produto.module.css'


const Produtos = () => {
  return (
    <div className={Style.com}>
      <h3 className={Style.titulo}>Bem vindo</h3>
      <button className="btn btn-primary">Enviar</button>
    </div>
  )
}

export default Produtos
