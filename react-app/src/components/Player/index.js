import React, { useState } from 'react'
import './Player.css'

const Player = ({q, setQ}) => {

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
        // skip()
    }

    const pause = (currentSong) => {
        // console.log(q)
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
        // if (q.isPlaying) {
            const nextSong = q[q.currentSong.currentId + 1]
            if (!nextSong) {
                pause()
                return
            }
            play(nextSong)
        }
    // }

    const previous = () => {
        // if (q.isPlaying) {
            const previousSong = q[q.currentSong.currentId - 1]
            if (!previousSong) {
                pause()
                return
            }
            play(previousSong)
        }
    // }

    const changeMute = () => {
        if (!muted) {
            q.currentSong.audio.muted = true
            setVolume(0)
        }
        else { q.currentSong.audio.muted = false
            setVolume(volume)
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
            // q.currentSong.audio.currentTime=currentTime
        }, 500)

    }

    const changeTime =  ( event )  => {
        //  setCurrentTime(event.target.valueAsNumber)
         q.currentSong.audio.currentTime = event.target.valueAsNumber

        // await setCurrentTime(event.target.value)
        // console.log('=========', event.target.valueAsNumber)
    }

    // const timeFunction = (song) => {
    //     const minutes =  Math.floor(song.length / 60);
    //     let seconds = (Math.floor(Math.floor(song.length)) - (Math.floor(song.length / 60)) * 60);
    //     console.log(seconds)
    //     if (seconds < 10) { seconds = "0" + seconds;}
    //     return minutes+':'+seconds;
    // }


// const onScrubEnd = () => {
//     if (!q.isPlaying) {
//         setQ ({ ...q, isPlaying: true})

//     //   setIsPlaying(true)
//     }
//     displayTime();
//   }
    if (!q.currentSong) {
        return (<div>HELLO</div>)
    } else {
    return (
        <div className = 'player__container'>
            <div className = 'controls'>
                <div className = 'buttons'>
                    <button className = 'previous' onClick = {previous} className ='previous'>
                        <i class="fas fa-angle-double-left"></i>
                    </button>
                    <button className = 'pause' onClick = {pause} className ='pause'>
                        {q.isPlaying ?
                        <i class="far fa-pause-circle"></i> :
                        <i class="far fa-play-circle"></i>}
                    </button>
                    <button className = 'skip' onClick = {skip} className ='skip'>
                        <i class="fas fa-angle-double-right"></i>
                    </button>
                </div>
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

            <div className = 'song__info'>
                <div className = 'song__name'>{q[q.currentSong.currentId]?.name}
                </div>
                <div className = 'artist__name'>{q[q.currentSong.currentId]?.artist_name}</div>
            </div>

            <div className = 'time'>
                <input className = 'time__slider'
                    onLoad={displayTime()}
                    onChange={changeTime}
                    // onClick={changeTime}
                    // onChange={(e) => changeTime(e.target.value)}
                    // onMouseUp={changeTime}
                    // onKeyUp={changeTime}
                    type="range"
                    min={0}
                    // step={0.02}
                    max= {q.currentSong.audio.duration}
                    value = {q.currentSong.audio.currentTime}
                    >
                </input>
                <div className = 'times'>
                    <div className = 'time__number'>
                    <div className = 'currentTime'>
                        {/* {timeFunction(q.currentSong)} */}
                            { Math.floor(q.currentSong.audio.currentTime / 60) + ':' +
                            (Math.floor(Math.floor(q.currentSong.audio.currentTime)) - (Math.floor(q.currentSong.audio.currentTime / 60)) * 60) }
                        </div>
                        <div className = 'duration'>
                            { Math.floor(q.currentSong.audio.duration / 60) + ':' +
                            (Math.floor(Math.floor(q.currentSong.audio.duration)) - (Math.floor(q.currentSong.audio.duration / 60)) * 60) }
                        </div>
                        {/* <div className = 'currentTime'>
                            { Math.floor(q.currentSong.audio.currentTime / 60) + ':' +
                            (Math.floor(Math.floor(q.currentSong.audio.currentTime)) - (Math.floor(q.currentSong.audio.currentTime / 60)) * 60) }
                        </div>
                        <div className = 'duration'>
                            { Math.floor(q.currentSong.audio.duration / 60) + ':' +
                            (Math.floor(Math.floor(q.currentSong.audio.duration)) - (Math.floor(q.currentSong.audio.duration / 60)) * 60) }
                        </div> */}
                    </div>
                </div>
            </div>
         </div>
         )
    }

}



export default Player
