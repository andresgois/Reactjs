import React from 'react';


const Passo =  (props) => {

  return (
    <>
      <div>
          <label for="passoInput">Passo:</label>
          <input id="passoInput" type="number"
            value={props.passo}
            onChange={e => props.onPassoChange (+e.target.value )} />
        </div>
    </>
  )
}

export default Passo

