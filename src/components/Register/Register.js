import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {getUser} from '../../ducks/userReducer'
import {connect} from 'react-redux'
import axios from 'axios'

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
       axios.post('/api/register', {
            user_email: this.state.user_email,   
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            user_title: this.state.user_title,
            password: this.state.password
            })
            .then(res => {
                console.log(res.data)
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
                type="email"
                onChange={this.handleInput} />
            <br />
            <input
                className="auth-in"
                placeholder="first name"
                name=""
                onChange={this.handleInput} />
            <br />
            <input
                className="auth-in"
                placeholder="last name"
                name=""
                onChange={this.handleInput} />
            <br />
            <input
                className="auth-in"
                placeholder="title"
                name=""
                onChange={this.handleInput} />
            <br />
            <input 
                className="auth-in"
                placeholder="password"
                name=""
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

export default connect(null, {getUser})(Register)
// export default Register