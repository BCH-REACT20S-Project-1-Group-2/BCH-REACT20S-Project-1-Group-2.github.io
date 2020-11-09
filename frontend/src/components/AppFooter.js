import React from "react";
import { Link } from "react-router-dom";
import "../styles/AppFooter.css";
import { FaTachometerAlt, FaChartBar, FaSignOutAlt } from "react-icons/fa";

function AppFooter() {
  return (
    <div className="AppFooter">
      <div>
        <Link to="/landing">
          <FaTachometerAlt />
        </Link>
      </div>
      <div>
        <Link to="/landing">
          <FaChartBar />
        </Link>
      </div>
      <div>
        <Link to="/">
          <FaSignOutAlt />
        </Link>
      </div>
    </div>
  );
}

export default AppFooter;
