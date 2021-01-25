import './App.css';
import Primeiro from './components/Basicos/Primeiro';
import ComParametros from './components/Basicos/ComParametros';
import ComFilhos from './components/Basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Basicos/Repeticao';
import Condicional from './components/Basicos/Condicional';
import CondicionalComIf from './components/Basicos/CondicionalComIf';
import Pai from './components/Comunicacao/direta/Pai';
import Super from './components/Comunicacao/Indireta/Super';
import Inp from './components/form/input';

function App() {
  return (
    <div className="App">

      <Card titulo="Trabalhando com campo input">
        <Inp />
      </Card>

      <Card titulo="Comunicação Indireta">
        <Super />
      </Card>

      <Card color="#836FFF"  titulo="Comunicação direta">
        <Pai sobrenome="Gois" />
      </Card>

      <Card color="#836FFF">
        <CondicionalComIf numero={5} />
      </Card>

      <Card color="#00FFFF">
        <Condicional numero={11}  />
      </Card>

      <Card titulo="Primeiro COmponente" color="#00FF00	">
        <Primeiro  />
      </Card>

      <Card titulo="Passando props" color="#F5DEB3">
        <ComParametros titulo="Start Wars" subtitulo="O Despertar da força"  />
      </Card>

      <Card titulo="Componentes com filhos" color="#FF1493">
      <ComFilhos>
        <ul>
          <li>Andreia</li>
          <li>Beatriz</li>
          <li>Priscila</li>
        </ul>
      </ComFilhos>
      </Card>

      <Card titulo="Dados repetição" color="#FFD700">
        <Repeticao />
      </Card>

    </div>
  );
}

export default App;
