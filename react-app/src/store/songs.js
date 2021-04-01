const LOAD_SONGS = 'song/loadSongs'

export const loadSongs = (songs) => ({
    type: LOAD_SONGS,
    payload: songs,
})

export const getSongs = () => async (dispatch) => {
    const response = await fetch('/api/songs')
    const data = await response.json()
    console.log('=============')
    console.log(data)
    dispatch(loadSongs(data))
    return data
}

const initialState = {}


const songsReducer = (state = initialState, action) => {
    // console.log('============')
    // console.log(action, state)
    // let newState = JSON.parse(JSON.stringify(state))
    // console.log('============')
    // console.log('============', action)
        switch (action.type) {
            case LOAD_SONGS:
                // for (let song in action.payload) {
                //     newState[song.id] = song
                // }
                // return newState
                return  { ...state, ...{ songs: action.payload }}
            default:
                return state
        }
    }


export default songsReducer
