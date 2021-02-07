import React from 'react'
import CompInput from './CompInput'

const Onblurr = () => {
  const [ cep, setCep ] = React.useState('');
  const [ error, setError ] = React.useState(null);

  function validateCep(value){
    if(value.length === 0){
      setError('Preeencha valor');
      return false;
    }else if( !/^\d{5}-?\d{3}$/.test(value)){
      setError('Preeencha um cep válido');
      return false;
    }else{
      setError(null);
      return true;
    }
  }
  function handleBlur({ target }){
    validateCep(target.value)
  }

  function handleChange({ target }){
    if(error) validateCep(target.value)
    setCep(target.value);    
  }

  function handleSubmit(event){
    event.preventDefault();
    if(validateCep(cep)){
      console.log('Enviou')
    }else{
      console.log('Não Enviado!')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <CompInput 
          label="CEP"
          id="cep"
          type="text"
          value={cep}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="00000-000"
        />
        {error && <p>{error}</p>}
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Onblurr
