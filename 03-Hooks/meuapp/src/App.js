import './App.css';
import './App.css'
import Btn from './Components/Btn';
import Card from './layout/Card';
import Renderiza from './Components/Renderiza';
import HookEfect from './Components/HookEfect';
import LocalStorange from './Components/LocalStorange';
import UseRef from './Components/UseRef';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';

const  App = () => {

  return (
    <section>

      <Card titulo="Teste Botão">
        <Btn />
      </Card>

      <Card titulo="Renderiza componente por fetch">
        <Renderiza />
      </Card>

      <Card titulo="Hook de efeito">
        <HookEfect />
      </Card>

      <Card titulo="Armzena dados">
        <LocalStorange />
      </Card>

      <Card titulo="Executa uma única vez">
        <UseRef />
      </Card>

      <Card titulo="Para funções que demandam muito tempo">
        <UseMemo />
      </Card>

      <Card titulo="Evita que varias funções sejam criandas no button onclick">
        <UseCallback />
      </Card>
      {/* Parei na aula 08 */}

    </section>
  );

}

export default App;
