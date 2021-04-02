import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Artists.css'

const Artists = () => {

    const state = useSelector(state => Object.values(state.artists))

    return (
        <div>
            { state.map(artist => (
                <div className = 'single__artist'>
                    <div className = 'name'>
                        <div>{artist.name}</div>
                    </div>
                    <div className = 'artist'>{artist.artist_id}</div>
                </div>
            ))}
        </div>
    )
}

export default Artists
