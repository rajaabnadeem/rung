import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import * as artistPageActions from '../../store/artists'

import './ArtistPage.css'

const ArtistPage = () => {

    const dispatch = useDispatch()
    const artist_id = useParams()

    useEffect(() => {
        dispatch(artistPageActions.getArtistSongs(artist_id))
    }, [])

    return (
      <h1> HELLO </h1>
    )
}

export default ArtistPage
