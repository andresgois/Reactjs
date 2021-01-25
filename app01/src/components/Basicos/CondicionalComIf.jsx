import React from 'react';
import If from './if';

const ifTest = (props) => {

  return (
    <div>
      <h2> O Número {props.numero}</h2>
      <If test={ props.numero % 2 === 0}>
        <span>Par</span>
      </If>
      <If test={ props.numero % 2 === 1}>
        <span>Impar</span>
      </If>
    </div>
  )

}

export default  ifTest