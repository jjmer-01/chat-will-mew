import React, {Component} from 'react'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            user_email: "",
            password: "",
            toggleRegister: true,
        }
    }

    toggleLogin = (e) => {

    }

    render() {
        return (
            <div>
            <h1>AhnChat</h1>
            <input
                className="auth-in"
                placeholder="first name"
                name="" />
            <br />
            <input
                className="auth-in"
                placeholder="last name"
                name="" />
            <br />
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
            <button>
                Login
                </button>
            <button>
                Register
                </button>
            <p>...a harmless, necessary chat.</p>
        </div>
        )
    }
     
}

export default Register