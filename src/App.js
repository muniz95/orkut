import React, { Component } from 'react'
import Routes from './routes'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { auth } = this.props
    console.log(auth)
    return (
      <div>
        <Routes auth={auth} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state
  return {
    auth
  }
}

export default connect(mapStateToProps, null)(App)
