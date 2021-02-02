import React from 'react'

// como um array, só q recebe apenas valor unico
const set1 = new Set();
const set2 = new Set();

const Produto = () => {

  const func1 = () => {
    console.log('teste')
  }

  
  const func2 = React.useCallback(() => {
    console.log('teste')
  }, [])

  set1.add(func1)
  set1.add(func2)

  console.log('set1: ', set1)
  console.log('set2: ', set2)
  // retirar strict mode no index.js

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  )
}

const UseCallback = () => {
  const [contar, setContar] = React.useState(0)

  return (
    <div>
      <Produto />
      <button onClick={ () => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default UseCallback
