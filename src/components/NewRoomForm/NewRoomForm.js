import React, { Component } from 'react'
import Select from 'react-select'


class NewRoomForm extends Component {
    constructor() {
        super()
        this.state = {
            room_title: "",
            room_description: "",
            isVisible: false,
            filterOptions: [
                {name: "foo", label: "Foo"},
                {name: "bar", label: "Bar"}, 
                {name: "beb", label: "Beb"}
            ]
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleMultiChange = (option) => {
        this.setState({
            multiValue: option
        })
    }

    render() {
        return (
            <div>
                    <div className="newrm-form">
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
                        multi />
                <button>Create Room</button>
            </div>
        )
    }
}

export default NewRoomForm