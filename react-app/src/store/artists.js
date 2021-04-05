const LOAD_ARTISTS = 'artist/loadArtists'
const LOAD_ARTIST_SONGS = 'artist/loadArtistSongs'

export const loadArtists = (artists) => ({
    type: LOAD_ARTISTS,
    payload: artists,
})

export const loadArtistSongs = (artistSongs) => ({
    type: LOAD_ARTIST_SONGS,
    payload: artistSongs
})

export const getArtists = () => async (dispatch) => {
    const response = await fetch('/api/artists/')
    const data = await response.json()
    dispatch(loadArtists(data))
}

export const getArtistSongs = () => async (dispatch) => {
    const response = await fetch(`api/artists/<int:artist_id`)
    const data = await response.json()
    dispatch (loadArtistSongs(data))
}
const initialState = {}


const artistsReducer = (state = initialState, action) => {
        switch (action.type) {
            case LOAD_ARTISTS:
                return  { ...state, ...action.payload }
            case LOAD_ARTIST_SONGS:
                return {...state, ...action.payload}
            default:
                return state
        }
    }


export default artistsReducer
