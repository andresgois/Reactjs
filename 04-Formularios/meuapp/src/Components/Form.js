import React from 'react';
import Input from './CompInput';
import CompSelect from './CompSelect';
import CompRadio from './CompRadio';

const Form = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <div>
      <form>
        <p>Cor</p>
        <CompRadio 
          options={['Limão','Azul','Vermelho']}
          value={cor}
          setCor={setCor}
        />
        <br/>
        
        <Input  
            id="nome" 
            label="nome" 
            value={nome} 
            setValue={setNome} 
            required />
          <br/>
          <Input  
            id="email" 
            label="email" 
            value={email} 
            setValue={setEmail} 
            required />
          <br/>
          <CompSelect 
            options={['Smartphone','Tables']} 
            value={produto}
            setValue={setProduto}
            />
          <br/>
          <button>Enviar</button>
      </form>
    </div>
  )
}

export default Form
