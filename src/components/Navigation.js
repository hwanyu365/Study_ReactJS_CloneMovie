import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="container_navigation">
      <Link to="/" className="navigation_btn">
        Home
      </Link>
      <Link to="/about" className="navigation_btn">
        About
      </Link>
    </div>
  );
}

export default Navigation;
