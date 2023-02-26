import React, { createContext, useState } from 'react'

export const CoinQuery = createContext()
const CoinContext = ({children}) => {
    const [query, setQuery] = useState("");
  return (
    <CoinQuery.Provider value={{query, setQuery}}>
      {children}
    </CoinQuery.Provider>
  )
}

export default CoinContext
