import React from "react";
import './headeruser.scss';

function HeaderUser() {
    return (
        <header className="headerUser">
            <div className="headerUser__box">
                <div className="headerUser__logo">
                    <img width="128" height="80" src={`${process.env.PUBLIC_URL}/images/logo-sci.svg`} />
                </div>
                <div className="headerUser__noti">
                    <img width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icon-bell.png`} />
                </div>
                <div className="headerUser__boxUser">
                    <img width="30" height="30" src={`${process.env.PUBLIC_URL}/images/user.png`} alt="" />
                    <div className="headerUser__user">
                        <p>Nguyen Hoang Duong</p>
                        <p>Admin</p>
                    </div>
                    <img width="15" height="15" src={`${process.env.PUBLIC_URL}/images/down-arrow.png`} alt="" />
                    <div className="headerUser__dropdown">
                        <ul>
                            <li className="headerUser__itemMenu">Thông tin cá nhân</li>
                            <li className="headerUser__itemMenu">Đổi mật khẩu</li>
                            <li className="headerUser__itemMenu">Đăng xuất</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderUser;