import './App.css';
import Primeiro from './components/Primeiro';
import ComParametros from './components/ComParametros';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';

function App() {
  return (
    <div className="App">
      <Card titulo="Primeiro COmponente">
        <Primeiro />
      </Card>
      <Card titulo="Passando props">
        <ComParametros titulo="Start Wars" subtitulo="O Despertar da força" />
      </Card>
      <Card titulo="Componentes com filhos">
      <ComFilhos>
        <ul>
          <li>Andreia</li>
          <li>Beatriz</li>
          <li>Priscila</li>
        </ul>
      </ComFilhos>
      </Card>

      <Card titulo="Dados repetição">
        <Repeticao/>
      </Card>

    </div>
  );
}

export default App;
