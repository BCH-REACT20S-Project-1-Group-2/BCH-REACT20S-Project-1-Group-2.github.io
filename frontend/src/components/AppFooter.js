import React from "react";
import { Link } from "react-router-dom";
import "../styles/AppFooter.css";
import { FaTachometerAlt, FaChartBar, FaSignOutAlt } from "react-icons/fa";

function AppFooter() {
  return (
    <>
      <Link to="/landing">
        <FaTachometerAlt />
      </Link>
      <Link to="/landing">
        <FaChartBar />
      </Link>
      <Link to="/">
        <FaSignOutAlt />
      </Link>
    </>
  );
}

export default AppFooter;
