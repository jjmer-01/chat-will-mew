import React, {Component} from 'react'
import { connect } from 'react-redux';
import { getRooms } from '../../ducks/roomReducer'

import NewRoomForm from '../NewRoomForm/NewRoomForm'
import './ChatMenu.css'


class ChatMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
        }
    }
    
    componentDidMount() {
        this.props.getRooms(this.props.id)
    }

    toggleVisible = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

    render() {

        return (
            <div className="chat-menu-comp hide-menu" id="chat-menu">
                <div>
                    <input 
                        placeholder="Search Threads & Direct Messages" />
                    <button>Search</button>
                        <br />
                    <button>My Tasks</button>
                        <h2>My Rooms</h2>
                    <ul>
                        {this.props.rooms.map(rooms => {
                            console.log(this.props.roomReducer)
                            return (
                                <div key={rooms.room_id} className="rooms-list"> 
                                    <li>{rooms.room_title}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                    <button 
                        className="hide-menu" 
                        id="show-newrm-toggle"
                        onClick={this.toggleVisible}>
                        New Room
                        </button>
                    <div>
                        { this.state.isVisible === false ? null : <NewRoomForm /> }
                    </div>
        </div> 
        )
    }
    
}

const mapStateToProps = reduxState => ({
    id: reduxState.userReducer.user.id,
    rooms: reduxState.roomReducer.rooms
})

const mapDispatchToProps = {
    getRooms
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMenu)