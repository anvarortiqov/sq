import React from 'react'

function Navbar() {
  return (
    <nav className='nav'>
        <div className="logo">
            <h2 className="brand-name">
                 SQ R3
            </h2>
        </div>
        <ul>
            <li>
                <a href="" className="nav-link">Home</a>
            </li>
            <li>
                <a href="" className="nav-link">About</a>
            </li>
            <li>
                <a href="" className="nav-link">Service</a>
            </li>
            <li>
                <a href="" className="nav-link">Furniture</a>
            </li>
            <li>
                <button className='btn btn-dark'>Order Now</button>
            </li>
            <li>
                S
            </li>
        </ul>
    </nav>
  )
}

export default Navbar