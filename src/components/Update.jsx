import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from './Navbar';

export default function Update() {
    const loadedUser = useLoaderData();
    const [userName, setUserName] = useState(loadedUser.name);

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email};
        console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('user update successfully');
                const newName = name;
                setUserName(newName);
            }
        })
    }
  return (
    <div>
        <Navbar></Navbar>
        <h3>Update information of {userName}</h3>
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
