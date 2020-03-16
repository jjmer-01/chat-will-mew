import axios from 'axios'

const initialState = {
    rooms: [],
    loading: false,
    error: false,
    errorMessage: ''
}

const GET_ROOMS = 'GET_ROOMS'


//action creator
export function getRooms(user_id) {
    let action = {
        type: GET_ROOMS,
        payload: axios.get(`/api/room/${user_id}`)
    }
    return action
}



export default function roomReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ROOMS + "_PENDING":
            return {...state, loading: true, error: false}
        case GET_ROOMS + "_FULFILLED":
            return {...state, rooms: action.payload.data, loading: false}
        case GET_ROOMS + "_REJECTED":  
            return {...state, ...initialState}
        default:
            return {...state}
    }
}