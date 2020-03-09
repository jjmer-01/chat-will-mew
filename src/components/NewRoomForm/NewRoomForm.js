import React, { Component } from 'react'
import Select from 'react-select'

import './NewRoomForm.css'
import axios from 'axios'

class NewRoomForm extends Component {
    constructor() {
        super()
        this.state = {
            room_title: "",
            room_description: "",
            isVisible: false,
            multiValue: null,
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
        this.setState(state => {
            return{
                multiValue: option
            } 
        })
    }


    handleCreateRoom = () => { 
        let user_id = this.state.multiValue.map(e => e.user_id)
        // console.log(this.state.room_title, this.state.room_description)
        console.log(`hit multivalue ${this.state.multiValue}`)
        axios.post('/api/room', {
            room_title: this.state.room_title,
            room_description: this.state.room_description,
            user_id: user_id
        })
        .then(res => {
            console.log(res.data)
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
                    onClick={() => this.handleCreateRoom()}>Create Room</button>
            </div>
        )
    }
}

export default NewRoomForm