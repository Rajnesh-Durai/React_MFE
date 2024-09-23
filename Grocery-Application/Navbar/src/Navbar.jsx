import React from 'react'
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import './index.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbarflex">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navcolumns">
            <Link to='/home' className="navbaritems">Home</Link>
            <Link to ='/shop' className="navbaritems">Shop</Link>
            <div className="navbaritems">About</div>
            <div className="navbaritems">Login</div>
            <div className="navbaritems signup">Sign-up</div>
            <Link to='/home' className="navbaritems">
              <FontAwesomeIcon icon={faShop} className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar