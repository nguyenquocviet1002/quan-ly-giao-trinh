import React from "react";
import { Link } from "react-router-dom";
import { MENU_ADMIN, MENU_SUB_ADMIN } from "@/utils/menu";
import './dashboardsidebar.scss';

function DashboardSidebar({ role }) {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <Link to="/">
                    <img width="128" height="80" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
                </Link>
            </div>
            <ul>
                {role === "ADMIN" ? MENU_ADMIN.map((item, index) => (
                    <li key={index} className="sidebar__item">
                        <Link to={item.link}>
                            <img src={`${process.env.PUBLIC_URL}${item.icon}`} alt="" />
                            {item.title}
                        </Link>
                    </li>
                )) : MENU_SUB_ADMIN.map((item, index) => (
                    <li key={index} className="sidebar__item">
                        <Link to={item.link}>
                            <img src={`${process.env.PUBLIC_URL}${item.icon}`} alt="" />
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DashboardSidebar;