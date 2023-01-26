import React from 'react'
import {Link} from "react-router-dom";
import foodLogo from "../images/foodLogo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
    <img src={foodLogo} alt='Img not found' className='foodLogo'/>
    <ul className='header-list'>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Gallery</li>
        <li>Review</li>
        <li>Order</li>
    </ul>
  <Link to="/login" className='login-btn-home'>Login</Link>
    </div>
  )
}

export default Header