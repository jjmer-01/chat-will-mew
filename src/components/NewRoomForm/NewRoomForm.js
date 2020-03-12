import React, { Component } from 'react'
import Select from 'react-select'
import { Link, withRouter } from 'react-router'
import { getUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'

import './NewRoomForm.css'
import axios from 'axios'

class NewRoomForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room_title: "",
            room_description: "",
            isVisible: false,
            multiValue: [],
            //only strings of names
            filterOptions: [],
            //objects with names, titles, and id
            userData: []
        }
    }

    componentDidMount = () => {
        this.getUsers()
    }

    getUsers = () => {
        axios.get('/api/users')
        .then(res => {this.setState({ 
            filterOptions: res.data.map(e=>({
                label: `${e.first_name} ${e.last_name}, ${e.user_title}`, 
                value: e
                }))}
            )})
        .catch( err => console.log(err))
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleMultiChange = (option) => {
        this.state.multiValue.push(option)
    }


    handleCreateRoom = (props) => { 
        let users = this.state.multiValue
        // ((user, i) => user.user_id)
        
        // console.log(this.state.room_title, this.state.room_description)
        console.log(`hit multivalue ${this.state.multiValue}`)
        axios.post('/api/room', {
            room_title: this.state.room_title,
            room_description: this.state.room_description,
            user_id: users
        })
        .then(res => {
            //what do you want to have happen once the chat room is created? You can push to the route and go into the room, or give the user a success message
            // console.log(res.data)
            this.props.history.push(`/chatroom/${res.data.room_id}`)
            // console.log(this.props.history)
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="newrm-form">
                    <div className="newrm-inputs">
                        <input 
                            placeholder="Room Name"
                            name="Room Name" />
                        <br />
                        <input 
                            placeholder="Room Description"
                            name="Room Name" />
                    </div>
                    <div className="react-select-container">
                        <Select
                            name="filters"
                            key={this.state.user_id}
                            placeholder="Select Room Members"
                            multiValue={this.state.multiValue} 
                            options={this.state.filterOptions}
                            onChange={this.handleMultiChange}
                            isMulti={true}
                            multi />
                    </div>
                    
                <button
                    onClick={() => this.handleCreateRoom(this.props)}>Create Room</button>
            </div>
        )
    }
}

export default withRouter(NewRoomForm)