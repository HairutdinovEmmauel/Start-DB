import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <div className="header">
            <div className="menu">
                <div className="header-logo">
                    <Link to={'/'}>Star DB</Link></div>
                <ul className="topnav">
                    <Link to={'/people/'} >People</Link>
                    <Link to={'/planets/'} >Planets</Link>
                    <Link to={'/starships/'} >StarShips</Link>
                    <Link to={'/login'} >Login</Link>
                    <Link to={'/secret'} >Secret</Link>
                </ul>
            </div>
        </div>
    );

};

export default Header;
