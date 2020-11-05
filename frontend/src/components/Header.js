import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <Switch>
        <Route path="/landing">
          <div className="logo">Logo</div>
          <div className="userName">user name</div>
          <div className="userIcon"></div>
        </Route>
        <Route path="/expense">
          <div className="logo">Logo</div>
          <div className="userName">user name</div>
          <div className="userIcon"></div>
        </Route>
        <Route path="/">
          <div className="welcomeLogo">Logo</div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
