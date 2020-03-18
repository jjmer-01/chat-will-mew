import React, {Component} from 'react'
import { connect } from 'react-redux';
import { getRooms } from '../../ducks/roomReducer'
import { Link } from 'react-router-dom'
import axios from 'axios'

import NewRoomForm from '../NewRoomForm/NewRoomForm'
import './ChatMenu.css'


class ChatMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            search_text: '',
            filteredRooms: [],
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

    handleSearchInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSearch = () => {
        const search_text = this.state.search_text
        axios.get(`/api/filteredRooms?search_text=${search_text}`)
        .then( res => {
            this.setState({
                filteredRooms: res.data, 
                search_text: ''
            })
            // console.log(this.state.search_text)
        })
    }

    render() {

        return (
            <div className="chat-menu-comp hide-menu" id="chat-menu">
                <div>
                    <input 
                        placeholder="Search Threads & Direct Messages"
                        name="search_text"
                        value={this.state.search_text}
                        onChange={(e) => this.handleSearchInput(e)} />
                    <button
                        onClick={this.handleSearch}>Search</button>
                    <ul>
                    {this.state.filteredRooms.map(filteredRooms => {
                            // console.log(this.props.roomReducer)
                            return (
                                <Link to={`/chatroom/${filteredRooms.room_id}`}>
                                <div key={filteredRooms.room_id} className="rooms-list"> 
                                    <li>{filteredRooms.room_title}</li>
                                </div>
                                </Link>
                            )
                        })}
                    </ul>
                        <br />
                    <button>My Tasks</button>
                        <h2>My Rooms</h2>
                    <ul>
                        {this.props.rooms.map(rooms => {
                            // console.log('hit this.props.rooms', this.props.rooms)
                            return (
                                <Link to={`/chatroom/${rooms.room_id}`}>
                                <div key={rooms.room_id} className="rooms-list"> 
                                    <li>{rooms.room_title}</li>
                                </div>
                                </Link>
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