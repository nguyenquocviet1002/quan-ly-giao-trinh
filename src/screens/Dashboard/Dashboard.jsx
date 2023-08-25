import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Sidebar from '@/components/DashboardSidebar';
import HeaderUser from '@/components/HeaderUser';
import './Dashboard.scss';
import { useGetUser } from '@/services/userService';

export default function ScreenDashboard() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);
  const { dataUser, isSuccessUser } = useGetUser(token);
  useEffect(() => {
    if (token === null) {
      navigate('/danh-sach-giao-trinh');
    } else if (isSuccessUser && dataUser.data.data.role === 'USER') {
      navigate('/danh-sach-giao-trinh');
    }
  }, [token, dataUser, isSuccessUser, navigate]);
  return (
    <div>
      <HeaderUser />
      <div className="main__box">
        {isSuccessUser && <Sidebar role={dataUser.data.data.role} />}
        <Outlet />
      </div>
    </div>
  );
}
