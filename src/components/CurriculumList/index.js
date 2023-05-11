import React from "react";
import './curriculumlist.scss';

function CurriculumList() {
    return (
        <div className="currList">
            <div className="container">
                <div className="currList__btn">
                    <button>Thêm</button>
                </div>
                <table class="table">
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên giáo trình</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                    <tr>
                        <td className="currList__box">
                            <div className="currList__img">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} alt="" />
                            </div>
                        </td>
                        <td className="currList__box">Giáo trình Code</td>
                        <td className="currList__box">Public</td>
                        <td className="currList__box">
                            <div className="currList__box--img">
                                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="currList__box">
                            <div className="currList__img">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} alt="" />
                            </div>
                        </td>
                        <td className="currList__box">Giáo trình Code</td>
                        <td className="currList__box">Public</td>
                        <td className="currList__box">
                            <div className="currList__box--img">
                                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="currList__box">
                            <div className="currList__img">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} alt="" />
                            </div>
                        </td>
                        <td className="currList__box">Giáo trình Code</td>
                        <td className="currList__box">Public</td>
                        <td className="currList__box">
                            <div className="currList__box--img">
                                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div >
    )
}

export default CurriculumList;