import React from 'react'
import { useSelector } from 'react-redux'

const Player = ({currentSong, setCurrentSong}) => {

    const state = useSelector(state => state.songs)

    const pause = () => {
        if (currentSong.audio) {currentSong.audio.pause()}
    }

    const skip = () => {

    }
    const previous = () => {}

    if (currentSong) {
    return (
        <div>
            <button onClick = {pause} className ='pause'>PAUSE</button>
            <button onClick = {skip} className ='skip'>SKIP</button>
            <button onClick = {previous} className ='previous'>PREVIOUS</button>
            <input type="range" min="1" max="100" value="50" className="slider"/>

            <div className = 'song__info'>{currentSong.name}
            </div>
            <div className = 'song__artist'>{currentSong.artist_name}</div>
            <div>
                <h1>PLAYER</h1>
            </div>
         </div>
         )
    }
    else {
        return (
            <h1>PLAYER</h1>
        )
    }
}



export default Player
