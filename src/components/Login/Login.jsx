import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '@/services/authService';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import './_Login.scss';

export default function Login() {
  const initialInfo = {
    email: '',
    password: '',
  };

  const [infoLogin, setInfoLogin] = useState(initialInfo);

  const handleChange = (name) => (event) => {
    setInfoLogin((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);
  const { mutateLogin } = useLogin();

  const handleSubmit = () => {
    if (infoLogin.email === '' || infoLogin.password === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      mutateLogin(infoLogin, {
        onError: (res) => alert(res.response.data.error),
        onSuccess: (data) => {
          if (data.data.data.status === true) {
            setToken(data.data.data.token);
            setInfoLogin(initialInfo);
            navigate('/');
          } else {
            alert('Tài khoản chưa được xác minh.');
          }
        },
      });
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__box">
          <div className="login__pic">
            <img src={`${process.env.PUBLIC_URL}/images/logo-sci.svg`} alt="" />
          </div>
          <div className="login__detail">
            <div className="login__form">
              <div className="login__title">
                <span>ĐĂNG NHẬP</span>
              </div>
              <div className="login__input">
                <input type="text" placeholder="Email người dùng" onChange={handleChange('email')} />
              </div>
              <div className="login__input">
                <input type="password" placeholder="Mật khẩu" onChange={handleChange('password')} />
              </div>
              <div className="login__button" onClick={() => handleSubmit()}>
                <button>Đăng nhập</button>
              </div>
              <div className="login__checkbox">
                <Link to="/register">
                  <p className="login__regist">Đăng ký</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
