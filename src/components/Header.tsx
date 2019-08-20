import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../modules/actions"
import "../styles/Header.scss"

interface IProps {
  auth: any;
  dispatchLogout: () => void;
}

interface IState {
  auth: any;
}

const Header = (props: IProps) => {
  const { auth } = props;
  const btnAuth = auth
  ?
    <button className="button is-text close-menu" onClick={props.dispatchLogout}>
      <span className="icon">
        <i className="fa fa-sign-out"></i>
      </span>
      <span>Sair</span>
    </button>
  :
    <Link className="button is-text close-menu" to="/login">
      <span className="icon">
        <i className="fa fa-sign-in"></i>
      </span>
      <span>Entrar</span>
    </Link>;

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
  );
};

const mapStateToProps = (state: IState) => {
  const { auth } = state;
  return {
    auth,
  };
};

const mapDispatchToProps = {
  dispatchLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
