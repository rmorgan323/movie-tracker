import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Movie Tracker</h1>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Header;