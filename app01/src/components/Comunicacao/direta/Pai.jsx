import React from 'react'
import Filho from './Filho'


const filhos = props => {
    return (
        <div>
            <div>
              <Filho sobrenome="silva">João </Filho>
              <Filho sobrenome="silva">Maria </Filho>
              <Filho sobrenome="silva">Pedro </Filho>
            </div>
        </div>
    );
}

export default filhos
