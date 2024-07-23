// import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './App.css';
const Navbar = () => {
  return (
    <Nav className="nav">
        <a href="/" className="site-title">Site-name</a>
        <ul>
            <li className="active"> 
            <a href="/">Home</a>
            </li>
            <li>
                <a href="/pricing">Pricing</a>
            </li>
           <li>
             <a href="/about">About</a>
            </li>
        </ul>
    </Nav>
  )
}

export default Navbar