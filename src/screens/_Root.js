import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ScreenRegister from './Register';
import ScreenLogin from './Login';
import ScreenDashboard from './Dashboard';
import CurriculumList from '@/components/CurriculumList';
import CurriculumAdd from '@/components/CurriculumAdd';
import CurriculumEdit from '@/components/CurriculumEdit';
import CurriculumChildEdit from '@/components/CurriculumChildEdit';
import Students from '@/components/Students';
import Users from '@/components/Users';
import UserAdd from '@/components/UserAdd';
import UserEdit from '@/components/UserEdit';
import Home from './Home';
import Courses from '@/components/Courses';
import CoursesDetail from '@/components/CoursesDetail';
import CurriculumStatistics from '@/components/CurriculumStatistics';

const ROLE = 'USER';

const ScreenRoot = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to={'/danh-sach-giao-trinh'} />} />
                <Route path='/login' element={<ScreenLogin />} />
                <Route path='/register' element={<ScreenRegister />} />
                <Route path='/' element={<Home />} >
                    <Route path='/danh-sach-giao-trinh' element={<Courses />} />
                    <Route path='/chi-tiet-giao-trinh' element={<CoursesDetail />} />
                </Route>
                {ROLE === "SUB_ADMIN" ? (<>
                    <Route path='/admin' element={<Navigate to={'giao-trinh'} />} />
                    <Route path='/admin' element={<ScreenDashboard role={ROLE} />}>
                        <Route path='thong-ke-giao-trinh' element={<CurriculumStatistics />} />
                        <Route path='giao-trinh' element={<CurriculumList />} />
                        <Route path='them-giao-trinh' element={<CurriculumAdd />} />
                        <Route path='sua-giao-trinh' element={<CurriculumEdit />} />
                        <Route path='sua-giao-trinh-con' element={<CurriculumChildEdit />} />
                        <Route path='quan-ly-hoc-vien' element={<Students />} />
                    </Route>
                </>) : ROLE === 'ADMIN' ? (<>
                    <Route path='/admin' element={<Navigate to={'giao-trinh'} />} />
                    <Route path='/admin' element={<ScreenDashboard role={ROLE} />}>
                        <Route path='thong-ke-giao-trinh' element={<CurriculumStatistics />} />
                        <Route path='giao-trinh' element={<CurriculumList />} />
                        <Route path='them-giao-trinh' element={<CurriculumAdd />} />
                        <Route path='sua-giao-trinh' element={<CurriculumEdit />} />
                        <Route path='sua-giao-trinh-con' element={<CurriculumChildEdit />} />
                        <Route path='quan-ly-hoc-vien' element={<Students />} />
                        <Route path='danh-sach-tai-khoan' element={<Users />} />
                        <Route path='them-tai-khoan' element={<UserAdd />} />
                        <Route path='sua-tai-khoan' element={<UserEdit />} />
                    </Route>
                </>) : ''}
                <Route path='*' element={<>404</>} />
            </Routes>
        </Router >
    )
}

export default ScreenRoot;