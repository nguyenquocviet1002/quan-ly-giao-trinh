import React from "react";
import { Link } from "react-router-dom";
import './dashboardsidebar.scss';

function DashboardSidebar() {
    return (

        <div className="sidebar">
            <ul>
                <h3 className="sidebar__title">Menu</h3>
                <li className="sidebar__item">
                    <Link to="/thong-ke-giao-trinh">
                        <img src={`${process.env.PUBLIC_URL}/images/bookmark.png`} />
                        Thống kê giáo trình
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/giao-trinh">
                        <img src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/quan-ly-hoc-vien">
                        <img src={`${process.env.PUBLIC_URL}/images/people.png`} />
                        Quản lý học viên
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/danh-sach-tai-khoan">
                        <img src={`${process.env.PUBLIC_URL}/images/people.png`} />
                        Danh sách tài khoản
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default DashboardSidebar;