import React from "react";
import './navbar.css';

const NavBar = () => {
    return <nav className="navBar">
    <div className="logo">
        <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" className="logo" height={40} width={40} alt="logo" />
    </div>
    <ul className="navLink">
        <li><a href="/" >Home</a></li>
        <li><a href="/products" >Products</a></li>
    </ul>
    </nav>
}

export default NavBar;