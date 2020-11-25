import React from "react";
import { Switch, Route } from "react-router-dom";
import AppHeader from "./AppHeader";
import logo from "../assets/BCtrlLogo.svg";

function Header({ username }) {
  return (
    <header className="d-flex justify-content-center align-items-end">
      <Switch>
        <Route path="/landing">
          <AppHeader username={username} />
        </Route>
        <Route path="/expense">
          <AppHeader username={username} />
        </Route>
        <Route path="/">
          <img id="logo" src={logo} alt="BudgetCtrl logo" className="pb-3" />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
