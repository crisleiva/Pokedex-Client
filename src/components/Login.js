import React from 'react'

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
      <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
        <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={(e) => this.handleChange(e)}></input>
        <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={(e) => this.handleChange(e)}></input>
        <input type='submit' value='Sign In'></input>
      </form>
    ) 
  }
}

export default Login