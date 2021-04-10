import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Song from '../Song'
import Artists from '../Artists'
import './Home.css'
import * as songActions from '../../store/songs'


const Home = ({q, setQ}) => {

    const artists = useSelector(state => Object.values(state.artists))
    const dispatch = useDispatch()
    useEffect(async () => {
        const songs = await dispatch(songActions.getSongs())
        setQ({...songs, currentSong: null})    }, [dispatch])

    const allSongs = useSelector(state => (state.songs))


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
                            <div className = 'single_artist'>
                                <a href = {`artists/${artist.id}`} className = 'single__artist'>
                                    <img className='single_img' alt = 'artistimg' src = {artist.img}></img>
                                    <div className ='artistname'>{artist.name}</div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className = 'content__header'> Browse Today's Hits </div>
                    <Song q={q} setQ={setQ} allSongs={allSongs} />
                </div>
        </div>
    )
}

export default Home
