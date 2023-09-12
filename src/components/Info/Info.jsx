import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetUser } from '@/services/userService';
import { useChangePassword } from '@/services/authService';
import './Info.scss';

export default function Info() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);
  const initialBody = {
    id: '',
    password: '',
    c_password: '',
    token: token,
  };
  const [bodyPass, setBodyPass] = useState(initialBody);
  const { dataUser, isSuccessUser } = useGetUser(token);
  const { mutateChangePassword } = useChangePassword();
  useEffect(() => {
    if (isSuccessUser) {
      setBodyPass({ ...bodyPass, id: dataUser.data.data.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccessUser, dataUser]);
  const handleChange = (e) => {
    setBodyPass({ ...bodyPass, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (!bodyPass.password || !bodyPass.c_password) {
      alert('Mật khẩu không được để trống');
    } else if (bodyPass.password !== bodyPass.c_password) {
      alert('Mật khẩu không trùng khớp');
    } else {
      mutateChangePassword(bodyPass, {
        onSuccess: () => {
          alert('Đổi mật khẩu thành công');
          setBodyPass(initialBody);
        },
        onError: (data) => alert(data.message),
      });
    }
  };

  return (
    <>
      {isSuccessUser && (
        <div className="currList">
          <div className="info__heading">Thông tin tài khoản</div>
          <div className="row">
            <div className="col-md-6">
              <div className="info__col">Tên: {dataUser.data.data.name}</div>
            </div>
            <div className="col-md-6">
              <div className="info__col">Email: {dataUser.data.data.email}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="info__col">
                Trạng thái tài khoản: {dataUser.data.data.status === true ? 'Đã xác nhận' : 'Chưa xác nhận'}
              </div>
            </div>
            <div className="col-md-6">
              <div className="info__col">
                Ngày tạo: {new Date(dataUser.data.data.created_at).toLocaleString('en-GB')}
              </div>
            </div>
          </div>
          <div className="info__line"></div>
          <div className="info__heading">Đổi mật khẩu</div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="pass">Mật khẩu</label>
              <input
                id="pass"
                name="password"
                type="text"
                className="info__input"
                placeholder="Nhập mật khẩu tại đây"
                value={bodyPass.password}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="cpass">Xác nhận mật khẩu</label>
              <input
                id="cpass"
                name="c_password"
                type="text"
                className="info__input"
                placeholder="Nhập mật khẩu xác nhận tại đây"
                value={bodyPass.c_password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button className="info__submitPass" onClick={handleSubmit}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
