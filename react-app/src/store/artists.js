const LOAD_ARTISTS = 'song/loadArtists'

export const loadSongs = (artists) => ({
    type: LOAD_ARTISTS,
    payload: artists,
})

export const getArtists = () => async (dispatch) => {
    const response = await fetch('/api/artists/')
    const data = await response.json()
    dispatch(loadSongs(data))

}

const initialState = {}


const artistsReducer = (state = initialState, action) => {
        switch (action.type) {
            case LOAD_ARTISTS:
                return  { ...state, ...action.payload }
            default:
                return state
        }
    }


export default artistsReducer
