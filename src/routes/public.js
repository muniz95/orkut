import Base from "../Base";
import Main from "../views/Main";
import Login from "../views/Login";
import { Router, Route } from "inferno-router";
import createBrowserHistory from "history/createBrowserHistory";

const browserHistory = createBrowserHistory();

export default (
  <Router history={browserHistory}>
    <Route component={Base}>
      <Route path="/" component={Main} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
)
