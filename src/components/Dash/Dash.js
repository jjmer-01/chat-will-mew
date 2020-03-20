import React, {Component} from 'react'
//put axios session request in here and not in redux

import {Switch, Route} from 'react-router-dom'
import ChatRoom from '../ChatRoom/ChatRoom'
import TaskRoom from '../TaskRoom/TaskRoom'
import UserMenu from '../UserMenu/UserMenu'

import './Dash.css'

class Dash extends Component {

    // componentDidMount

    render() {
        return (   
            <div className="dash-comp">
                <Switch>
                    {/* <Route path="/chatroom/:room" component={ChatRoom} /> */}
                    <Route path="/taskroom" component={TaskRoom} />
                    <Route path="/usermenu" component={UserMenu} />
                    <Route path="/dash"
                        render={() => (
                            <div className="dash-comp">
                                <i class="far fa-arrow-alt-circle-up fa-2x"></i>
                                <p>Join a Conversation</p>
                            </div>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

export default Dash