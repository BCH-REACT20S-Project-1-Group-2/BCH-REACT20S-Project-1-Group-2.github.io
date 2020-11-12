import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHeader from "./AppHeader";
import logo from "../assets/BCtrlLogo.svg";

function Header() {
  return (
    <header className="d-flex justify-content-center align-items-end">
      <Switch>
        <Route path="/landing">
          <AppHeader />
        </Route>
        <Route path="/expense">
          <AppHeader />
        </Route>
        <Route path="/">
          <img src={logo} alt="BudgetCtrl logo"/>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
