import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ArtistPage.css'

const ArtistPage = () => {

    const state = useSelector(state => Object.values(state.artists))


    return (
        <div>
            { state.map(artist => (
                <div className = 'single__song'>
                    <div className = 'name'>
                        <div>{artist.name}</div>
                        <div>{artist.img}</div>
                        {/* <audio controls src={song.url}>{song.name}</audio> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArtistPage
