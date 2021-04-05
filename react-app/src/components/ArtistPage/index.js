import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ArtistPage.css'

const ArtistPage = () => {

    const state = useSelector(state => Object.values(state.artists))

    return (
      <h1> HELLO </h1>
    )
}

export default ArtistPage
