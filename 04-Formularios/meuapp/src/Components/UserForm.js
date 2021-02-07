import React from 'react'

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido'
  }
}

const UserForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value){
    if(value.length === 0){
      setError('Preeencha valor');
      return false;
    }else if(!types[type].regex.test(value)){
      setError(types[type].message);
      return false;
    }else{
      setError(null);
      return true;
    }
  }

  function onChange({ target }){
    if(error) validate(target.value)
    setValue(target.value);    
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value)
  }
}

export default UserForm

