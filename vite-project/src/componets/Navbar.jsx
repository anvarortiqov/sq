import React from 'react'
import {Link} from 'react-router-dom'

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
                <a href="/" className="nav-link">Home</a>
            </li>
            <li>
                <a href="/exemple" className="nav-link">About</a>
            </li>
            <li>
                <a href="/exemple" className="nav-link">Service</a>
            </li>
            <li>
                <a href="/exemple" className="nav-link">Furniture</a>
            </li>
            <li>
                <Link to={"/shop"}>
                    <button className='btn btn-dark'>Order Now</button>
                </Link>
            </li>
            <li>
                S
            </li>
        </ul>
    </nav>
  )
}

export default Navbar