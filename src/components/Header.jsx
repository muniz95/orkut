import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../modules/actions'
import '../styles/Header.css'

class Header extends Component {
  render() {
    const { auth } = this.props
    const btnAuth = auth
    ?
      <button className="button is-text" onClick={this.props.dispatchLogout}>
        <span className="icon">
          <i className="fa fa-sign-out"></i>
        </span>
        <span>Sair</span>
      </button>
    :
      <Link className="button is-text" to="/login">
        <span className="icon">
          <i className="fa fa-sign-in"></i>
        </span>
        <span>Entrar</span>
      </Link>
      
    return (
      <nav className="navbar header is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Orkut
          </Link>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample" id="btnMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <a className="navbar-item" href="https://bulma.io/">
              Home
            </a> */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  {btnAuth}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state
  return {
    auth
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => {
    dispatch(logout())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
