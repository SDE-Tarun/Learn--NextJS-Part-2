'use client'

import React, { useContext } from 'react'
import { Mycontext } from './Helper/Context'
import Header from './Components/Header'
import Navbar from './Components/Navbar'

const page = () => {
  const user = useContext(Mycontext)
  console.log(user);
  return (
    <div>
      {user}
      <Header />
      <Navbar/>
      </div>

  )
}

export default page