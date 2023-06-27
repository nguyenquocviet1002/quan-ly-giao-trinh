import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '@/services/authService';
import './_Register.scss';
import { useGetDepartment } from '@/services/departmentService';

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

  const { mutateRegister } = useRegister();
  const { dataDepartment, isSuccessDepartment } = useGetDepartment();

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
      mutateRegister(infoRegister, {
        onSuccess: () => {
          setInfoRegister(initialInfo);
          navigate('/login');
        },
      });
    }
  };

  return (
    <div className="regist">
      <div className="container">
        <div className="regist__box">
          <div className="regist__pic">
            <img src={`${process.env.PUBLIC_URL}/images/logo-sci.svg`} alt="" />
          </div>
          <div className="regist__detail">
            <div className="regist__form">
              <div className="regist__title">
                <span>ĐĂNG KÝ</span>
              </div>
              <div className="regist__input">
                <input
                  type="text"
                  placeholder="Nhập email"
                  value={infoRegister.email}
                  onChange={handleChange('email')}
                />
              </div>
              <div className="regist__input">
                <input type="text" placeholder="Họ và tên" value={infoRegister.name} onChange={handleChange('name')} />
              </div>
              <div className="regist__input">
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={infoRegister.password}
                  onChange={handleChange('password')}
                />
              </div>
              <div className="regist__input">
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  value={infoRegister.c_password}
                  onChange={handleChange('c_password')}
                />
              </div>
              <div className="regist__select">
                <select onChange={handleChange('department_id')}>
                  <option>--- Chọn giáo trình ---</option>
                  {isSuccessDepartment &&
                    dataDepartment.data.data.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
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
