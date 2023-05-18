import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/DashboardSidebar';
import './dashboard.scss';

const ScreenDashboard = () => {
    return (
        <div>
            <Header />


            <div className='main__box'>
                <Sidebar />

                <Outlet />
            </div>

        </div>
    )
}

export default ScreenDashboard;