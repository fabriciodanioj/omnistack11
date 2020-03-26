import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import NewIncident from "./Pages/NewIncident";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
};
