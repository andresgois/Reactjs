import './App.css';
import Checkboxx from './Components/Checkboxx';
import Exercicio01 from './Components/Exercicio01';
import Exercicio02 from './Components/Exercicio02';
import Form from './Components/Form';
import Onblur from './Components/Onblur';
import Radio from './Components/Radio';
import Reactivo from './Components/Reactivo';
import Selecte from './Components/Selecte';
import Textarea from './Components/Textarea';
import UserForm from './Components/UserForm';
import Card from './layout/Card';
import Application from './Exercicio/Application';


const  App = () => {

    return (
      <section>

        <Card titulo="01# - Componente reativo">
         <Reactivo />
        </Card>

        <Card titulo="02# - Exercício - 01">
         <Exercicio01 />
        </Card>

        <Card titulo="03# - Textarea">
         <Textarea />
        </Card>
       
        <Card titulo="04# - Select">
         <Selecte />
        </Card>

        <Card titulo="05# - Radio">
         <Radio/>
        </Card>

        <Card titulo="06# - Checkbox">
         <Checkboxx/>
        </Card>

        <Card titulo="07# - Otimização do código anterior">
         <Exercicio02/>
        </Card>

        <Card titulo="08# - Formulário com Componete de Form">
         <Form />
        </Card>

        <Card titulo="09# - Componente modificado quando está fora de foco">
         <Onblur />
        </Card>

        {/* <Card titulo="10# - Criando um Hook para validação de form">
         <UserForm />
          Aula 13 - Módulo form não foi completa 
        </Card> */}

        <Card titulo="Exercício Final">
         <Application />
        </Card>

      </section>
    );
}

export default App;
