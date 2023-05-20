import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/DashboardSidebar';
import './_Dashboard.scss';
import HeaderUser from '@/components/HeaderUser';

export default function ScreenDashboard({ role }) {
  return (
    <div>
      <HeaderUser />
      <div className="main__box">
        <Sidebar role={role} />
        <Outlet />
      </div>
    </div>
  );
}
