import React from "react";
import { logout } from "../../../store/session";
import { useDispatch } from 'react-redux'
import './LogoutButton.css'
const LogoutButton = ({setAuthenticated}) => {
    const dispatch = useDispatch()
    const onLogout = async (e) => {
    await dispatch(logout());
    setAuthenticated(false);

  };
  return <button className='logout__button'
  // style = {{'margin-bottom': '10px' }}
  onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
