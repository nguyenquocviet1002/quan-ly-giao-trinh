import React from "react";
import './coursesdetail.scss';

function CoursesDetail() {
    return (
        <div className="container">
            <div className="coursesDetail">
                <div className="coursesDetail__title">
                    <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                    Giáo trình JS
                </div>
                <div className="coursesDetail__list">
                    <a href="">
                        <p>1. Cấu trúc code trong JS</p>
                    </a>
                    <a href="">
                        <p>2. Cấu trúc code trong JS</p>
                    </a>
                    <a href="">
                        <p>3. Cấu trúc code trong JS</p>
                    </a>
                    <a href="">
                        <p>4. Cấu trúc code trong JS</p>
                    </a>
                    <a href="">
                        <p>5. Cấu trúc code trong JS</p>
                    </a>
                    <a href="">
                        <p>6. Cấu trúc code trong JS</p>
                    </a>
                    <a href="">
                        <p>7. Cấu trúc code trong JS</p>
                    </a>
                    <a href="">
                        <p>8. Cấu trúc code trong JS</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CoursesDetail;