import React from "react";
import { Switch, Route } from "react-router-dom";

function Header() {
  return (
    <header>
      <Switch>
        <Route path="/landing">
          <div>Logo</div>
          <div>User</div>
        </Route>
        <Route path="/expense">
          <div>Logo</div>
          <div>User</div>
        </Route>
        <Route path="/">
          <div>Logo</div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
