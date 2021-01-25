import React from 'react';

const ifTest =  props => {

  return (
    <div>
      <h2> O Número {props.numero}</h2>
      {
        props.numero % 2 === 0 ?
        <span>Par</span> : <span>Impar</span>
      }
    </div>
  );

}

export default ifTest