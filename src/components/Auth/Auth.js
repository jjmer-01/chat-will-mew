import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {getUser} from '../../ducks/userReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


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
        <div>
            <h1>ahnChat</h1>
            <p>...a harmless, necessary chat.</p>
            <input 
                className="auth-in"
                placeholder="email"
                name="user_email"
                type="email"
                onChange={this.handleInput} />
            <br />
            <input 
                className="auth-in"
                placeholder="password"
                name="password"
                type="password"
                onChange={(e) =>{this.handleInput(e)}} />
            <br />
            <button
                onClick={this.handleLogin}>
                Login
                </button>
            <p>Register here if you don't have an account:</p>
            
                <Link to="/register">
                    <button>
                    Register
                    </button>
                    </Link> 
        </div>
        )
    }
}

// export default Auth
export default connect(null, {getUser}) (withRouter(Auth))