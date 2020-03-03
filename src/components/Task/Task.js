import React, {Component} from 'react'

class Task extends Component {

    render() {
        return (
            <div>
                Task.js
                <input type="checkbox" />
                <p>User image: Assigner</p>
                <h3>Assigner first name and last name</h3>
                <p>User image: Assigned To</p>
                <h3>Assigned To first name and last name</h3>
                <p>Task Timestamp</p>
                <p>Task Text</p>
                <p>Due Date</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
   
}

export default Task