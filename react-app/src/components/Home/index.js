import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSongs } from '../../store/songs'
import Song from '../Song'
import Artists from '../Artists'
import './Home.css'

const Home = () => {

    const dispatch = useDispatch()
    const artists = useSelector(state => Object.values(state.artists))
    console.log(artists)
    // const artist = useSelector(state => state.artists)

    return (
        <div className = 'container'>
            <div className = 'container__left'>
                <Artists />
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
                <div className = 'content__header'> Browse Today's Hits
                    <div>
                        <Song />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
