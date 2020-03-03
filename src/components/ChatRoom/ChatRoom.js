import React, {Component} from 'react'
import Message from '../Message/Message'

class ChatRoom extends Component {

    render() {
        return (
        <div>
            ChatRoom.js
            <Message />
            <button>New Task</button>
            <button>New Chat</button>

        </div>
        )
    }
    
}

export default ChatRoom