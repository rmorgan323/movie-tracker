import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Movie Tracker</h1>
            <NavLink to='/login'>Login</NavLink>
        </div>
    )
}

export default Header;