import React, { Component } from 'react'
//put axios session request in here and not in redux

import { Route } from 'react-router-dom'

import './Dash.css'

class Dash extends Component {

    render() {
        return (   
            <div className="dash-comp">
                    <Route path="/dash"
                        render={() => (
                            <div className="dash-comp">
                                <i className="far fa-arrow-alt-circle-up fa-2x"></i>
                                <p>Join a Conversation</p>
                            </div>
                        )}
                    />
            </div>
        )
    }
}

export default Dash