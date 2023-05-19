import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '@/services/authService';
import './Register.scss';

export default function Register() {
  const initialInfo = {
    department_id: '',
    name: '',
    email: '',
    password: '',
    c_password: '',
    role: 'USER',
    status: false,
  };

  const [infoRegister, setInfoRegister] = useState(initialInfo);

  const handleChange = (name) => (event) => {
    setInfoRegister((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const { mutateRegister, isSuccessRegister } = useRegister();

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      infoRegister.email === '' ||
      infoRegister.name === '' ||
      infoRegister.password === '' ||
      infoRegister.c_password === '' ||
      infoRegister.department_id === ''
    ) {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else if (infoRegister.password !== infoRegister.c_password) {
      alert('Mật khẩu không trùng khớp');
    } else {
      mutateRegister(infoRegister);
      if (isSuccessRegister) {
        setInfoRegister(initialInfo);
      }
    }
  };

  if (isSuccessRegister) {
    navigate('/login');
  }

  return (
    <div className="regist">
      <div className="container">
        <div className="regist__box">
          <div className="regist__pic">
            <img src={`${process.env.PUBLIC_URL}/images/content.jpg`} alt="" />
          </div>
          <div className="regist__detail">
            <div className="regist__form">
              <div className="regist__title">
                <span>ĐĂNG KÝ</span>
              </div>
              <div className="regist__input">
                <label>Nhập email </label>
                <input type="text" value={infoRegister.email} onChange={handleChange('email')} />
              </div>
              <div className="regist__input">
                <label>Họ và tên </label>
                <input type="text" value={infoRegister.name} onChange={handleChange('name')} />
              </div>
              <div className="regist__input">
                <label>Nhập mật khẩu </label>
                <input type="password" value={infoRegister.password} onChange={handleChange('password')} />
              </div>
              <div className="regist__input">
                <label>Nhập lại mật khẩu </label>
                <input type="password" value={infoRegister.c_password} onChange={handleChange('c_password')} />
              </div>
              <div className="regist__select">
                <select onChange={handleChange('department_id')}>
                  <option value="0">Chọn giáo trình:</option>
                  <option value="1">Giáo trình Code</option>
                  <option value="2">Giáo trình Video</option>
                  <option value="3">Giáo trình SEO</option>
                  <option value="4">Giáo trình Sale</option>
                  <option value="5">Giáo trình Seeding</option>
                </select>
              </div>
              <div className="regist__button">
                <button type="submit" onClick={() => handleSubmit()}>
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
