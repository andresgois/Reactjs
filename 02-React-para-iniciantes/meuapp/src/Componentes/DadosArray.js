import React from 'react';


const Arr = (props) => {

  const livros = [
    {nome: 'A game', ano: 1996},
    {nome: 'A Clash', ano: 1998},
    {nome: 'A Storm of Swords', ano: 2000}
  ]

  return (
    <div>
      <ul>
        {
        livros
          .filter(({ ano }) => ano >= 1998)
          .map(({ nome, ano}) => (
            <li key={nome}>{nome}, {ano}</li>
          ))
        }
      </ul>
    </div>
  );
}


export default Arr;