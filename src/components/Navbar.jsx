import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to={'/users'}>Users</Link>
        <br />
        <Link to={'/'}>home</Link>

    </div>
  )
}
