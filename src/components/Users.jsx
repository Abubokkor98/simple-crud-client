import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from './Navbar';

export default function Users() {
    const users = useLoaderData();
  return (
    <div>
        <Navbar></Navbar>
        <h2>Users: {users.length}</h2>
        <div>
            {
                users.map(user=><p key={user._id}>Name: {user.name} Email: {user.email}</p>)
            }
        </div>
    </div>
  )
}
