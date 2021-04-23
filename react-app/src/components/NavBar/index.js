import React from 'react';
import logo from '../../images/logo.png'
import LogoutButton from '../../components/auth/LogoutButton';
import Search from '../Search'
import './NavBar.css';

const NavBar = ( { authenticated, setAuthenticated, q, setQ } ) => {

if (authenticated) {
    return (
        <div className="navContainer">
            <div className='search'>
                <Search q={q}
                        setQ={setQ} />
            </div>
            <div className = 'navbar__logo'>
                <a className="anchor" href="/">
                <img alt = 'logo' className = 'navbar__logo' src={logo}></img></a>
            </div>
                { authenticated &&
                    <div className='logout'>
                        <LogoutButton
                            setAuthenticated={setAuthenticated}
                            q={q}
                            setQ={setQ} />
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
