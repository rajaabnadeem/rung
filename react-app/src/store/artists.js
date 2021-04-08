const LOAD_ARTISTS = 'artist/loadArtists'
const LOAD_ARTIST_DATA = 'artist/loadArtistData'

export const loadArtists = (artists) => ({
    type: LOAD_ARTISTS,
    artists,
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

export const getArtistData = ({artist_id}) => async (dispatch) => {
    const response = await fetch(`/api/artists/${artist_id}`)
    const data = await response.json()
    dispatch (loadArtistData(data))
}

const initialState = {}

const artistsReducer = (state = initialState, action) => {
        switch (action.type) {
            case LOAD_ARTISTS:
                return  { ...state, ...action.artists }
            case LOAD_ARTIST_DATA:
                return { ...state,  ...action.artistData }
            default:
                return state
        }
    }


export default artistsReducer
