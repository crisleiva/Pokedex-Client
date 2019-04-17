import React from 'react'

class Logout extends React.Component{
  componentDidMount = () => {
    this.props.handleLogOut()
  }

}

export default Logout