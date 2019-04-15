import React from 'react'

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
      <form onSubmit={(e) => this.props.sendSignUp(e, this.state)}>
        <input type='text' placeholder='Enter a name' value={this.state.name} name='name' onChange={(e) => this.handleChange(e)}></input>
        <input type='text' placeholder='Enter an email' value={this.state.email} name='email' onChange={(e) => this.handleChange(e)}></input>
        <input type='password' placeholder='Enter your password' value={this.state.password} name='password' onChange={(e) => this.handleChange(e)}></input>
        <input type='submit' value='Sign Up'></input>
      </form>
    )
  }
}

export default Signup;