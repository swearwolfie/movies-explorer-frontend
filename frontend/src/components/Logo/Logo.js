import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return <Link to="/" className="header__logo header__logo_register"></Link>;
}

export default Logo;
