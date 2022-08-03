import React, { createContext, useContext } from 'react'
import { useState } from 'react';

const ContextProvider = createContext();

const useAppContext = () => {
    return useContext(ContextProvider)
}

const ContextApi = ({children}) => {

    const [burger, setBurger] = useState(false);
    const [drawer, setDrawer] = useState(false);


    const allState = {
        burger,
        setBurger,
        drawer,
        setDrawer,
    }


  return (
      <ContextProvider.Provider value={{allState}}  >
        {children}
      </ContextProvider.Provider>
  )
}

export default ContextApi;
export {useAppContext} 
