import React from "react";
import { Link } from "react-router-dom";
import { MENU_ADMIN, MENU_SUB_ADMIN } from "@/utils/menu";
import './dashboardsidebar.scss';

function DashboardSidebar({ role }) {
    return (
        <div className="sidebar">
            <ul>
                <h3 className="sidebar__title">Menu</h3>
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