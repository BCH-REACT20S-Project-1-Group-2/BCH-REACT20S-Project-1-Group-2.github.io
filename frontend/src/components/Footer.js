import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppFooter from './AppFooter';
import CustomModal from './CustomModal';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <Switch>
        <Route path="/landing">
          <AppFooter />
        </Route>
        <Route path="/expense">
          <AppFooter />
        </Route>
        <Route path="/">
          <CustomModal title="About" body="About lorem ipsum" />
          <CustomModal
            title="Privacy Policy"
            body="Privacy policy lorem ipsum"
          />
        </Route>
      </Switch>
      <div id="copyright">Copyright &copy; BudgetCrtl 2020</div>
    </footer>
  );
}

export default Footer;
