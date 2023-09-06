import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ScreenRegister from './Register';
import ScreenLogin from './Login';
import ScreenHome from './Home';
import ScreenDashboard from './Dashboard';
import CurriculumList from '@/components/CurriculumList';
import CurriculumAdd from '@/components/CurriculumAdd';
import CurriculumEdit from '@/components/CurriculumEdit';
import CurriculumSee from '@/components/CurriculumSee';
import CurriculumChildEdit from '@/components/CurriculumChildEdit';
import Students from '@/components/Students';
import Users from '@/components/Users';
import UserAdd from '@/components/UserAdd';
import Courses from '@/components/Courses';
import CoursesDetail from '@/components/CoursesDetail';
import CurriculumStatistics from '@/components/CurriculumStatistics';
import Info from '@/components/Info';
import ChangePassword from '@/components/ChangePassword';

const ScreenRoot = () => {
    return (
        <Router basename='/app/documents'>
            <Routes>
                <Route path='/' element={<Navigate to={'/danh-sach-giao-trinh'} />} />
                <Route path='/login' element={<ScreenLogin />} />
                <Route path='/register' element={<ScreenRegister />} />
                <Route path='/' element={<ScreenHome />} >
                    <Route path='/danh-sach-giao-trinh' element={<Courses />} />
                    <Route path='/danh-sach-giao-trinh/:id' element={<Courses />} />
                    <Route path='/chi-tiet-giao-trinh/:id' element={<CoursesDetail />} />
                </Route>
                <Route path='/admin' element={<Navigate to={'giao-trinh'} />} />
                <Route path='/admin' element={<ScreenDashboard />}>
                    <Route path='thong-ke-giao-trinh' element={<CurriculumStatistics />} />
                    <Route path='giao-trinh' element={<CurriculumList />} />
                    <Route path='them-giao-trinh' element={<CurriculumAdd />} />
                    <Route path='sua-giao-trinh/:id' element={<CurriculumEdit />} />
                    <Route path='xem-giao-trinh/:id' element={<CurriculumSee />} />
                    <Route path='sua-bai-hoc/:id' element={<CurriculumChildEdit />} />
                    <Route path='quan-ly-hoc-vien' element={<Students />} />
                    <Route path='danh-sach-tai-khoan' element={<Users />} />
                    <Route path='them-tai-khoan' element={<UserAdd />} />
                    <Route path='info' element={<Info />} />
                    <Route path='change-password' element={<ChangePassword />} />
                </Route>
                <Route path='*' element={<>404</>} />
            </Routes>
        </Router >
    )
}

export default ScreenRoot;