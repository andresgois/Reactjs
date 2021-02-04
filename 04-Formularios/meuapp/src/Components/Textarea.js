import React from 'react'

const Textarea = () => {

  const [ mensagem, setMensagem ]  = React.useState('');

  return (
    <div>
       <form>

          <textarea 
            id="mensagem"
            rows="5"            
            value={mensagem}
            onChange={ ({ target}) => setMensagem(target.value)}
          />
          <p>{mensagem}</p>
      </form>    
    </div>
  )
}

export default Textarea
