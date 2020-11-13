import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHeader from "./AppHeader";

function Header(props) {
  return (
    <header className="d-flex justify-content-center align-items-end">
      <Switch>
        <Route path="/landing">
          <AppHeader username={props.username} />
        </Route>
        <Route path="/expense">
          <AppHeader username={props.username} />
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
