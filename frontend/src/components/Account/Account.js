import React from 'react';
import './Account.css';
import { Link } from 'react-router-dom';

function Account({ MenuVersion }) {

  return(
    <div className={`account ${MenuVersion ? 'account_menu' : 'account_no-menu'}`}>
    <div className="account__icon"></div>
  <Link to="/profile" className="account__link">
      Аккаунт
    </Link>
  </div>
  )
}

export default Account;