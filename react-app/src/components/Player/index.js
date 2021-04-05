import React from 'react'
import { useSelector } from 'react-redux'

const Player = ({q, setQ}) => {

    const state = useSelector(state => state.songs)

    const play = ( currentSong ) => {
        const currentId = currentSong.id
        if (q.currentSong) {q.currentSong.audio.pause()}
        let audio = new Audio(currentSong.url)
        setQ({ ...q, currentSong: {currentId, audio}, isPlaying:true })
        audio.play()
    }

    const pause = () => {
        console.log(q)
        if (q.isPlaying) {q.currentSong.audio.pause()}
    }

    const skip = () => {
        if (q.isPlaying) {
            const nextSong = q[q.currentSong.currentId + 1]
            if (!nextSong) {
                pause()
                return
            }
            play(nextSong)
        }
        }

    const previous = () => {
        if (q.isPlaying) {
            const previousSong = q[q.currentSong.currentId - 1]
            if (!previousSong) {
                pause()
                return
            }
            play(previousSong)

        }
    }

    if (!q.currentSong) {
        return (<div>HELLO</div>)
    } else {
    return (
        <div>
            <button onClick = {pause} className ='pause'>PAUSE</button>
            <button onClick = {skip} className ='skip'>SKIP</button>
            <button onClick = {previous} className ='previous'>PREVIOUS</button>
            <input type="range" min="1" max="100" value="50" className="slider"/>

            <div className = 'song__info'>{q[q.currentSong.currentId].artist_name}
            </div>
            <div className = 'song__artist'>{q[q.currentSong.currentId].name}</div>
            <div>
                <h1>PLAYER</h1>
            </div>
         </div>
         )
    }

}



export default Player
