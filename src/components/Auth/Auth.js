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
            password: "",
            toggleRegister: false,
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleLogin = () => {
        axios.post('api/login', {
            username: this.state.username,
            password: this.state.password})
            .then(res => {
                this.props.getUser(res.data)
                this.props.history.push('/landing')
            })
            .catch(err => console.log(err))
    }

    // toggleRegister = (e) => {

    // }
    

    render() {
        return (
        <div>
            <h1>AhnChat</h1>
            <input 
                className="auth-in"
                placeholder="email"
                name="" />
            <br />
            <input 
                className="auth-in"
                placeholder="password"
                name="" />
            <br />
            <button
                onClick={this.handleLogin}>
                Login
                </button>
            <button>
                <Link to="/register">Register</Link> 
                </button>
            <p>...a harmless, necessary chat.</p>
        </div>
        )
    }
}

export default Auth
// export default connect(null, {getUser}) (withRouter(Auth))