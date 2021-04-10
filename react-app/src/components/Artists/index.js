import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as artistActions from '../../store/artists'
import './Artists.css'

const Artists = () => {
    const state = useSelector(state => Object.values(state.artists))

    // const state = useSelector(state => Object.values(state.artists))
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(artistPageActions.getArtistSongs(artist_id))
        dispatch(artistActions.getAllArtists())
    }, [dispatch])



    return (
        <div className = 'artists_container__left'>
            { state.map(artist => (
                <div className='single_artist__container'>
                    <a className='artist__banner' href={`artists/${artist.id}`}>{artist.name}</a>
                    <div className='imgdiv'>
                        <div>
                            <img  alt='artist_banner' className ="banner__img" src={artist.banner}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Artists
