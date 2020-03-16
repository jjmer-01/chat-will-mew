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
                    <div className="show-menu-toggle"
                        onClick={this.toggleCmenuVisible}>
                        <i className="fas fa-bars fa-lg"></i>
                        </div>        
                </div>
                    <div className="chat-room-container">
                        {this.state.isVisible === false ? null : <ChatMenu />}
                        </div>
                

                <h1>ahnChat</h1>

                <div>
                    <div className="show-menu-toggle"
                        onClick={this.toggleUmenuVisible}>
                        <i className="far fa-user-circle fa-lg"></i>
                    </div>
                   
                </div>
                <div>
                        {this.state.isntVisible === false ? null : <UserMenu />}
                        </div>
                
                
            </div>
        )
    }
    
}

export default Nav

