import React from "react";
import { Switch, Route } from "react-router-dom";
import AppHeader from "./AppHeader";

function Header() {
  return (
    <header
      style={{
        height: "155px",
        display: "flex",
        alignItems: "flex-end"
      }}
    >
      <Switch>
        <Route path="/landing">
          <AppHeader />
        </Route>
        <Route path="/expense">
          <AppHeader />
        </Route>
        <Route path="/">
          <h1 className="mx-auto">Logo</h1>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
