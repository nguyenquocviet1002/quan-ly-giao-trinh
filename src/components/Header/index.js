import React from "react";
import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__box">
                <div className="header__logo">
                    <img width="128" height="80" src={`${process.env.PUBLIC_URL}/images/logo-sci.svg`} />
                </div>
                <div className="header__noti">
                    <img width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icon-bell.png`} />
                </div>
                <div className="header__btn">
                    <button>Đăng nhập</button>
                    <button>Đăng ký</button>
                </div>
            </div>
        </header>
    )
}

export default Header;