import React, { useState } from 'react';
import logo from '../../images/logo.png'
import LogoutButton from '../../components/auth/LogoutButton';
import './NavBar.css';

const NavBar = ( { authenticated, setAuthenticated } ) => {

if (authenticated) {
    return (
        <div className="navContainer">
            <div className = 'navbar__logo'>
                <a className="anchor" href="/">
                <img className = 'navbar__logo' src={logo}></img></a>
            </div>
                { authenticated &&
                <LogoutButton setAuthenticated={setAuthenticated}/>
                }
        </div>
    )
} else {
    return (
        <div className="navContainer">
            <div className = 'navbar__logo'>
                <a className="anchor" href="/">
                <img className = 'navbar__logo' src={logo}></img></a>
            </div>
        </div>
        )
    }
}


export default NavBar;
