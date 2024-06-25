import React from 'react'
import Navbar from './Navbar'

const Header = (props) => {
    // console.log(props);
    // console.log(props.num);
  return (
    <div className='bg-red-800 p-5'>
        This is my Header Page
        <Navbar num={props.num} />
     </div>
  )
}

export default Header