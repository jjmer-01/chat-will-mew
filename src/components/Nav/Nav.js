import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ChatMenu from '../ChatMenu/ChatMenu'

import './Nav.css'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            isVisible: false,
        }
    }

    toggleVisible = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

    render() {
        return (
            <div className="nav-js">
                <button 
                id="show-menu-toggle"
                onClick={this.toggleVisible}>
                    Chat Menu
                    </button>
                <div>
                    {this.state.isVisible === false ? null : <ChatMenu />}
                </div>

                <h1>ahnChat</h1>
                <Link to="/usermenu">
                    <button>My Profile</button>
                    </Link>
            </div>
        )
    }
    
}

export default Nav

