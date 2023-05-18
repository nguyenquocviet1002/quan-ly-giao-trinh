import React from "react";
import { Link } from "react-router-dom";
import './curriculumedit.scss';

function CurriculumEdit() {
    return (
        <div className="currEdit">
            <div className="currEdit__mainBox">
                <div className="currEdit__name">
                    <p>Giáo trình code</p>
                    <div className="currEdit__icon">
                        <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                    </div>
                </div>
                <div className="currEdit__box">
                    <div className="currEdit__box1">
                        <div className="currEdit__item">
                            <label>Hình ảnh</label>
                            <input type="file" id="myfile" name="myfile" multiple></input>
                        </div>
                        <div className="currEdit__item">
                            <label>Tên giáo trình</label>
                            <input type="text" />
                        </div>
                        <div className="currEdit__item">
                            <label>Trạng thái</label>
                            <select name="" id="">
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                    <div className="currEdit__box2">
                        <p>Nội dung</p>
                        <textarea name="" id="" cols="50" rows="6"></textarea>
                    </div>
                </div>
                <div className="currEdit__list">
                    <div className="currEdit__list--item">
                        <p>1. Toán tử logic trong JS</p>
                        <div className="currEdit__list--action">
                            <Link to={'/sua-giao-trinh-con'}>
                                <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                            </Link>
                            <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                        </div>
                    </div>
                    <div className="currEdit__list--item">
                        <p>2. Toán tử logic trong JS</p>
                        <div className="currEdit__list--action">
                            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                        </div>
                    </div>
                    <div className="currEdit__list--item">
                        <p>3. Toán tử logic trong JS</p>
                        <div className="currEdit__list--action">
                            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                        </div>
                    </div>
                    <div className="currEdit__list--item">
                        <p>4. Toán tử logic trong JS</p>
                        <div className="currEdit__list--action">
                            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                        </div>
                    </div>
                    <div className="currEdit__list--item">
                        <p>5. Toán tử logic trong JS</p>
                        <div className="currEdit__list--action">
                            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                        </div>
                    </div>
                </div>
                <div className="currEdit__addItem">
                    <img src={`${process.env.PUBLIC_URL}/images/plus.png`} alt="" />
                    Thêm mới
                </div>
            </div>
        </div>
    )
}

export default CurriculumEdit;