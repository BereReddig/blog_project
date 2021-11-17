import React from "react";
import './nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="menu">
            <Link to='/articles' className='nav-link'>Articles</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/register' className='nav-link'>Register</Link>
            <Link to='/login' className='nav-link'>Login</Link>
        </nav>
    );
}

export default Nav;