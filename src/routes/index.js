import PrivateRoutes from './private'
import PublicRoutes from './public'
import Component from 'inferno-component'
import { connect } from 'inferno-redux'

class Routes extends Component {
  render() {
    const { auth } = this.props
    return auth ? PrivateRoutes : PublicRoutes
  }
}

const mapStateToProps = (state) => {
  const { auth } = state
  return {
    auth
  }
}

export default connect(mapStateToProps, null)(Routes)
