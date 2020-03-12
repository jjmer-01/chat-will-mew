import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { getUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
// import {withRouter} from 'react-router-dom'

import './Auth.css'


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_email: "",
            password: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleLogin = () => {
        const { user_email, password } = this.state
        axios.post('api/login', {
            user_email,
            password,
        })
        // console.log(`Auth line 31` + res.data)
            .then(res => {
                this.props.getUser(res.data)
                this.props.history.push('/dash')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
        <div className="auth-comp">
            <h1>ahnChat</h1>
            <h2>a harmless, necessary chat</h2>
            <div className="auth-form">
                <label htmlFor="user_email">EMAIL: 
                <input 
                    className="auth-in"
                    placeholder="email"
                    name="user_email"
                    type="email"
                    onChange={this.handleInput} />
                    </label>
                <label htmlFor="password">PASSWORD: 
                <input 
                    className="auth-in"
                    placeholder="password"
                    name="password"
                    type="password"
                    onChange={(e) =>{this.handleInput(e)}} />
                    </label>
                <div className="auth-buttons">
                    <button
                        onClick={this.handleLogin}>
                        LOGIN
                        </button>
                    
                    <Link to="/register">
                            <button>
                            REGISTER
                            </button>
                            </Link> 
                </div>
                
            </div> 
        </div>
        )
    }
}

// export default Auth
export default connect(null, { getUser }) (withRouter(Auth))