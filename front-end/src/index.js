import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Main from "layouts/Main.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/main" component={Main} />
      <Redirect from="/" to="/main/home" />
      <Redirect from="/main" to="/main/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
