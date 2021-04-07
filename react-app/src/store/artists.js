const LOAD_ARTISTS = 'artist/loadArtists'
const LOAD_ARTIST_SONGS = 'artist/loadArtistSongs'
const LOAD_ARTIST_DATA = 'artist/loadArtistData'

export const loadArtists = (artists) => ({
    type: LOAD_ARTISTS,
    artists,
})

export const loadArtistSongs = (artistSongs) => ({
    type: LOAD_ARTIST_SONGS,
    artistSongs,
})

export const loadArtistData = (artistData) => ({
    type: LOAD_ARTIST_DATA,
    artistData
})

export const getAllArtists = () => async (dispatch) => {
    const response = await fetch('/api/artists/')
    const data = await response.json()
    dispatch(loadArtists(data))
}

export const getArtistSongs = ({artist_id}) => async (dispatch) => {
    const response = await fetch(`/api/artists/${artist_id}/songs`)
    const data = await response.json()
    dispatch (loadArtistSongs(data))
}

export const getArtistData = ({artist_id}) => async (dispatch) => {
    const response = await fetch(`/api/artists/${artist_id}`)
    const data = await response.json()
    dispatch (loadArtistData(data))
}

const initialState = {}

const artistsReducer = (state = initialState, action) => {
        switch (action.type) {
            case LOAD_ARTISTS:
                return  { ...state, allArtists: action.artists }
            case LOAD_ARTIST_SONGS:
                return { ...state, songs: action.artistSongs }
            case LOAD_ARTIST_DATA:
                return { ...state, artistData: action.artistData}
            default:
                return state
        }
    }


export default artistsReducer
