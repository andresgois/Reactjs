import React from 'react';


const Arr = (props) => {

  const Produtos = [
    {id: 1, nome: 'Smartfone', preco: 'R$ 2000', cores: ['#29d8d5', '#252a34', '#fc3766']},
    {id: 2, nome: 'Notebook', preco: 'R$ 3000', cores: ['#ffd045', '#d4394b', '#f37c59']},
    {id: 3, nome: 'Tablet', preco: 'R$ 1500', cores: ['#ff00ff', '#ff0000', '#00ff00']}
  ]

  const dados = Produtos.filter(
    ({preco}) => Number(preco.replace('R$ ','')) > 1500,
  );

  return (
    <div>
     
        {
          dados.map( ({id, nome, preco, cores}) => (
            <div key={id}>
              <h3 >{nome}</h3>
              <strong >Preço: R$ {preco}</strong>
              <ul>
                {
                  cores
                    .map( (c) => (
                      <p style={{ backgroundColor: c, color: '#fff'}} key={c}>{c}</p>
                    ))
                }
              </ul>
            </div>
          ))
        }
      
    </div>
  );
}


export default Arr;