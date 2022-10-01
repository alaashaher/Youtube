import React from "react";

import "./MainAppBarLg.scss";
import { Link } from "react-router-dom";

import logo from "../../logo.png";

const MainAppBarLg = ({ className }) => {
  return (
    <div className={className}>
      <div className="custom-container">
        <div className="nav-content-wrapper">
          <Link to="/" className="logo">
            <img src={logo} alt="log" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainAppBarLg;
