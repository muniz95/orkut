import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";

interface IProps {
  auth: boolean;
}

class Routes extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { auth } = this.props;
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
}

export default Routes;
