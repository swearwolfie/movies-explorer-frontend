import React from 'react';
import './Account.css';
import { Link } from 'react-router-dom';

function Account() {
  return (
    <div className="account">
    <div className="account__icon"></div>
  <Link to="/profile" className="account__link">
      Аккаунт
    </Link>
  </div>
  )
}

export default Account;