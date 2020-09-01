import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";
import { useSelector } from "react-redux";
import { RootState } from "../modules/reducers";

const Routes = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const routes = auth ? PrivateRoutes : PublicRoutes;
  return (
    <Router>
      <div>
        <Header />
        <section className="section" id="main-section">
          <div className="container">
            <Switch>
              {routes}
            </Switch>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default Routes;
