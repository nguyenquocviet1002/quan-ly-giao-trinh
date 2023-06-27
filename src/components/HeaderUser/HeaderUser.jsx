import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNavigate, Link } from 'react-router-dom';
import { useGetUser } from '@/services/userService';
import './_HeaderUser.scss';
import { useEffect } from 'react';

export default function HeaderUser() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);
  const { dataUser, isSuccessUser } = useGetUser(token);

  useEffect(() => {
    if (isSuccessUser) {
      if (dataUser.data.data.status !== true) {
        navigate('/');
        setToken(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUser]);

  const navigate = useNavigate();
  const handleLogout = () => {
    setToken(null);
    navigate('/');
  };
  return (
    <header className="headerUser">
      <div className="headerUser__box">
        <div class="header__btncheck">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="headerUser__logo">
          <Link to="/">
            <img width="128" height="80" src={`${process.env.PUBLIC_URL}/images/logo-sci.svg`} alt="" />
          </Link>
        </div>
        <div className="headerUser__noti">
          <img width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icon-bell.png`} alt="" />
        </div>
        <div className="headerUser__boxUser">
          <img className="iconUser" width="30" height="30" src={`${process.env.PUBLIC_URL}/images/user.png`} alt="" />
          <div className="headerUser__user">
            {isSuccessUser && (
              <>
                <p>{dataUser.data.data.name}</p>
                <p>{dataUser.data.data.role}</p>
              </>
            )}
          </div>
          <img width="15" height="15" src={`${process.env.PUBLIC_URL}/images/down-arrow.png`} alt="" />
          <div className="headerUser__dropdown">
            <ul>
              {isSuccessUser && (dataUser.data.data.role === 'ADMIN' || dataUser.data.data.role === 'SUB_ADMIN') && (
                <li className="headerUser__itemMenu">
                  <img
                    className="iconUserRole"
                    width="48"
                    height="48"
                    src={`${process.env.PUBLIC_URL}/images/user-role.png`}
                    alt=""
                  />
                  <Link to="/admin" style={{ display: 'block' }}>
                    Admin
                  </Link>
                </li>
              )}

              <li className="headerUser__itemMenu">
                <img
                  className="iconProfile"
                  width="48"
                  height="48"
                  src={`${process.env.PUBLIC_URL}/images/profile.png`}
                  alt=""
                />
                Thông tin cá nhân
              </li>
              <li className="headerUser__itemMenu">
                <img
                  className="iconPass"
                  width="48"
                  height="48"
                  src={`${process.env.PUBLIC_URL}/images/password.png`}
                  alt=""
                />
                Đổi mật khẩu
              </li>
              <li className="headerUser__itemMenu" onClick={() => handleLogout()}>
                <img
                  className="iconLogout"
                  width="48"
                  height="48"
                  src={`${process.env.PUBLIC_URL}/images/log-out.png`}
                  alt=""
                />
                Đăng xuất
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
