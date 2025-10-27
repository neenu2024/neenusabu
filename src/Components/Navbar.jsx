import React from 'react'
import './Nav.css'
import logo from '../assets/Logo.png'
function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary navbar-bg">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src={logo} alt="img" width="30" height="24" className="d-inline-block align-text-top "/>
            Ecommerce           
            </a>
            <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
      </form>
            </div>
             
            </nav>
    </div>
  )
}

export default Navbar
