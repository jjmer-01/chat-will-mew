import React, {Component} from 'react'
import Message from '../Message/Message'

class ChatRoom extends Component {

    render() {
        return (
        <div>
            ChatRoom.js
            <Message />
            <button>New Task</button>
            <input
                placeholder="task"
                type="textarea" />
            <input
                placeholder="due date" />
            <button>New Chat</button>
            <input
                placeholder="chat text"
                type="textarea" />

        </div>
        )
    }
    
}

export default ChatRoom