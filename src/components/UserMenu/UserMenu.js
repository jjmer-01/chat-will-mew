import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getUser, logout } from '../../ducks/userReducer'

import './UserMenu.css'

function UserMenu(props) {

    console.log('hit props UserMenu', props)
    return (
        <div className='user-menu-comp'>
            <p>{props.userReducer.user.first_name} {props.userReducer.user.last_name}</p>
            
            <button onClick={() => {props.logout()}}> 
                <Link to='/'>Logout</Link>
            </button>
                
        </div>
    )
}



const mapStateToProps = reduxState => {
    return {
        userReducer: reduxState.userReducer
    }
}

export default withRouter(connect(mapStateToProps, { getUser, logout })(UserMenu))