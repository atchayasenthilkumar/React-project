import React from 'react'
import { NavLink } from 'react-router-dom'
import App from '../App'
const NavBar = () => {
  return (
    <div>
       <NavLink to={'/'}>Home</NavLink>
       <NavLink to={'/products'}>Products</NavLink>
       <NavLink to={'/about'}>About</NavLink>
       <NavLink to={'/contactUs'}>ContactUs</NavLink>
    </div>
  )
}

export default NavBar
