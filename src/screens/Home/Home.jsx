import { Outlet } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import HeaderUser from '@/components/HeaderUser';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import './Home.scss';

export default function ScreenHome() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);

  return (
    <div>
      {token !== null ? <HeaderUser /> : <Header />}
      <div className="main__box">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
