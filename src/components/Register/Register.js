import React, {Component} from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { getUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            user_email: "",
            password: "",
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleRegister = () => {
        const {user_email, first_name, last_name, user_title, password} = this.state
        axios.post('/api/register', {
            user_email: user_email,   
            first_name: first_name,
            last_name: last_name,
            user_title: user_title,
            password: password
            })
            .then(res => {
                // console.log(res.data)
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
                placeholder="first name"
                name="first_name"
                onChange={this.handleInput} />
            <br />
            <input
                className="auth-in"
                placeholder="last name"
                name="last_name"
                onChange={this.handleInput} />
            <br />
            <input
                className="auth-in"
                placeholder="title"
                name="user_title"
                onChange={this.handleInput} />
            <br />
            <input 
                className="auth-in"
                placeholder="password"
                name="password"
                type="password"
                onChange={(e) => {this.handleInput(e)}} />
            <br />
            <button
                onClick={this.handleRegister}>
                Register
                </button>
            <p>Login here if you have an account:</p>
            <Link to="/">
                <button>
                Login
                </button>
                </Link>            
        </div>
        )
    }
     
}

export default connect(null, { getUser }) (withRouter(Register))
// export default Register