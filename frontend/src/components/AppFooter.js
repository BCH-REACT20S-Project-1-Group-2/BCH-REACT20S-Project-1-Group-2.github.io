import React from "react";
import { Link } from "react-router-dom";
import "../styles/AppFooter.css";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Link to="/landing">Icon 1: dashboard/landing</Link>
      <Link to="/landing">Icon 2: analysis (to be added in MVP+)</Link>
      <Link to="/">Icon 3: logout</Link>
    </div>
  );
}

export default AppFooter;
