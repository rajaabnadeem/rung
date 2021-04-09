import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './Song.css'

const Song = ({q, setQ, allSongs:state}) => {

    // const state = useSelector(state => Object.values(state.songs))
    const [time, setTime] = useState(0)

    const play = ( currentSong ) => {
        const currentId = currentSong.id
        if (q.currentSong) {q.currentSong.audio.pause()}
        let audio = new Audio(currentSong.url)
        setQ({ ...q, currentSong: {currentId, audio}, isPlaying:true })
        audio.play()
    }

    // useEffect(() => {
    // }, [])

    // const timeFunction = (song) => {
    //     const minutes =  Math.floor(song.length / 60);
    //     const seconds = (Math.floor(Math.floor(song.length)) - (Math.floor(song.length / 60)) * 60);
    //     const songTime = (minutes) + ":" Str(seconds)
    //     // const songTime = ( Math.floor(song.length / 60) + ':' +
    //     // (Math.floor(Math.floor(song.length)) - (Math.floor(song.length / 60)) * 60))
    //     return songTime
    // }

    return (
        <div className = 'song__container'>
            <div className = 'navbar__song'>
                    <div className = 'song_id'>#</div>
                    <div className = 'song_name'>Name</div>
                    <div className = 'song_artist'>Artist</div>
                    <div className = 'song_length'>Length</div>
            </div>
                { (Object.values(state).length > 0) && Object.values(state).map(song => (
                    <>
                    <div className = 'hr'><hr/></div>
                    <div onClick={() => play(song)} className = 'single__song'>
                        <div className ='id'>{song.id}</div>
                        <div className = 'name'>{song.name}
                        </div>
                        <div className = 'artist'>{song.artist_name}</div>
                        <div className = 'duration'>
                            {/* { timeFunction(song) } */}
                            {/* <>
                            { const time = Math.floor(song.length / 60) }
                            </> */}
                            { Math.floor(song.length / 60) + ':' +
                            (Math.floor(Math.floor(song.length)) - (Math.floor(song.length / 60)) * 60) }
                        </div>
                    </div>
                    </>
                ))}
            </div>
        )
}

export default Song
