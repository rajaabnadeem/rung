import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import * as artistPageActions from '../../store/artists'

import './ArtistPage.css'

const ArtistPage = ({}) => {

    const dispatch = useDispatch()
    const artist_id = useParams()

    useEffect(() => {
        dispatch(artistPageActions.getArtistSongs(artist_id))
        dispatch(artistPageActions.getArtistData(artist_id))
    }, [])

    const artist = useSelector(state => (state?.artists?.artistData))
    console.log('artist:', artist)
    return (
      <div>
        {/* {artist.name} */}
        {/* <div>{artist.artistData.name}</div> */}

      </div>
      // <div>{artist}</div>
    )
}

export default ArtistPage
