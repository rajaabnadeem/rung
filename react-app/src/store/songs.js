const LOAD_SONGS = 'song/loadSongs'

export const loadSongs = (songs) => ({
    type: LOAD_SONGS,
    payload: songs,
})

export const getSongs = () => async (dispatch) => {
    const response = await fetch('/api/songs/')
    const data = await response.json()
    dispatch(loadSongs(data))
    return data
}

const initialState = {}


const songsReducer = (state = initialState, action) => {
        switch (action.type) {
            case LOAD_SONGS:
                return  { ...state, ...action.payload }
            default:
                return state
        }
    }


export default songsReducer
