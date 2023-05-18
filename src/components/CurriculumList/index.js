import React from "react";
import './curriculumlist.scss';
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

function CurriculumList() {
    return (
        <div className="currList">

            <div className="currList__btn">
                <Link to={'/them-giao-trinh'}>
                    <button>Thêm</button>
                </Link>
            </div>
            <div className="currList__table">
                <table className="table">
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
                                <Link to={'/sua-giao-trinh'}>
                                    <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                                </Link>
                                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
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
                                <Link to={'/sua-giao-trinh'}>
                                    <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                                </Link>
                                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
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
                                <Link to={'/sua-giao-trinh'}>
                                    <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                                </Link>
                                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
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
                                <Link to={'/sua-giao-trinh'}>
                                    <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                                </Link>
                                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
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
                                <Link to={'/sua-giao-trinh'}>
                                    <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                                </Link>
                                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                            </div>
                        </td>
                    </tr>

                </table>
                <div className='currList__pagination'>
                    <Pagination pageCount={10} pageNum={10} range={6} />
                </div>
            </div>
        </div >
    )
}

export default CurriculumList;