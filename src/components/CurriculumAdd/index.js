import React from "react";
import './curriculumadd.scss';

function CurriculumAdd() {
    return (
        <div className="currAdd">
            <div className="currAdd__mainBox">
                <h3 className="currAdd__title">Thêm giáo trình</h3>
                <div className="currAdd__box">
                    <div className="currAdd__box1">
                        <div className="currAdd__item">
                            <label>Hình ảnh</label>
                            <input type="file" id="myfile" name="myfile" multiple></input>
                        </div>
                        <div className="currAdd__item">
                            <label>Tên giáo trình</label>
                            <input type="text" />
                        </div>
                        <div className="currAdd__item">
                            <label>Trạng thái</label>
                            <select name="" id="">
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                    <div className="currAdd__box2">
                        <p>Nội dung</p>
                        <textarea name="" id="" cols="50" rows="5"></textarea>
                    </div>
                </div>
                <div className="currAdd__btn">
                    <button>Thêm</button>
                </div>
            </div>
        </div>
    )
}

export default CurriculumAdd;