import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export const Product = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Link to={'laptops'}>laptops</Link>
        <Link to={'mobile'}>mobile</Link>
      <h1>Welcome to Product Page</h1>
      <button onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}
export default Product
