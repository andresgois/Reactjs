import React from 'react';
import Produtos from '../../data/produts';

const rep = props => {
    function getProdutosListItem(){
        return Produtos.map( prod => {
            return <li key={prod.id}>{prod.id} - {prod.name} - R$ {prod.price}</li>
        })
    }
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    );
}


export default rep