import axios from 'axios'

const initialState = {
    user: {
        user: {},
        loading: false,
        error: false,
        errorMessage: '',
    }
    
}

const GET_USER = 'GET_USER'
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
        payload: axios.post('/api/logout') 
    }
}


export default function userReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_USER:
            console.log(payload)
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
            return {...initialState, error: false}
        default:
            return state
    }
}