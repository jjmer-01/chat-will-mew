import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {

    return (
        <div>
            <button>Chat Menu</button>
            <h1>ahnChat</h1>
            <Link to="/usermenu">
                <button>User Profile</button>
            </Link>  
        </div>
    )
}

export default Nav