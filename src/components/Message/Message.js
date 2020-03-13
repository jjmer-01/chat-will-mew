import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

function Message(props) {

    const {first_name, last_name, message_text} = props.mess
    const [message, setMessage] = useState()

    // useEffect is like componentDidMount, componentDidUpdate, & componentWillUnmount combined

        return (
            <div>
                <p>User image</p>
                <h3>{first_name} {last_name}</h3>
                <p>{message_text}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    
}

export default Message