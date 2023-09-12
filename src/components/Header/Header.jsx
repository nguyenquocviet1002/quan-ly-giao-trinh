import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__box">
        <div className="header__btncheck">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header__hollow"></div>
        <div className="header__noti"></div>
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
