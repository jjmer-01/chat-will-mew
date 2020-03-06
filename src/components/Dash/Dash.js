import React, {Component} from 'react'
//put axios session request in here and not in redux

import {Switch, Route} from 'react-router-dom'
import ChatRoom from '../ChatRoom/ChatRoom'
import TaskRoom from '../TaskRoom/TaskRoom'
import UserMenu from '../UserMenu/UserMenu'


class Dash extends Component {

    // componentDidMount

    render() {
        return (   
            <div>
                <Switch>
                    <Route path="/chatroom/:room" component={ChatRoom} />
                    <Route path="/taskroom" component={TaskRoom} />
                    <Route path="/usermenu" component={UserMenu} />
                    <Route path="/dash"
                        render={() => (
                            <div>
                                <h2>Join a Conversation</h2>
                            </div>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

export default Dash