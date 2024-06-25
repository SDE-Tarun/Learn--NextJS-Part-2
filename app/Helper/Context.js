'use client'

import React, { createContext } from 'react'

export const Mycontext =  createContext()

const Context = ({children}) => {
   const username = 'Sarthak sharma'
  return (
    <div>
    <Mycontext.Provider value={username}>
     {children}
    </Mycontext.Provider>
    </div>
  )
}

export default Context