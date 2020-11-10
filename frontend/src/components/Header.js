import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHeader from "./AppHeader";

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
          <h1 id="logo" className="mx-auto">
            Logo
          </h1>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
