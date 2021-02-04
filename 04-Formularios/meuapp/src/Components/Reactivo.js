import React from 'react'

const Reactivo = () => {

  const [form, setForm] = React.useState({
    nome:  '',
    email: '',
  })
  // const [ nome, setNome ]  = React.useState('');
  // const [ email, setEmail ]  = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
    console.log('form');
  }

  function handleChange({target}){
    const {id, value} = target;
    setForm({...form, [id]: value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input 
            id="nome"
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            // onChange={(event) => setNome(event.target.value)}
          />
          {form.nome}
          <label htmlFor="Email">Email:</label>
          <input 
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            // onChange={(event) => setEmail(event.target.value)}
          />
          {form.email}
          <button>Enviar</button>
      </form>    
    </div>
  )
}

export default Reactivo
