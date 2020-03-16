import React, {Component} from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { getUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'

import './Register.css'


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
            <div className="reg-comp">
            <h1>ahnChat</h1>
            <h2>a harmless, necessary chat</h2>
            <div className="reg-form">
                <label htmlFor="user_email">EMAIL:&nbsp; 
                <input 
                    className="auth-in"
                    placeholder="email"
                    name="user_email"
                    type="email"
                    required
                    onChange={this.handleInput} />
                    </label>
                <label htmlFor="first_name">FIRST NAME:&nbsp; 
                <input
                    className="auth-in"
                    placeholder="first name"
                    name="first_name"
                    required
                    onChange={this.handleInput} />
                    </label>
                <label htmlFor="last_name">LAST NAME:&nbsp; 
                <input
                    className="auth-in"
                    placeholder="last name"
                    name="last_name"
                    required
                    onChange={this.handleInput} />
                    </label>
                    
                <label htmlFor="user_title">TITLE:&nbsp; 
                <input
                    className="auth-in"
                    placeholder="title (optional)"
                    name="user_title"
                    onChange={this.handleInput} />
                    </label>
                <label htmlFor="password">PASSWORD:&nbsp; 
                <input 
                    className="auth-in"
                    placeholder="password"
                    name="password"
                    type="password"
                    required
                    onChange={(e) => {this.handleInput(e)}} />
                    </label>
                
                <button
                    onClick={this.handleRegister}>
                    REGISTER
                    </button>
                <Link to="/">
                    <button>
                    LOGIN
                    </button>
                    </Link>           
            </div>
        </div>
        )
    }
     
}

export default connect(null, { getUser }) (withRouter(Register))
// export default Register