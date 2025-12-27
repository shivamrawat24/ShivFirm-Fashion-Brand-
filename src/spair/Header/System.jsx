import React from 'react'
import '../Header/Top.css'
import { Link } from 'react-router-dom'

function System() {
  return (
    
      <div className='topper'>
      <nav>
        <ul>
            <Link to='/' className='undernine'><li className='highlight'>Home</li></Link>
            <Link to='/product' className='undernine'><li>Products</li></Link>
            <Link to='/service' className='undernine'><li>Top</li></Link>
            <Link to='/userlogin' className='undernine'><li>userLogin</li></Link>
            <Link to='/cart' className='undernine'><li>cart</li></Link>
        </ul>
      </nav>
    </div>
    
  )
}

export default System
