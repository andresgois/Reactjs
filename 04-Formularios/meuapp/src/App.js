import './App.css';
import Checkboxx from './Components/Checkboxx';
import Exercicio01 from './Components/Exercicio01';
import Exercicio02 from './Components/Exercicio02';
import Form from './Components/Form';
import Radio from './Components/Radio';
import Reactivo from './Components/Reactivo';
import Selecte from './Components/Selecte';
import Textarea from './Components/Textarea';
import Card from './layout/Card';


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

      </section>
    );
}

export default App;
