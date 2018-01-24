import PrivateRoutes from './private'
import PublicRoutes from './public'
import Component from 'inferno-component'
import { connect } from 'inferno-redux'
import { Router } from "inferno-router";
import createBrowserHistory from "history/createBrowserHistory";

const browserHistory = createBrowserHistory();

class Routes extends Component {
  render() {
    const { auth } = this.props
    const routes = auth ? PrivateRoutes : PublicRoutes
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state
  return {
    auth
  }
}

export default connect(mapStateToProps, null)(Routes)
