import React from "react";
import './useradd.scss';

function UserAdd() {
    return (
        <div className="userAdd">
            <div className="userAdd__mainBox">
                <h3 className="userAdd__title">Thêm tài khoản</h3>
                <div className="userAdd__box">
                    <div className="userAdd__item">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="userAdd__item">
                        <label>Password</label>
                        <input type="text" />
                    </div>
                    <div className="userAdd__item">
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
                <div className="userAdd__btn">
                    <button>Thêm</button>
                </div>
            </div>
        </div>
    )
}

export default UserAdd;