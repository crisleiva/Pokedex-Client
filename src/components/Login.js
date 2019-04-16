import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Login.css'
import '../style/App.css'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <div id="login-container">
        <div id="login-form">
          <div id="login-link-container">
            <Link to='/login' className="login-link">Login</Link>
            <Link to='/signup' className="login-link">Create an Account</Link>
          </div>
          <h3 id="login-title">
            Login
          </h3>
          <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
            <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={(e) => this.handleChange(e)} className="signup-form-input"></input>
            <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={(e) => this.handleChange(e)} className="signup-form-input"></input>
            <input type='submit' value='Sign In' id="button"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
