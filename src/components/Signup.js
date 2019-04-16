import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Signup.css'
import '../style/App.css'

class Signup extends React.Component {
  state = {
    name: '',
    password: '',
    email: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <div id="signup-container">
        <div id="signup-form">
          <div id="signup-link-container">
            <Link to='/login' className="signup-link">Login</Link>
            <Link to='/signup' className="signup-link">Create an Account</Link>
          </div>
          <h3 id="signup-title">
            Create an Account
          </h3>
          <form onSubmit={(e) => this.props.sendSignUp(e, this.state)}>

            <input type='text' placeholder='Your Name' value={this.state.name} name='name' onChange={(e) => this.handleChange(e)} className="signup-form-input"></input>

            <input type='text' placeholder='Your Email' value={this.state.email} name='email' onChange={(e) => this.handleChange(e)} className="signup-form-input"></input>

            <input type='password' placeholder='Password' value={this.state.password} name='password' onChange={(e) => this.handleChange(e)} className="signup-form-input"></input>

            <input type='submit' value='Sign Up' id="button"></input>

          </form>
        </div>
      </div>
    )
  }
}

export default Signup;
