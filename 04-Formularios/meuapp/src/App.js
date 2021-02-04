import './App.css';
import Exercicio01 from './Components/Exercicio01';
import Reactivo from './Components/Reactivo';
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
        {/* Aula 04 */}

      </section>
    );
}

export default App;
