import React from "react";
import { logout } from "../../../store/session";
import { useDispatch } from 'react-redux'
import './LogoutButton.css'

const LogoutButton = ({setAuthenticated, q, setQ}) => {
    const dispatch = useDispatch()
    const onLogout = async (e) => {
    await dispatch(logout());
    setAuthenticated(false);
    if (q.currentSong){
      q.currentSong.audio.pause()
    }
    setQ({ ...q, currentSong: null, isPlaying:false })


  };
  return <button className='logout__button'
  onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
