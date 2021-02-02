import React from 'react'
import Randomico from './Componentes/Randomico';
import DadosClientes from './Componentes/DadosClientes';
import DadosArray from './Componentes/DadosArray';
import Produtos from './Componentes/Produtos';
import Card from './layout/Card';
import EventoClick from './Componentes/EventoClick';
import Footer  from './Componentes/Footer';
import Form from './Componentes/Formulario/Form';

const Exemplos = () => {
  
  const estiloP = {
    color: '#00ff00',
    fontSize: '1.2rem',
  }

  return (
    <div>
       <div className="App">
      <Card titulo="Número Randomico" >
        <Randomico />
      </Card>

      <Card titulo="Usando o style" >
      <div>
        <p style={{ color: 'blue',}}>{new Date().getFullYear()}</p>
        <p style={estiloP}>Tetste</p>
      </div>
      </Card>

      <Card titulo="Pegando de dados de clientes" >
        <DadosClientes /> 
      </Card>

      <Card titulo="Dados de Array" >
        <DadosArray />
      </Card>
      
      <Card titulo="Dados de Produtos" >
        <Produtos />
      </Card>

      <Card titulo="Evento de Click" >
        <EventoClick />
      </Card>

      <Card titulo="Formulários" >
        <Form />
      </Card>


      <Footer/>

    </div>
    </div>
  )
}


export default Exemplos
