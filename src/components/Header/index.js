import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './header.scss';

function Header() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/admin')
    }
    return (
        <header className="header">
            <div className="header__box">
                <div className="header__logo">
                    <img width="128" height="80" src={`${process.env.PUBLIC_URL}/images/logo-sci.svg`} alt="" />
                </div>
                <div className="header__noti">
                    <img width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icon-bell.png`} alt="" />
                </div>
                <div className="header__btn">
                    <Link to='/login' className="header__btnItem">Đăng nhập</Link>
                    <Link to='/register' className="header__btnItem">Đăng ký</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;