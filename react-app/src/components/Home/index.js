import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Song from '../Song'
import Artists from '../Artists'
import './Home.css'
import * as songActions from '../../store/songs'

const Home = ({q, setQ}) => {

    // const artists = useSelector(state => Object.values(state.artists))
    // const songs = useSelector(state => Object.values)
    const dispatch = useDispatch()
    useEffect(async () => {
        const songs = await dispatch(songActions.getSongs())
        setQ({...songs, currentSong: null})
    }, [dispatch])

    const allSongs = useSelector(state => (state.songs))


    return (

        <div className = 'container'>
                <div className = 'artist__container'>
                    <div className = 'artist__header'> Check out your favorite artists
                    </div>
                        <Artists/>
                </div>
                <div className = 'content__header'> Browse Today's Hits </div>
                    <Song q={q} setQ={setQ} allSongs={allSongs} />
        </div>
    )
}

export default Home
