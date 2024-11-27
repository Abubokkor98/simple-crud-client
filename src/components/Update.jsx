import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from './Navbar';

export default function Update() {
    const loadedUser = useLoaderData();
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
    }
  return (
    <div>
        <Navbar></Navbar>
        <h3>Update information of {loadedUser.name}</h3>
        <form onSubmit={handleUpdate}>
            <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
            <br />
            <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
            <br />
            <input type="submit" value="Update" />
        </form>
    </div>
  )
}