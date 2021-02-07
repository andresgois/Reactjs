import React from 'react';
import Input from './CompInput';
import CompSelect from './CompSelect';
import CompRadio from './CompRadio';
import CompCheck from './CompCheck';

const Form = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [linguagem, setLinguagem] = React.useState([]);

  return (
    <div>
      <form>
        <CompCheck options={['Javascript','PHP','Ruby']} 
          value={linguagem}
          setValue={setLinguagem}
        />
        <p>Cor</p>
        <CompRadio
          options={['Limão','Azul','Vermelho']}
          value={cor}
          setValue={setCor}
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
