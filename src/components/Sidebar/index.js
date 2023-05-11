import React from "react";
import './sidebar.scss';

function Sidebar() {
    return (
        <div className="container">
            <div className="sidebar">
                <ul>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/bookmark.png`} />
                        Tất cả giáo trình
                    </li>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình Code
                    </li>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình SEO
                    </li>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình Video
                    </li>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình Sales
                    </li>
                    <li className="sidebar__item">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình Seeding
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;