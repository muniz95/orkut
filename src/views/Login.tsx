import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { login } from "../modules/actions";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const authenticate = (): void => {
    if (username === password) {
      dispatch(login());
      // history.replace("/");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };
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
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setUsername(evt.target.value)}
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
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-key" />
              </span>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" onClick={authenticate}>
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
};

export default Login;
