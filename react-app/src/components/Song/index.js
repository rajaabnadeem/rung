import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Song.css'

const Song = () => {

    const state = useSelector(state => Object.values(state.songs))

    return (
        <div>
            { state.map(song => (
                <div className = 'single__song'>
                    <div className = 'name'>
                        <a href={song.url}>{song.name}</a>
                    </div>
                    <div className = 'artist'>{song.artist_id}</div>
                    <div className = 'length'>{song.length}</div>
                </div>
            ))}
        </div>
    )
}

export default Song
