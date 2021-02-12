import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorange = ({children}) => {
  const [contar, setContar] = React.useState(0);

  function contarUm(){
    setContar( (contar) => contar +1);
  }

  return (
    <GlobalContext.Provider value={{ contar, contarUm }}>
      {children}
    </GlobalContext.Provider>
  )
}

