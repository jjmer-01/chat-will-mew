import React, { Component } from 'react'
import Select from 'react-select'
import { classNamePrefix } from 'react-select'
import { withRouter, Redirect } from 'react-router-dom'

// import { getUser } from '../../ducks/userReducer'
// import { connect } from 'react-redux'

import './NewRoomForm.css'
import axios from 'axios'

class NewRoomForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room_title: "",
            room_description: "",
            room_id: null,
            isVisible: false,
            multiValue: [],
            //only strings of names
            filterOptions: [],
            //objects with names, titles, and id
            userData: [],
            redirect: false,
            newRoomId: null
        }
    }

    componentDidMount = () => {
        this.getUsers()
    }

    getUsers = () => { // getts all user and adds names to multi-select tool
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
        console.log(this.state.multiValue)
        this.state.multiValue.push(option)
    }


    handleCreateRoom = (props) => { 
        let users = this.state.multiValue[this.state.multiValue.length - 1]
        // ((user, i) => user.user_id)
        console.log()
        // console.log(this.state.room_title, this.state.room_description)
        console.log(`hit multivalue ${this.state.multiValue}`)

        return axios.post('/api/room', {
            room_title: this.state.room_title,
            room_description: this.state.room_description,
            user_id: users.map(e => e.value.user_id)
        })
        .then(res => {
            console.log(res.data)
            this.setState({newRoomId: res.data.room_id, redirect: true})
        })
    }

    render() {
        // console.log(this.state)
        // console.log(this.props)

        //if redirect is true, you get redirected to the room you just created (needed redirect and newRoomId and to import <Redirect />.)
        if(this.state.redirect) {
            return <Redirect 
                        to={{pathname: `/chatroom/${this.state.newRoomId}`}}
                        /> 
        }
        return (
            <div className="newrm-form">
                    <div className="newrm-inputs">
                        <input 
                            placeholder="Room Name"
                            name="room_title"
                            onChange={this.handleInput} />
                        <br />
                        <input 
                            placeholder="Room Description"
                            name="room_description"
                            onChange={this.handleInput} />
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