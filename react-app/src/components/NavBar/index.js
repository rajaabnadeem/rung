import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../images/logo.png'
import './NavBar.css';

import Modal from 'react-modal';

import LogoutButton from '../../components/auth/LogoutButton';

const NavBar = () => {
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    // const sessionUser = useSelector((state) => state.session.user);
    // const errors = useSelector((state) => {
    //     if (state.session.user) {
    //         return state.session.user.errors;
    //     } else {
    //         return null;
    //     }
    // });

    const style = {
        overlay: {
            textAlign: 'center',
            top: '45px',
            backgroundColor: 'rgba(0,0, 0, 0.8)',
            zIndex: '1000',
        },
    };

    // const toggleModal = () => {
    //     modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    // };

    // if (sessionUser && !errors) {
        return (
            <div className="navContainer">
                <div className = 'logo'>
                <a className="anchor" href="/">
                        <img alt="logo" className = 'logo' src={logo}></img></a>
                </div>
            </div>
        )
}


export default NavBar;
