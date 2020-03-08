import axios from 'axios'

const initialState = {
    user: {
        user_id: null,
        user_email: null,
        first_name: '',
        last_name: '',
        user_title: '',
        loading: false,
        error: false,
        errorMessage: '',
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
    let action = {
        type: LOGOUT,
        payload: axios.post('api/logout') 
        //Where to put the .then to redirect to '/' ?
    }
    return action
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
        case LOGOUT + '_PENDING':
            return {...state, }
        case LOGOUT + '_FULFILLED':
            return {}
        default:
            return state
    }
}