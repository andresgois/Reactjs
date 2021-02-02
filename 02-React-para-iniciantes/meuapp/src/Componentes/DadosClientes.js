import React from 'react';

const Cli = {
  cliente: 'Andreia',
  idade: 4,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500' },
    {nome: 'Boneca', preco: 'R$ 120' },
    {nome: 'Mamadeira', preco: 'R$ 20' }
  ],
  ativo: false
}

const DadosClientes = () => {
  const total = Cli.compras.map( (c) => Number(c.preco.replace('R$ ', '')))
                    .reduce( (a,b) => a+b);


  return (
    <div>
      <p>Cliente: {Cli.cliente}</p>
      <p>Idade: {Cli.idade}</p>
      <div>Situação: 
        <span style={{color: Cli.ativo ? 'green' : 'red'}}>
          {Cli.ativo ? 'Ativa' : 'Inativa'}
        </span>
      </div>
      <p>Total R$ {total}</p>
    </div>
  );
}


export default DadosClientes;