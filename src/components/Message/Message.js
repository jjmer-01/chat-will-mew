import React, {Component} from 'react'

function Message(props) {
    const {first_name, last_name} = props.mess

        return (
            <div>
                Message.js
                <p>User image</p>
                    <h3>{first_name} {last_name}</h3>
                <p>Message Timestamp</p>
                <p>Message Text</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    
}

export default Message