import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

export default function Users() {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    console.log('delete', _id);
    fetch(`http://localhost:5000/users/${_id}`,{
        method: "DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount > 0){
            alert('deleted succesfully')
        }
    })
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2>Users: {users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            Name: {user.name} Email: {user.email} Id: {user._id}
            <button onClick={()=>handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
}
