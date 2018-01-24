import Component from 'inferno-component'
import { login } from '../modules/actions'
import { connect } from 'inferno-redux'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    }

    this.login = this.login.bind(this)
  }

  login() {
    const { username, password } = this.state
    if (username === password) {
      this.props.dispatchLogin()
      // this.props.history.push("/")
    } else {
      alert("Usuário ou senha incorretos!")
    }
  }

  setField = ({ target }) => {
    const obj = {}
    obj[target.id] = target.value
    this.setState(obj)
  }

  render() {
    return (
      <div>
        <div class="columns">
          <div class="column is-half-desktop">
            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  id="username"
                  type="text"
                  onChange={this.setField}
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-user" />
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  id="password"
                  type="password"
                  onChange={this.setField}
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-key" />
                </span>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-primary" onClick={this.login}>
                  Login
                </button>
              </div>
              <div class="control">
                <button class="button is-text">Forgot your password?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLogin: () => {
    dispatch(login())
  }
});

export default connect(null, mapDispatchToProps)(Login);
