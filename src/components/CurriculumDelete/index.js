import React from "react";
import './curriculumdelete.scss';

function CurriculumDelete() {
    return (
        <div className="currDelete">
            <div className="container">
                <div className="currDelete__box">
                    <p className="currDelete__title">Bạn có chắc chắn muốn xóa giáo trình này không?</p>
                    <div className="currDelete__btn">
                        <button>Có</button>
                        <button>Không</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurriculumDelete;