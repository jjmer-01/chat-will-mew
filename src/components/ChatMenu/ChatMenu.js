import React, {Component} from 'react'

import NewRoomForm from '../NewRoomForm/NewRoomForm'

class ChatMenu extends Component {
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
            <div className="hide-menu" id="chat-menu">
            <div>
                <input 
                    placeholder="Search Threads & Direct Messages" />
                <button>Search</button>
                <br />
                <button>My Tasks</button>
                <p>My Rooms</p>
                <p>Direct Messages</p>
                </div>
            <button 
                className="hide-menu" 
                id="show-newrm-toggle"
                onClick={this.toggleVisible}>
                New Room
                </button>
                <div>
                    { this.state.isVisible === false ? null : <NewRoomForm /> }
                </div>
        </div> 
        )
    }
    
}

export default ChatMenu