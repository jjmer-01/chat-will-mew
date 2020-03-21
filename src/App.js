import React, {Component} from 'react';
import './App.css';
import routes from './routes'
import { withRouter } from 'react-router-dom'

import Auth from './components/Auth/Auth' 
import Nav from './components/Nav/Nav'
import Register from './components/Register/Register'
// import Dash from './components/Dash/Dash'

class App extends Component {

  render() {
    return (
      
      <div className="App">
        {this.props.location.pathname === '/' 
        ? (
          <>
          <Auth />
          </>
          )
        : (this.props.location.pathname === '/register' 
          ? <Register /> 
          : ( <>
              <Nav />
              {routes}
              </>
            ))}
      </div>
  
    )
  }
}

export default withRouter(App);
