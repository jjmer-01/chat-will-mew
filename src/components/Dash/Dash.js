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
                                <h2 className="h2-high-contrast">Join a Conversation</h2>
                            </div>
                        )}
                    />
            </div>
        )
    }
}

export default Dash