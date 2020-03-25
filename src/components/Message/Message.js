import React, { Component } from 'react'
// import io from 'socket.io-client'
import { getUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'

import './Message.css'

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            edited_message_text: '',
        }
    }

    showEditInput = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleEdit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitEdit = async () => {
        await this.props.socket.emit('edit message', {
            room_id: +this.props.room_id.room,
            message_id: this.props.message_id,
            user_id: this.props.id,
            message_text: this.state.edited_message_text
        })
        this.setState({
            isEditing: !this.state.isEditing,
            edited_message_text: ''
        })
    }

    handleDelete = async () => {
        await this.props.socket.emit('delete message', {
            message_id: this.props.message_id
        })
    }

    //delete function goes here (already have messageID on props)

    render() {
    // console.log(this.props)
    const {first_name, last_name, message_text} = this.props.mess

        return (
            <div className="message-comp">
                {!this.state.isEditing 
                ? 
                <div className="message-display">
                    <h3>{first_name} {last_name}</h3>
                    <span className="messages">
                        <p>{message_text}</p>
                        <div className="edit-icon"
                            onClick={this.showEditInput}>
                            <i className="fas fa-edit"></i>
                            </div>
                        <div className="delete-icon"
                            onClick={this.handleDelete}>
                            <i className="fas fa-trash"></i>
                            </div>
                    </span>
                    
                </div>
                :
                <div className="message-edit">
                    <h3>{first_name} {last_name}</h3>
                    <span className="messages">
                        <input
                            name="edited_message_text"
                            value={this.state.edited_message_text}
                            onChange={(e) => this.handleEdit(e)} />
                        <button
                            onClick={this.showEditInput}>
                            Cancel Edit</button>
                        <button
                            onClick={this.handleSubmitEdit}>Save</button>
                    </span>
                    
                </div>
                }
            
             
            </div>
        )
    }
    
}


    // useEffect like componentDidMount, componentDidUpdate, & componentWillUnmount combined

    const mapStateToProps = reduxState => {
        // console.log(reduxState)
        return {
            id: reduxState.userReducer.user.id
    }}
    
    


export default connect(mapStateToProps, { getUser })(Message)