import React, {Component} from 'react'

class ChatMenu extends Component {

    render() {
        return (
            <div>
                ChatMenu.js
                <input placeholder="Search Rooms and Direct Messages" />
                <button>My Tasks</button>
                <h2>My Rooms</h2>
                <button>Create Room</button>
                <h2>Direct Messages</h2>
                <button>New Direct Message</button>
            </div>
        )
    }
    
}

export default ChatMenu