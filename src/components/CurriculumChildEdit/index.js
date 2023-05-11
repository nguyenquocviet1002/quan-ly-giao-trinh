import React from "react";
import './curriculumchildedit.scss';

function CurriculumChildEdit() {
    return (
        <div className="currChildEdit">
            <div className="container">
                <div className="currChildEdit__box">
                    <h3 className="currChildEdit__title">Sửa giáo trình</h3>
                    <div className="currChildEdit__item">
                        <label>Tên giáo trình</label>
                        <br />
                        <input type="text" />
                    </div>
                    <div className="currChildEdit__item">
                        <label>Link giáo trình</label>
                        <br />
                        <input type="text" />
                    </div>
                    <div className="currChildEdit__btn">
                        <button>Lưu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurriculumChildEdit;