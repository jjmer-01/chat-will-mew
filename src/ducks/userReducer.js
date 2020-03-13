import axios from 'axios'

const initialState = {
    user: {
        user: {},
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
    console.log(userObj)
    return {
        type: GET_USER,
        payload: userObj
    }
}


export function logout() {
    let action = {
        type: LOGOUT,
        payload: axios.post('/api/logout') 
    }
    return action
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
    
        case LOGOUT + '_PENDING':
            return {...state, }
        case LOGOUT + '_FULFILLED':
            return {...initialState, error: false}
        case LOGOUT + '_REJECTED':
            return {...state, loading: false, error: true, errorMessage: action.payload.response.data}
        default:
            return state
    }
}