import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import * as artistPageActions from '../../store/artists'

import './ArtistPage.css'

const ArtistPage = () => {

    const dispatch = useDispatch()
    const artist_id = useParams()
    const state = useSelector(state => (state?.artists))


    useEffect(() => {
        dispatch(artistPageActions.getArtistData(artist_id))
    }, [dispatch, artist_id])

    return (
      <>
        <div>HELLO</div>
        <div>{state?.name}</div>
        <div>{state?.songs[23].name}</div>
        {/* <div>{state?.songs[0].name}</div> */}


        {/* <div>{state?.songs}</div> */}
        {/* { state?.songs?.map(song => (
                <div className = 'single__song'>
                    <div className ='id'>{song.id}</div>
                    <div className = 'name'>{song.name}
                    </div>
                    <div className = 'artist'>{song.artist_name}</div>
                    <div className = 'duration'>
                    { Math.floor(song.length / 60) + ': ' +
                     (Math.floor(Math.floor(song.length)) - (Math.floor(song.length / 60)) * 60) }
                </div>
                </div>
            ))} */}
      </>
    )
}

export default ArtistPage
