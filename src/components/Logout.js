import React from 'react'

class Logout extends React.Component{
  componentDidMount = () => {
    this.props.handleLogOut()
  }

  render () {
    return(
      <div>Home</div>

    )
  }
}

export default Logout