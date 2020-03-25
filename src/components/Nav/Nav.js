import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        console.log('hit')
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
                <div className="nav-option-container">
                <div className="nav-options">
                    <div className="show-menu-toggle chat-menu-icon"
                        onClick={this.toggleCmenuVisible}>
                        <i className="fas fa-bars fa-lg"></i>
                        </div> 
                    <div className="chat-room-container">
                        {this.state.isVisible === false 
                        ? null 
                        : <ChatMenu
                            cMenuVisible = {this.props.isVisible}
                            toggleCmenuVisible = {this.toggleCmenuVisible} />}
                    </div>       
                </div>

                <div className="nav-options">
                <Link 
                    className="dash-header"
                    to={'/dash'}>
                    <h1>aC</h1>
                    </Link>
                </div>
                
                <div className="nav-options">
                    <div className="show-menu-toggle user-menu-icon"
                        onClick={this.toggleUmenuVisible}>
                        <i className="far fa-user-circle fa-lg"></i>
                    </div>
                    <div className='user-menu-container'>
                        {this.state.isntVisible === false 
                        ? null 
                        : <UserMenu />}
                    </div>
                </div>  
                </div>
                
            </div>
        )
    }
    
}

export default Nav

