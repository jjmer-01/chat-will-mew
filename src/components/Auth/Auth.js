import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import {getUser} from '../../ducks/userReducer'
// import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'


class Auth extends Component {
    constructor() {
        super()
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
        axios.post('api/login', {
            user_name: this.state.username,
            password: this.state.password})
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
                name=""
                type="email" />
            <br />
            <input 
                className="auth-in"
                placeholder="password"
                name=""
                type="password" />
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

export default Auth
// export default connect(null, {getUser}) (withRouter(Auth))