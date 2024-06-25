import React, { useContext } from 'react'
import { Mycontext } from '../Helper/Context'

const Navbar = () => {
    const user = useContext(Mycontext)
  return (
    <div className='bg-slate-600'>{user}</div>
  )
}

export default Navbar