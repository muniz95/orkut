import React from 'react';
import act from '../modules/actions';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const Login = (props: RouteComponentProps) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch();
  const dispatchLogin = React.useCallback(
    () => dispatch(act.login()),
    [dispatch]
  );

  const login = () => {
    if (username === password) {
      dispatchLogin();
      props.history.replace("/");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  }

  const setField = ({ target }: any) => {
    if (target.id === 'username') {
      setUsername(target.value);
    } else if (target.id === 'password') {
      setPassword(target.value);
    }
  }

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
                onChange={setField}
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
                onChange={setField}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-key" />
              </span>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" onClick={login}>
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

export default withRouter(Login);
