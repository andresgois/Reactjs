import React from 'react'
import './App.css'
import Btn from './Components/Btn';
import Card from './layout/Card';
import Renderiza from './Components/Renderiza';
import HookEfect from './Components/HookEfect';
import LocalStorange from './Components/LocalStorange';
import UseRef from './Components/UseRef';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';
import { UserContext } from './Components/UseContext';
import ProdutoContext from './Components/ProdutoContext';
import ProdutoExerc from './Components/ProdutoExec';
import { GlobalStorange } from './Components/GlobalContextExec'
import LocalStorage from './Components/useLocalStorage';
import UseFetch from './Components/UseFetch';


const  App = () => {

  const { request, data, loading, error  } = UseFetch();

  React.useEffect( () => {
    async function fetchData() {
      const {response, json } = await request('https://ranekapi.origamid.dev/json/api/produto/');
      console.log(response+' - '+ json);
    }
    fetchData()
  }, [request]);
  
  //console.log(data);
  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando.....</p>
  if(data){
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
        
        <Card>
          <UserContext>
            <ProdutoContext />
          </UserContext>          
        </Card>

        <Card>
          <GlobalStorange>
            <ProdutoExerc />
          </GlobalStorange>
        </Card>

        <Card titulo="Criando hook para armazenar dados no localStorage">
          <LocalStorage />
        </Card>

      </section>
    );
  }else{
    return null;
  }

}

export default App;
