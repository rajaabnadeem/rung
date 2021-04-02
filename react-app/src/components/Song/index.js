import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Song.css'

const Song = () => {

    const state = useSelector(state => Object.values(state.songs))

    const handleClick = (song_url) => {
        let audio = new Audio(song_url)
        audio.play()
    }


    return (
        <div>
            { state.map(song => (
                <div onClick={() => handleClick(song.url)} className = 'single__song'>
                    <div className = 'name'>
                        <div>{song.name}</div>
                        {/* <audio controls src={song.url}>{song.name}</audio> */}
                    </div>
                    <div className = 'artist'>{song.artist_name}</div>
                    <div className = 'length'>{song.length}</div>
                </div>
            ))}
        </div>
    )
}

export default Song
