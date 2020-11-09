import React from "react";
import { Switch, Route } from "react-router-dom";
import AppFooter from "./AppFooter";
import CustomModal from "./CustomModal";
import "../styles/Footer.css";

function Footer() {
  const { about, privacyPolicy } = require("../phrases/Footer.json");
  const { appName } = require("../phrases/App.json");
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
          <CustomModal title="About" body={about} />
          <CustomModal title="Privacy Policy" body={privacyPolicy} />
        </Route>
      </Switch>
      <div id="copyright">Copyright &copy; {appName}</div>
    </footer>
  );
}

export default Footer;
