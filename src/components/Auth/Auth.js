import React, {Component} from 'react'

class Auth extends Component {

    render(){
        return (
        <div>
            Auth.js
            <h1>chatWillMew</h1>
            <h2>...a harmless, necessary chat.</h2>
            <input placeholder="email" />
            <input placeholder="password" />
            <button>Login</button>
            <button>Register</button>
        </div>
        )
    }
}

export default Auth