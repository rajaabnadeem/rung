import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Player = ({q, setQ}) => {

    const state = useSelector(state => state.songs)
    const [volume, setVolume] = useState(0.7)
    const [muted, setMuted] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)


    const play = ( currentSong ) => {
        const currentId = currentSong.id
        if (q.currentSong) {q.currentSong.audio.pause()}
        let audio = new Audio(currentSong.url)
        setQ({ ...q, currentSong: {currentId, audio}, isPlaying:true })
        audio.play()
        displayTime()
    }

    const pause = (currentSong) => {
        console.log(q)
        if (q.isPlaying) {
            q.currentSong.audio.pause()
            setQ ({ ...q, isPlaying: false})
        }
        else {
             q.currentSong.audio.play()
             setQ ({ ...q, isPlaying: true})

        }
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

    const changeMute = () => {
        if (!muted) {q.currentSong.audio.muted = true}
        else { q.currentSong.audio.muted = false}
        setMuted(muted => !muted)
        }

    const changeVolume = (event) => {
            setVolume(event.target.valueAsNumber)
            q.currentSong.audio.volume = volume
        }

    const displayTime = () => {

        setInterval(() => {
            setCurrentTime(q.currentSong.audio.currentTime)
        }, 1000)
    }

    const changeTime = () => {
        setCurrentTime(q.currentSong.audio.currentTime)

    }

    if (!q.currentSong) {
        return (<div>HELLO</div>)
    } else {
    return (
        <div>
            <button onClick = {pause} className ='pause'>PAUSE</button>
            <button onClick = {skip} className ='skip'>SKIP</button>
            <button onClick = {previous} className ='previous'>PREVIOUS</button>
            <input onChange={changeVolume}
                type="range"
                min={0}
                max={1}
                step={0.02}
                value={volume}
                />
            <button onClick={changeMute}
                >
                {muted ? "unmute" : "mute"}
            </button>
            <input
                onLoad={displayTime()}
                onClick={changeTime}
                type="range"
                min={0}
                max= {q.currentSong.audio.duration}
                value = {currentTime}>

            </input>

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
