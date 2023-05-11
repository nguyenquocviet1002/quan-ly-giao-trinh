import React from "react";
import './dashboardsidebar.scss';

function DashboardSidebar() {
    return (
        <div className="container">
            <div className="sidebar">
                <ul>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/bookmark.png`} />
                        Thống kê giáo trình
                    </li>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình
                    </li>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/people.png`} />
                        Quản lý học viên
                    </li>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/people.png`} />
                        Danh sách tài khoản
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardSidebar;