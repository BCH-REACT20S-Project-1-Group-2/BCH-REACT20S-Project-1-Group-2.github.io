import React from "react";
import { Link } from "react-router-dom";
import "../styles/AppFooter.css";

function AppFooter() {
  return (
    <div className="AppFooter">
      <div>
        <Link to="/landing">Icon 1: dashboard/landing</Link>
      </div>
      <div>
        <Link to="/landing">Icon 2: analysis (to be added in MVP+)</Link>
      </div>
      <div>
        <Link to="/">Icon 3: logout</Link>
      </div>
    </div>
  );
}

export default AppFooter;
