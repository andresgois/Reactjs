import './App.css';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';
import Exemplo from './Exemplos';


const  App = () => {

  const { pathname } = window.location;
  let Pagina;
  if (pathname === '/'){
    Pagina = Home;
  }if( pathname === '/exemplos'){
    Pagina = Exemplo;
  }if( pathname === '/produtos'){
    Pagina = Produtos;
  }
  console.log(pathname);
  console.log(Pagina);

  return (
    <section>
      <Header/>
      <Pagina />
    </section>
  );

}

export default App;
