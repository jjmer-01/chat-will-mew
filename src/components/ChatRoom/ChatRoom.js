import React, {Component} from 'react'
import Message from '../Message/Message'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { getUser } from '../../ducks/userReducer'

import './ChatRoom.css'

class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskVisible: false,
            chatVisible: false,
            message_text: '',
            user_id: null,
            room_id: null,
            ts_added: null,
            ts_edited: null,
            is_task: false,
            assigned_to: null,
            due_date: null,
            is_complete: false,
            messages: [],
            room: {},
            
        }
    }

    componentDidMount = () => {
        // console.log('hit data', data)
        this.socket = io()
        this.socket.emit('join room', {room_id: this.props.match.params.room}) //room variable is declared at the end of route(routes.js file)
        this.socket.on('room joined', data => {
            this.setState({
                room_id: data.room.room_id,
                room: data.room,
                messages: data.chats
                })
        })
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

    handleAddMessage = async () => {
        // console.log('handleAddMessage this.state', this.state.value)
       await this.socket.emit('chat sent', {
            room_id: this.props.match.params.room,
            user_id: this.props.id,
            message_text: this.state.message_text,
        })
        this.socket.on('chat dispatched', data => {
            console.log(data)
            this.setState({
                messages: data,
                message_text: ''
            })
        })
        this.forceUpdate()
    }



  

    render() {
        console.log(this.state) // message_text comes from this.state
        // console.log(this.props.match.params) // {room: 7} where your room is getting passed in through
        // console.log(this.props)

        
        return (
        <div className="chat-room-comp">
        <h2>{this.state.room.room_title}</h2>
            {this.state.messages.map((mess) => {
            //    return <h1>{mess.message_text}</h1>
                return <Message
                mess={mess}
                message_id={mess.message_id}
                socket = {this.socket}
                room_id = {this.props.match.params} />
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
                    <button
                        onClick={this.handleAddMessage}
                        >Submit</button>
                    </>
                }
            </div>
            

        </div>
        )
    }  
}

const mapStateToProps = reduxState => {
    // console.log(reduxState)
    return {
        id: reduxState.userReducer.user.id
}}

// const mapDispatchToProps = { //for when you're using multiple reducers
//     getUser
// }


export default connect(mapStateToProps, { getUser })(ChatRoom)