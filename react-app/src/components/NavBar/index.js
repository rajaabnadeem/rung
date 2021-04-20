import React from 'react';
import logo from '../../images/logo.png'
import LogoutButton from '../../components/auth/LogoutButton';
import './NavBar.css';

const NavBar = ( { authenticated, setAuthenticated } ) => {

if (authenticated) {
    return (
        <div className="navContainer">
            <div></div>
            <div className = 'navbar__logo'>
                <a className="anchor" href="/">
                <img alt = 'logo' className = 'navbar__logo' src={logo}></img></a>
            </div>
                { authenticated &&
                <div className='logout__container'>
                    <div className='logout'>
                        <LogoutButton setAuthenticated={setAuthenticated}/>
                    </div>
                </div>
                }
        </div>
    )
} else {
    return (
        <div className="navContainer">
            <div></div>
            <div className = 'navbar__logo'>
                <a className="anchor" href="/">
                <img alt='logo' className = 'navbar__logo' src={logo}></img></a>
            </div>
            <div></div>
        </div>
        )
    }
}


export default NavBar;
