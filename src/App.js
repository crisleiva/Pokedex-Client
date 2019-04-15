import React, { Component } from 'react'
import logo from './logo.svg'
import PokedexContainer from './containers/PokedexContainer'
import Signup from './components/Signup'
import Login from './components/Login'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {Route, Switch, Link, withRouter} from 'react-router-dom'
import './style/App.css'
import Nav from './components/Nav'
class App extends Component {
  state = {
    user: {}
  }

  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      fetch('http://localhost:3000/current_user', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      })
      .then( res => res.json())
      .then(userJson => {
        this.setState({
          user: userJson.user
        })
      })
    }
  }

  sendSignUp = (e, userObj) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: userObj })
    })
    .then(res => res.json())
    .then(userData => {
      this.setState({
        user: userData.user
      }, () => {
        localStorage.setItem("token", userData.jwt)
        this.props.history.push('/pokedex')
      })
    })
  }

  handleLogin = (e, userObj) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: userObj})
    })
    .then(res => res.json())
    .then(userData => {
      localStorage.setItem('token', userData.jwt)
      this.setState({
        user: userData.user
      }, () => this.props.history.push('/pokedex'))
    })
  }

  handleLogOut = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render () {
    return (
      <div className='App'>
        <Nav />
        <Switch>
          <Route path={'/signup'} render={() => <Signup sendSignUp={this.sendSignUp}/>}/>
          <Route path={'/pokedex'} render={() => <PokedexContainer user={this.state.user}/>}/>
          <Route path={'/login'}  render={() => <Login handleLogin={this.handleLogin}/>}/>
          <Route path={'/'} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
