import React, {Component} from 'react'
import Message from '../Message/Message'
import io from 'socket.io-client'

import './ChatRoom.css'

class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskVisible: false,
            chatVisible: false,
            message_text: '',
            user_id: 3,
            room_id: null,
            ts_added: null,
            ts_edited: null,
            is_task: false,
            assigned_to: null,
            due_date: null,
            is_complete: false,
            messages: [],
            room: {}
        }
    }

    componentDidMount = () => {
        this.socket = io()
        this.socket.emit('join room', {room_id: this.props.match.params.room}) //room variable is declared at the end of route(routes.js file)
        this.socket.on('room joined', data => {
            this.setState({
                room_id: data.room.room_id,
                room: data.room,
                messages: data.chats
                })
        })
        // this.socket.on('chat dispatched', data => {
        //     this.setState({messages: [data.chats]})
        // })
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

    handleChange = (trg) => { //passing target instead of event
        this.setState({
            [trg.name]: trg.value
        })
    }

    // submitMessage = () => {
    //     this.socket = io('')
    // }

    render() {
        console.log(this.state, this.props.match.params)
        // console.log(this.props.match.params) //where your room is getting passed in through
        return (
        <div className="chat-room-comp">
        <h2>{this.state.room.room_title}</h2>
            {this.state.messages.map((mess) => {
                return <Message
                mess={mess} />
            })}
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
                        name="message_text" 
                        value={this.state.message_text}
                        placeholder="chat text"
                        type="textarea"
                        onChange={(e) => this.handleChange(e.target)} />
                    <button>Submit</button>
                    </>
                }
            </div>
            

        </div>
        )
    }  
}

export default ChatRoom