import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './Search.css';
const Search = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const artists = useSelector(state => Object.values(state.artists.allArtists))
    const songs = useSelector(state => Object.values(state.songs))
    // console.log('artists', artists)
    // console.log('songs', songs)

    let artistResults = artists.filter(artist => artist.name.toLowerCase().includes(searchTerm.toLowerCase()))
    let songResults = songs.filter(song =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <input
                className ='searchbar'
                value={searchTerm}
                onChange={handleChange}>
            </input>
            <div className='search__results'>
                {searchTerm &&
                    artistResults.map(artist => (
                        <Link className = 'artist__link' to={`/artists/${artist.id}`}>
                            <div className='artist__link'>{artist.name}</div>
                        </Link>
                    ))}

                {searchTerm &&
                    songResults.map(song => (
                        <div className ='song__link'>{song.name}</div>
                    ))}
            </div>
        </div>
    )
}

export default Search
