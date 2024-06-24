'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
  // console.log(params);
  // console.log(params.id);
  const {id} = params;
  // console.log(params);
  // console.log(id);

  const [users, setusers] = useState([])

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    const data = res.data
    console.log(data);
    setusers(data);
  }

  useEffect(() => {
    getUsers() 
  }, [])

  return (
    <div>{JSON.stringify(users)}</div>
  )
}

export default page