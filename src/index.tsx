import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App";
import "./DOMEvents";
import "./index.scss";
import { store } from "./modules/store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('app');
const root = createRoot(container!); 

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

serviceWorker.register();
