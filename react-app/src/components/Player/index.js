import React, { useState } from 'react'
import './Player.css'

const Player = ({q, setQ}) => {

    const [volume, setVolume] = useState(0.7)
    const [previousVolume, setPreviousVolume] =  useState()
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
        if (q.isPlaying) {
            q.currentSong.audio.pause()
            setQ ({ ...q, isPlaying: false})
        }
        else {
                q.currentSong.audio.play()
                setQ ({ ...q, isPlaying: true})
        }
    }

    const skip = (currentSong) => {
            const nextSong = q[q.currentSong.currentId + 1]
            if (!nextSong) {
                pause()
                return
            }
            play(nextSong)
        }

    const previous = () => {
            const previousSong = q[q.currentSong.currentId - 1]
            if (!previousSong) {
                pause()
                return
            }
            play(previousSong)
        }

    const changeMute = () => {
        if (!muted) {
            q.currentSong.audio.muted = true
            setPreviousVolume(volume)
            setVolume(0)
        }
        else { q.currentSong.audio.muted = false
            setVolume(previousVolume)
        }
        setMuted(muted => !muted)
    }

    const changeVolume = (event) => {
            setVolume(event.target.valueAsNumber)
            q.currentSong.audio.volume = volume
        }

    const displayTime =  () => {
         setInterval(() => {
            setCurrentTime(q.currentSong.audio.currentTime)
        }, 500)

    }

    const changeTime =  ( event )  => {
        //  setCurrentTime(event.target.valueAsNumber)
         q.currentSong.audio.currentTime = event.target.valueAsNumber
    }

    // const timeFunction = (song) => {
    //     const minutes =  Math.floor(song.length / 60);
    //     let seconds = (Math.floor(Math.floor(song.length)) - (Math.floor(song.length / 60)) * 60);
    //     console.log(seconds)
    //     if (seconds < 10) { seconds = "0" + seconds;}
    //     return minutes+':'+seconds;
    // }

    if (!q.currentSong) {
        return (<div></div>)
    } else {
    return (
        <div className = 'player__container'>
            <div className = 'controls'>
                <div className = 'extra b'></div>
                <div className = 'buttons b'>
                    <button className = 'previous' onClick = {previous} className ='previous'>
                        <i className="fas fa-angle-double-left d"></i>
                    </button>
                    <button className = 'pause' onClick = {pause} className ='pause'>
                        {q.isPlaying ?
                        <i className="fas fa-pause c"></i> :
                        <i className="fas fa-play c"></i>
                        }

                    </button>
                    <button className = 'skip' onClick = {skip} className ='skip'>
                        <i className="fas fa-angle-double-right d"></i>
                    </button>
                </div>
                <div className = 'b'>
                    <div className = 'volume__controls'>
                        <button className = 'mute' onClick={changeMute}>
                            {muted ?
                            <i class="fas fa-volume-mute"></i> :
                            <i class="fas fa-volume-up"></i>
                            }
                        </button>
                        <input className = 'volume__slider'
                            onChange={changeVolume}
                            type="range"
                            min={0}
                            max={1}
                            step={0.02}
                            value={volume}/>
                    </div>
                </div>
            </div>

            <div className = 'song__info'>
                <div className = 'song__name'>{q[q.currentSong.currentId]?.name}
                </div>
                <div className = 'artist__name'>{q[q.currentSong.currentId]?.artist_name}</div>
            </div>

            <div className = 'time'>
                <input className = 'time__slider'
                    onLoad={displayTime()}
                    onChange={changeTime}
                    type="range"
                    min={0}
                    max= {q.currentSong.audio.duration}
                    value = {q.currentSong.audio.currentTime}
                    >
                </input>
                <div className = 'times'>
                    <div className = 'time__number'>
                    <div className = 'currentTime'>
                        {/* {timeFunction(q.currentSong)} */}
                            { Math.floor(q.currentSong.audio.currentTime / 60) + ':' +
                            (String((Math.floor(Math.floor(q.currentSong.audio.currentTime)) - (Math.floor(q.currentSong.audio.currentTime / 60)) * 60))).padStart(2, 0) }
                            </div>
                        <div className = 'duration'>
                            { Math.floor(q.currentSong.audio.duration / 60) + ':' +
                            (String((Math.floor(Math.floor(q.currentSong.audio.duration)) - (Math.floor(q.currentSong.audio.duration / 60)) * 60))).padStart(2, 0) }
                        </div>
                    </div>
                </div>
            </div>
         </div>
         )
    }

}



export default Player
