import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AppContext from '../../App'
import './Song.css'

const Song = ({q, setQ}) => {

    const state = useSelector(state => Object.values(state.songs))

    const play = ( currentSong ) => {
        const currentId = currentSong.id
        if (q.currentSong) {q.currentSong.audio.pause()}
        let audio = new Audio(currentSong.url)
        setQ({ ...q, currentSong: {currentId, audio}, isPlaying:true })
        audio.play()
    }


    return (
        <div className = 'song__container'>
            { state.map(song => (
                <div onClick={() => play(song)} className = 'single__song'>
                    <div className ='id'>{song.id}</div>
                    <div className = 'name'>{song.name}
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
