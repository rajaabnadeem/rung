import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import * as artistPageActions from '../../store/artists'
import Song from '../Song'
import './ArtistPage.css'
import * as songActions from '../../store/songs'


const ArtistPage = ({q, setQ}) => {

    const dispatch = useDispatch()
    const artist_id = useParams()
    const artist = useSelector(state => state?.artists?.artist)
    const songs = useSelector(state => state?.artists?.artist?.songs)

  // useEffect(async () => {
  //       await dispatch(artistPageActions.getArtistData(artist_id))
  //       setQ({...songs, artist_name:artist.name, currentSong: null})
  //       dispatch(songActions.getSongs())
  //       dispatch(artistPageActions.getAllArtists())
  //   }, [dispatch])

    useEffect(async () => {
      const {songs, artist_name} = await dispatch(artistPageActions.getArtistData(artist_id))
      setQ({...songs, artist_name, currentSong: null})
      dispatch(artistPageActions.getAllArtists())
      dispatch(songActions.getSongs())
  }, [dispatch])

    return (

    <div className = 'artistpage__container'>
      <div className = 'artistpage__header'>
          <img alt='artistimg' className = 'artistpage__banner' src={artist.banner}></img>
        <div className='artistpage__name_bio'>
          <div className='artistpage_name'>{artist?.name}</div>
          <div className='artistpage_bio'>{artist?.bio}</div>
        </div>
      </div>
      <div className='discography'>Discography</div>
    {songs &&
      <Song q={q} setQ ={setQ} allSongs={songs} />}
    </div>
    )
}

export default ArtistPage
