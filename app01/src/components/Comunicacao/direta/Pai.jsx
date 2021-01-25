import React from 'react'
import Filho from './Filho'


const filhos = props => {
    return (
        <div>
            <div>
              <Filho>João {props.sobrenome}</Filho>
              <Filho sobrenome="silva">Maria </Filho>
              <Filho sobrenome="silva">Pedro </Filho>
            </div>
        </div>
    );
}

export default filhos
