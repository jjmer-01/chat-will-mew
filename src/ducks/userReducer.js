// import axios from 'axios'

const initialState = {
    user: {
        id: null,
        user_email: '',
        first_name: '',
        last_name: '',
        user_title: '',
    }
    
}

//get user off session
const GET_USER = 'GET_USER'
//get user from session
const LOGOUT = 'LOGOUT'

export function getUser(userObj) {
    return {
        type: GET_USER,
        payload: userObj
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: null
    }
}


export default function userReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_USER:
            return {...state,
                user: {
                    id: payload.user_id, 
                    user_email: payload.user_email, 
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                    user_title: payload.user_title,
                }
            }
        case LOGOUT:
            return {...state, user_email: {}}
        default:
            return state
    }
}