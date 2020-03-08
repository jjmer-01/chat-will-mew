import React, { Component } from 'react'
import Select from 'react-select'

import './NewRoomForm.css'

class NewRoomForm extends Component {
    constructor() {
        super()
        this.state = {
            room_title: "",
            room_description: "",
            isVisible: false,
            multiValue: null,
            filterOptions: [
                {value: "foo", label: "Foo"},
                {value: "bar", label: "Bar"}, 
                {value: "beb", label: "Beb"}
            ]
        }
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

    render() {
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
                    <Select 
                        name="filters"
                        placeholder="Select Room Members"
                        value={this.state.multiValue}
                        options={this.state.filterOptions}
                        onChange={this.handleMultiChange}
                        isMulti="true"
                        multi />
                <button>Create Room</button>
            </div>
        )
    }
}

export default NewRoomForm