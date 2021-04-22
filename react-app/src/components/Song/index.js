import React from 'react'
import './Song.css'

const Song = ({q, setQ, allSongs:state}) => {

    const play = ( currentSong ) => {
        const currentId = currentSong.id
        if (q.currentSong) {q.currentSong.audio.pause()}
        let audio = new Audio(currentSong.url)
        setQ({ ...q, currentSong: {currentId, audio}, isPlaying:true })
        audio.play()
    }

    const timeFunction = (song) => {
        const minutes =  Math.floor(song.length / 60);
        let seconds = (Math.floor(Math.floor(song.length)) - (Math.floor(song.length / 60)) * 60);
        if (seconds < 10) { seconds = "0" + seconds;}
        return minutes+':'+seconds;
    }

    return (
        <div className = 'song__container'>
            <div className = 'navbar__song'>
                    <div className = 'song_id'>#</div>
                    <div className = 'song_name'>Name</div>
                    <div className = 'song_artist'>Artist</div>
                    <div className = 'song_length'>Length</div>
            </div>
                { (Object.values(state).length > 0) && Object.values(state).map((song, song_id=1) => (
                    <>
                        <div className = 'hr'><hr/></div>
                        <div onClick={() => play(song)} className = 'single__song'>
                            <div className ='id'>{++song_id}</div>
                            <div className = 'name'>{song.name}</div>
                            <div className = 'artist'>{song.artist_name}</div>
                            <div className = 'duration'>
                                { timeFunction(song) }
                            </div>
                        </div>
                    </>
                ))}
            </div>
        )
}

export default Song
