import React from 'react'
import Radio from './Form/Radio'

const perguntas = [
  {
    pergunta: 'Qual o método utilizado para cria componentes?',
    options:[
      'React.makeComponent()',
      'React.createComponet()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componentes externo?',
    options:[
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options:['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options:['set', 'get','use'],
    resposta: 'use',
    id: 'p4',
  },
];

const Application = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
  });
  const [slide, setSlide] = React.useState(0);
  const [ resultado, setResultado ] = React.useState(null);

  function handleChange({ target }){
    setRespostas({...respostas, [target.id]: target.value})
  }

  function resultadoFinal(){
    console.log('final');
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
    console.log(corretas);
  }

  function handleClick({ target }){
    if(slide < perguntas.length - 1){
      setSlide(slide+1)      
    }else{
      setSlide(slide+1)   
      resultadoFinal()
    }
  }

  return (
    <form onSubmit={ (event) => event.preventDefault() }>
      {
        perguntas.map( (pergunta, index) => (
          <Radio 
            active={ slide === index}
            {...pergunta} 
            key={pergunta.id} 
            value={respostas[pergunta.id]}
            onchange={handleChange} />        
        ))
      }
      {resultado  ? <p>{resultado}</p> :
        <button onClick={handleClick}>Próximo</button>
      }
    </form>
  )
}

export default Application
