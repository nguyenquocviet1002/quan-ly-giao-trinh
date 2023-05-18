import React from "react";
import './useredit.scss';

function UserEdit() {
    return (
        <div className="userEdit">
            <div className="userEdit__mainBox">
                <h3 className="userEdit__title">Thêm tài khoản</h3>
                <div className="userEdit__box">
                    <div className="userEdit__item">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="userEdit__item">
                        <label>Password</label>
                        <input type="text" />
                    </div>
                    <div className="userEdit__item">
                        <label>Team</label>
                        <select name="" id="">
                            <option value="code">Code</option>
                            <option value="seo">SEO</option>
                            <option value="seeding">Seeding</option>
                            <option value="sale">Sale</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                </div>
                <div className="userEdit__btn">
                    <button>Thêm</button>
                </div>
            </div>
        </div>
    )
}

export default UserEdit;