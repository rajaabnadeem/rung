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
    // const allArtists = useSelector(state => state?.artists)

    useEffect(async () => {
        const {songs, artist_name} = await dispatch(artistPageActions.getArtistData(artist_id))
        setQ({...songs, artist_name, currentSong: null})
        dispatch(artistPageActions.getAllArtists())
    }, [dispatch])

    return (

    <div>
        <div>HELLO</div>
        <div>{artist?.name}</div>
        <div>
          <img src={artist.banner}></img>
        </div>
        {allSongs &&
          <Song q={q} setQ ={setQ} allSongs={allSongs} />}
          </div>
    )
}

export default ArtistPage
