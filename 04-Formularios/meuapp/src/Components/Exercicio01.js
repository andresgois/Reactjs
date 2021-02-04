import React from 'react'

const Exercicio01 = () => {

  const formFields = [
    {id: 'nome', label: 'nome', type:'text'},
    {id: 'email', label: 'email', type:'email'},
    {id: 'senha', label: 'senha', type:'password'},
    {id: 'cep', label: 'cep', type:'text'},
    {id: 'numero', label: 'numero', type:'text'},
    {id: 'rua', label: 'rua', type:'text'},
    {id: 'bairro', label: 'bairro', type:'text'},
    {id: 'cidade', label: 'cidade', type:'text'},
    {id: 'estado', label: 'estado', type:'text'}
  ]

  const [form, setForm] = React.useState(
    formFields.reduce( (acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {})
   /* VERBOSA 
   nome:  '', email: '', senha: '', cep: '',numero: '', rua: '', bairro: '', 
    cidade: '', estado: ''*/
  );

  const [response, setResponse] = React.useState(null);

  function handleChange({target}){
    const {id, value} = target;
    setForm({...form, [id]: value });
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log('form');

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // form é o objeto com os dados do formuário
        body: JSON.stringify(form),
    }).then( (response) => {
      setResponse(response);
      console.log(response)
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {
          formFields.map( ({id,label,type}) => (
            <div key={id}>
              <label style={{margin: '.5rem'}} htmlFor={id}>{label}</label>
              <input id={id} type={type} value={form[id]}
                onChange={handleChange} style={{marginBottom: '1rem'}}
              />
            </div>
          ))
        }
          {response && response.ok && <p>Formulário enviado</p>}
          <button>Enviar</button>
      </form>
    </div>
  )
}

export default Exercicio01
