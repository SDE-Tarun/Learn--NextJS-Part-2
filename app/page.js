'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [users, setusers] = useState([])

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    const data = res.data
    // console.log(data);
    setusers(data);
  }

  useEffect(() => {
    getUsers() 
  }, [])
  

  return (
    <>
    <button onClick={getUsers} className='bg-green-600 text-white px-4 py-2 rounded font-bold'>Get Data</button>
    <div className='p-8 bg-slate-100 mt-5'>
      <ul>
        {users.map((e)=>{
          return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
        })}
      </ul>
    </div>
    </>
  )
}

export default page