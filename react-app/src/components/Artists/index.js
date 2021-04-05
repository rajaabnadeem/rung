import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Artists.css'

const Artists = () => {

    const state = useSelector(state => Object.values(state.artists))

    return (
        <div className = 'artists__container'>
            { state.map(artist => (
                <div className = 'single_artist__container'>
                    <a className = 'artist__banner' href = {`artists/${artist.id}`}>
                        <img className ="banner__img" src = {artist.banner} />{artist.name}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Artists
