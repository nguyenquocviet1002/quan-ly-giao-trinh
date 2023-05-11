import React from "react";
import './noti.scss';

function Notification() {
    return (
        <div className="noti">
            <img width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icon-bell.png`} />
            <div className="noti__box">
                <ul>
                    <li>Bạn đã được đăng ký giáo trình JS</li>
                    <li>Bạn đã được đăng ký giáo trình JS</li>
                </ul>
            </div>
        </div>
    )
}

export default Notification;