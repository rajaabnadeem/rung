import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import * as artistPageActions from '../../store/artists'
import Song from '../Song'
import './ArtistPage.css'

const ArtistPage = ({q, setQ}) => {

    const dispatch = useDispatch()
    const artist_id = useParams()
    const artist = useSelector(state => (state?.artists))
    const allSongs = useSelector(state =>(state?.artists?.songs))

    useEffect(async () => {
        const {songs, artist_name} = await dispatch(artistPageActions.getArtistData(artist_id))
        setQ({...songs, artist_name, currentSong: null})
    }, [dispatch])

    return (
      <>
        <div>HELLO</div>
        <div>{artist?.name}</div>
        {allSongs &&
          <Song q={q} setQ ={setQ} allSongs={allSongs} />}
      </>
    )
}

export default ArtistPage
