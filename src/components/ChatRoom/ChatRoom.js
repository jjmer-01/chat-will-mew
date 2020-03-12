import React, {Component} from 'react'
import Message from '../Message/Message'

import './ChatRoom.css'

class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskVisible: false,
            chatVisible: false,
        }
    }

    toggleTaskVisible = () => {
        this.setState({
            taskVisible: !this.state.taskVisible,
        })
    }

    toggleChatVisible = () => {
        this.setState({
            chatVisible: !this.state.chatVisible,
        })
    }

    render() {
        return (
        <div className="chat-room-comp">
        <h2>Room Title</h2>
            <Message />
            <button
                onClick={this.toggleTaskVisible}>
                NEW TASK
                </button>
            <div>
                {this.state.taskVisible === false ? null :
                    <>
                    <input
                        type="date"
                        placeholder="task due date" />
                    <input
                        type="text"
                        placeholder="Assigned To Search Placeholder" />
                    <input
                        placeholder="task"
                        type="textarea" />
                    <button>Submit</button>
                    </>
                }
            </div>
            <button
                onClick={this.toggleChatVisible}>
                NEW CHAT
                </button>
            <div>
                {this.state.chatVisible === false ? null :
                    <>
                    <input
                        placeholder="chat text"
                        type="textarea" />
                    <button>Submit</button>
                    </>
                }
            </div>
            

        </div>
        )
    }  
}

export default ChatRoom