import React from "react";
import './curriculumcontent.scss';

function curriculumContent() {
    return (
        <div className="container">
            <div className="currContent">
                <div className="currContent__title">
                    <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                    Cấu trúc code trong JS
                </div>
                <div className="currContent__box">
                    <div className="currContent__box1">
                        Nội dung bài giảng
                    </div>
                    <div className="currContent__box2">
                        <div className="currContent__item">
                            Nội dung bài giảng
                        </div>
                        <div className="currContent__item">
                            Nội dung bài giảng
                        </div>
                        <div className="currContent__item">
                            Nội dung bài giảng
                        </div>
                        <div className="currContent__item">
                            Nội dung bài giảng
                        </div>
                    </div>
                </div>

                <a href="">
                    <button className="currContent__btn">Link câu hỏi</button>
                </a>
            </div>
        </div>
    )
}

export default curriculumContent;