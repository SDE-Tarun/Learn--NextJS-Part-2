'use client'
import React, { useState } from 'react'
import Header from './Components/Header'

const page = () => {
  const [num, setnum] = useState(10);
  return (
    <div>
      <Header num={num} />
    </div>
  )
}

export default page