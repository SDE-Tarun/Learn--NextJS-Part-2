import React, { useContext } from 'react'
import { Mycontext } from '../Helper/Context'

const Header = () => {
    const user = useContext(Mycontext)
  return (
    <div className='bg-green-200'>{user}</div>
  )
}

export default Header