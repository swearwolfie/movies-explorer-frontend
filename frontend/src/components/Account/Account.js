import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";

function Account({ MenuVersion }) {
  return (
    <Link to="/profile"
      className={`account ${MenuVersion ? "account_menu" : "account_no-menu"}`}
    >
      <div className="account__icon"></div>
      <h3 className="account__link">
        Аккаунт
      </h3>
    </Link>
  );
}

export default Account;