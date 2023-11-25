import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Header from "../components/Header";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";
import { useSelector } from "react-redux";
import { RootState } from "../modules/reducers";

const Routes = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const routes = auth ? PrivateRoutes : PublicRoutes;
  const routing = useRoutes([...routes])
  return (
    <div>
      <Header />
      <section className="section" id="main-section">
        <div className="container">
          {routing}
        </div>
      </section>
    </div>
  );
}

export default Routes;
