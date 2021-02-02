import React from 'react'

const UseRef = () => {

  const [ comentario, setComentario ] = React.useState([]);
  const [ Input, setInput ] = React.useState('');
  const inputElement = React.useRef();

  function handleClick(){
    setComentario([...comentario, Input]);
    setInput('')
    inputElement.current.focus();
  }
  // adiconando item ao carrinho
  const [ carrinho, setCarrinho ] = React.useState(0);
  const [ notificacao, setNotificacao ] = React.useState(null);
  const timeOutRef = React.useRef();

  function handleClick2(){
    setCarrinho(carrinho + 1)
    setNotificacao('Item adiconado ao carrinho')

    clearTimeout(timeOutRef.current)
    timeOutRef.current = setTimeout( () => {
      setNotificacao(null)
    }, 1000)
  }

  return (
    <div>
      <ul>
        {comentario.map( (c) => (
          <li key={c}>{c}</li>
        ))}
       </ul> 
        <input
          type="text"
          ref={inputElement}
          value={Input}
          onChange={ ({target}) => setInput(target.value)}
        />
        <button onClick={handleClick}>Enviar</button>
        <hr />
        <p>{notificacao}</p>
        <button onClick={handleClick2}>Adicionar ao carrinho {carrinho}</button>
    </div>
  )
}

export default UseRef
