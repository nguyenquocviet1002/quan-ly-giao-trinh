import React from "react";
import { Link } from "react-router-dom";
import './sidebar.scss';

function Sidebar() {
    return (

        <div className="sidebar">
            <ul>
                <li className="sidebar__item">
                    <Link to="/tat-ca-giao-trinh">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/bookmark.png`} />
                        Tất cả giáo trình
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/giao-trinh-code">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình Code
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/giao-trinh-seo">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình SEO
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/giao-trinh-video">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình Video
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/giao-trinh-sales">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình Sales
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/giao-trinh-seeding">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình Seeding
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;