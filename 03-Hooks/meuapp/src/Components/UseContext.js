import React from 'react'

export const UseContext = React.createContext();

export const UserContext = ({ children }) => {
  const [contar, setContar ] = React.useState(0);

  function  adicionarUm(){
    setContar( (contar) => contar + 1);
  } 
  
  function AdicionarDois(){
    setContar( (contar) => contar + 2);
  }

  return <UseContext.Provider value={{ nome: 'Andre',contar, adicionarUm, AdicionarDois}}>
    {children}
  </UseContext.Provider>
}
