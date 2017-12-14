import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <h1>Movie Tracker</h1>
            <NavLink className="login" to='/login'>Login</NavLink>
            <NavLink className="signup" to='/signup'>Sign-up</NavLink>
        </div>
    )
}

export default Header;