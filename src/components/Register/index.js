import React from "react";
import './register.scss';

function Register() {
    return (
        <div className='regist'>
            <div className='container'>
                <div className='regist__box'>
                    <div className='regist__pic'>
                        <img src={`${process.env.PUBLIC_URL}/images/content.jpg`} />
                    </div>
                    <div className='regist__detail'>
                        <div className='regist__form'>
                            <div className='regist__title'>
                                <span>ĐĂNG KÝ</span>
                            </div>
                            <div className='regist__input'>
                                <label>Nhập email </label>
                                <input type='email' name='email' required />
                            </div>
                            <div className='regist__input'>
                                <label>Nhập mật khẩu </label>
                                <input type='password' name='password' required />
                            </div>
                            <div className='regist__input'>
                                <label>Nhập lại mật khẩu </label>
                                <input type='confirmpassword' name='confirmpassword' required />
                            </div>
                            <div className='regist__select'>
                                <select name="" id="">
                                    <option value="0">Chọn giáo trình:</option>
                                    <option value="1">Giáo trình Code</option>
                                    <option value="2">Giáo trình Video</option>
                                    <option value="3">Giáo trình SEO</option>
                                    <option value="4">Giáo trình Sale</option>
                                    <option value="5">Giáo trình Seeding</option>
                                </select>
                            </div>
                            <div className='regist__button'>
                                <button>Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;