import Base from '../Base'
import Main from '../views/Main'
// import Edition from '../views/Edition'
// import Quiz from '../views/Quiz'
import Component from 'inferno-component'
import { Router, Route, IndexRoute } from 'inferno-router'
import { connect } from 'inferno-redux'
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory()

class Routes extends Component {

    render() {
        const { auth } = this.props
        const routes = auth
        ?
            <Router history={ browserHistory }>
                <Route component={ Base }>
                    <IndexRoute component={ Main } />
                </Route>
            </Router>
        :
            <Router history={ browserHistory }>
                <Route component={ Base }>
                    <IndexRoute component={ Main } />
                </Route>
            </Router>
        
        return routes
    }
}

const mapStateToProps = (state) => {
  const { goal } = state
  return {
    goal
  }
}

export default connect(mapStateToProps, null)(Routes)
