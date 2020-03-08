import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import ChatMenu from '../ChatMenu/ChatMenu'
import UserMenu from '../UserMenu/UserMenu'

import './Nav.css'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            isVisible: false,
            isntVisible: false,
        }
    }

    toggleCmenuVisible = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

    toggleUmenuVisible = () => {
        this.setState({
            isntVisible: !this.state.isntVisible,
        })
    }

    render() {
        return (
            <div className="nav-comp">
                <div>
                    <button 
                        className="show-menu-toggle"
                        onClick={this.toggleCmenuVisible}>
                        Chat Menu
                        </button>
                    <div>
                        {this.state.isVisible === false ? null : <ChatMenu />}
                        </div>
                        </div>
                

                <h1>ahnChat</h1>

                <div>
                    <button
                        className="show-menu-toggle"
                        onClick={this.toggleUmenuVisible}>
                        My Profile
                        </button>
                    <div>
                        {this.state.isntVisible === false ? null : <UserMenu />}
                        </div>
                        </div>
                
                
            </div>
        )
    }
    
}

export default Nav

