import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNavigate, Link } from 'react-router-dom';
import { useGetUser } from '@/services/userService';
import { useEffect } from 'react';
import './HeaderUser.scss';

export default function HeaderUser() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);
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
        <div className="header__btncheck">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header__hollow"></div>
        <div className="headerUser__noti"></div>
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
                  <i className="icon-user-4"></i>
                  <Link to="/admin" style={{ display: 'block' }}>
                    Admin
                  </Link>
                </li>
              )}

              <li className="headerUser__itemMenu">
                <i className="icon-user-4"></i>
                <Link to="/admin/info" style={{ display: 'block' }}>
                  Hồ sơ cá nhân
                </Link>
              </li>
              <li className="headerUser__itemMenu" onClick={() => handleLogout()}>
                <i className="icon-logout"></i>
                Đăng xuất
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
