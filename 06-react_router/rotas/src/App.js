import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './PaginasAula1/Home';
import Sobre from './PaginasAula1/Sobre';
import NotFound from './PaginasAula1/NotFound';
import Login from './PaginasAula1/Login';
import Produtos from './PaginasAula1/Produtos';
import ProdutoAvaliacao from './PaginasAula1/ProdutoAvaliacao';
import ProdutoDescricao from './PaginasAula1/ProdutoDescricao';
import ProdutoCustomizado from './PaginasAula1/ProdutoCustomizado';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="produto/:id/*" element={<Produtos />} >

        <Route path="/" element={ <ProdutoDescricao /> } />
        <Route path="avaliacao" element={ <ProdutoAvaliacao /> } />
        <Route path="customizado" element={ <ProdutoCustomizado /> } />

      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
