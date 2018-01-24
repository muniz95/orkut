import Base from "../Base";
import Main from "../views/Main";
import Login from "../views/Login";
import { Route } from "inferno-router";

const handleRoute = e => {
  if (window.closeDrawer) window.closeDrawer();
  this.currentUrl = e.url;
};

export default (
  <Route onChange={handleRoute} component={Base}>
    <Route path="/" component={Main} />
    <Route path="/login" component={Login} />
  </Route>
)
