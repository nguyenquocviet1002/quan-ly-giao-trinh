import React from 'react';
import { Link } from 'react-router-dom';
import './_Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__box">
        <div class="header__btncheck">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header__hollow"></div>
        <div className="header__noti">
          <img width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icon-bell.png`} alt="" />
        </div>
        <div className="header__btn">
          <Link to="/login" className="header__btnItem">
            Đăng nhập
          </Link>
          <Link to="/register" className="header__btnItem">
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  );
}
