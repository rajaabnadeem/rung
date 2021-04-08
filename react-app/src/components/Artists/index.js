import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as artistActions from '../../store/artists'
import './Artists.css'

const Artists = () => {

    const state = useSelector(state => Object.values(state.artists))
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(artistPageActions.getArtistSongs(artist_id))
        dispatch(artistActions.getAllArtists())
    }, [dispatch])



    return (
        <div className = 'artists__container'>
            { state.map(artist => (
                <div className = 'single_artist__container'>
                    <a className = 'artist__banner' href = {`artists/${artist.id}`}>
                        <img  alt= 'artist_banner' className ="banner__img" src = {artist.banner} />{artist.name}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Artists
