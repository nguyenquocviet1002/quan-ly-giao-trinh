import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/DashboardSidebar';
import './dashboard.scss';

const ScreenDashboard = ({ role }) => {
    return (
        <div>
            <h3>Header Admin</h3>
            <div className='main__box'>
                <Sidebar role={role} />
                <Outlet />
            </div>
        </div>
    )
}

export default ScreenDashboard;