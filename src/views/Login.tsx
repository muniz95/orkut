import React, { Component } from 'react';
import { login } from '../modules/actions';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {
  dispatchLogin: () => void;
}

interface IState {
  username: string;
  password: string;
}

class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      password: "",
      username: "",
    };

    this.login = this.login.bind(this);
  }

  login() {
    const { username, password } = this.state;
    if (username === password) {
      this.props.dispatchLogin();
      this.props.history.replace("/");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  }

  setField = ({ target }: any) => {
    const obj: any = {};
    obj[target.id] = target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-half-desktop">
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  id="username"
                  type="text"
                  onChange={this.setField}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-user" />
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  id="password"
                  type="password"
                  onChange={this.setField}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-key" />
                </span>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" onClick={this.login}>
                  Login
                </button>
              </div>
              <div className="control">
                <button className="button is-text">Forgot your password?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchLogin: login,
};

export default connect(null, mapDispatchToProps)(Login);
