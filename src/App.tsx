import React, { Component } from 'react'
import Routes from './routes'
import { connect } from 'react-redux'

interface IProps {
  auth: any;
}

interface IState {
  auth: any;
}

class App extends Component<IProps, IState> {
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

const mapStateToProps = (state: IState) => {
  const { auth } = state
  return {
    auth
  }
}

export default connect(mapStateToProps, null)(App)
