import React, { useState } from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const Btn = () => {
  // Exemplo 01
  const [ ativo, setAtivo ] = useState(false);
  const [ dados, setDados ] = useState({ nome: 'André', idade: '30' })
  // Exemplo 02
  const [modal, setModal] = useState(false);

  function handleClick(){
    setAtivo(!ativo);
    setDados({...dados, falcudade: 'Possui faculdade'});
  }
  // Exemplo 03
  const [contar, setContar ] = useState(1);
  const [items, setItems ] = useState(['Item 1']);

  function handleClick2(){
    setContar(contar + 1);
    setItems([...items, 'Item '+ (contar + 1)])
  }
  
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.falcudade}</p>
      {/* <button disabled={!ativo}>{ativo ? 'Ativo' : 'Inativo'}</button> */}
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <hr />
      <h3>Janela Modal</h3>

      <div>
        <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </div>

      <hr />
      <h3>Contador</h3>
      <div>
        {items.map( (item) => (
          <li key={item}> {item} </li>
        ))}
        <button onClick={handleClick2}>{contar}</button>
      </div>

    </div>
  )
}
const ativo = true;

export default Btn
