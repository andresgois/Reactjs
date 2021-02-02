import React from 'react';


const ramd = (props) => {
  const r = Math.random();
  return (
    <div>
      <h4>{props.titulo}</h4>
      <p>Número: {r}</p>
    </div>
  );
}


export default ramd;