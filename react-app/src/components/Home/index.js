import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSongs } from '../../store/songs'
import Song from '../Song'
import Artists from '../Artists'
import ArtistPage from "../ArtistPage";
import './Home.css'

const Home = ({currentSong, setCurrentSong}) => {

    const artists = useSelector(state => Object.values(state.artists))

    return (
        <div className = 'container'>
            <div className = 'container__left'>Artists
            <a href = {`artists/${artists.id}`}>
                <Artists/>
                </a>
            </div>
            <div className = 'container__right'>
                <div className = 'artist__container'>
                    <div className = 'artist__header'> Check out your favorite artists
                    </div>
                    <div className = 'artist__info'>
                        {artists.map(artist => (
                            <a href = {`artists/${artist.id}`} className = 'single__artist'>
                                <div className = 'artist__img'>
                                    <img src = {artist.img}></img>
                                </div>{artist.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className = 'content__header'> Browse Today's Hits </div>
                <div className = 'navbar__song'>
                    <div className = 'song__id'>#</div>
                    <div className = 'song__name'>Name</div>
                    <div className = 'song__artist'>Artist</div>
                    <div className = 'song__length'>Length</div>
                </div>
                    <Song currentSong = {currentSong}
                         setCurrentSong = {setCurrentSong} />
                </div>
        </div>
    )
}

export default Home
