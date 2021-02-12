import React from 'react';
import { NavLink, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produtos = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location)
  const search = new URLSearchParams(location.search)
  // produto?nome=telefone
  console.log(search.get('nome'));
  // telefone

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <hr />

      <nav>
        <NavLink to="" element={ <ProdutoDescricao /> }>Descrição</NavLink>
        <NavLink to="avaliacao" element={ <ProdutoAvaliacao /> }>Descrição</NavLink>
        <NavLink to="customizado" element={<ProdutoCustomizado />}>Descrição</NavLink>
      </nav>

      {/* <Routes>
        <Route path="/" element={ <ProdutoDescricao /> } />
        <Route path="avaliacao" element={ <ProdutoAvaliacao /> } />
        <Route path="customizado" element={ <ProdutoCustomizado /> } />
      </Routes> */}

      <Outlet />
    </div>
  )
}

export default Produtos
