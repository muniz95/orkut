import Component from 'inferno-component'
import { Link } from 'inferno-router'
import '../styles/Header.css'

class Header extends Component {
  render() {
    return (
      <nav class="navbar header is-fixed-top">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            Orkut
          </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            {/* <a class="navbar-item" href="https://bulma.io/">
              Home
            </a> */}
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <Link class="button is-text" to={"/login"}>
                    <span class="icon">
                      <i class="fa fa-sign-in"></i>
                    </span>
                    <span>Entrar</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
