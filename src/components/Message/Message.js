import React, {Component} from 'react'

class Message extends Component {

    render() {
        return (
            <div>
                Message.js
                <p>User image</p>
                <h3>User first name and last name</h3>
                <p>Message Timestamp</p>
                <p>Message Text</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
    
}

export default Message