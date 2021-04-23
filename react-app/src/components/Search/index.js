import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './Search.css';


const Search = ({q, setQ}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const artists = useSelector(state => Object.values(state.artists.allArtists))
    const songs = useSelector(state => Object.values(state.songs))

    let artistResults = artists.filter(artist => artist.name.toLowerCase().includes(searchTerm.toLowerCase()))
    let songResults = songs.filter(song =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const play = ( currentSong ) => {
        const currentId = currentSong.id
        if (q.currentSong) {q.currentSong.audio.pause()}
        let audio = new Audio(currentSong.url)
        setQ({ ...q, currentSong: {currentId, audio}, isPlaying:true })
        audio.play()
    }


    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }


    return (
        <div className='searchbar__container'>
            <input className='searchbar__input'
                className ='searchbar'
                value={searchTerm}
                onChange={handleChange}
                placeholder='Find your favorite songs'>
            </input>
            <div className='search__results'>
                {searchTerm &&
                    artistResults.map(artist => (
                        <a className='artistlink' href={`/artists/${artist.id}`}>
                            <div className='artistlink__name'>{artist.name}</div>
                            <div className='searchbar__type'> artist</div>
                        </a>
                    ))}

                {searchTerm &&
                    songResults.map(song => (
                        <div className='songlink' onClick={() => play(song)}>
                            <div className='songlink__name'>{song.name}</div>
                            <div className='searchbar__artistname'>by {song.artist_name}</div>
                            <div className='searchbar__type'>song</div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Search
