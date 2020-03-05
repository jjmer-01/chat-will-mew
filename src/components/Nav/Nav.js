import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {

    return (
        <div className="nav-js">
            <button id="show-menu-toggle">
                Rooms
                </button>
            <div className="chat-menu">
                <div>
                    
                </div>
                <button id="show-newrm-toggle">
                    New Room
                    </button>
                </div>
            
            <h1>ahnChat</h1>
            
            <Link to="/usermenu">
                <button>My Profile</button>
                </Link>
        </div>
    )
}

export default Nav