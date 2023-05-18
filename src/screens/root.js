import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScreenLogin from './Login';
import ScreenDashboard from './Dashboard';
import CurriculumList from '@/components/CurriculumList';
import Register from '@/components/Register';
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

const ScreenRoot = () => {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<ScreenLogin />} />
                <Route path='register' element={<Register />} />
                <Route path='/' element={<Home />} >
                    <Route path='/danh-sach-giao-trinh' element={<Courses />} />
                    <Route path='/chi-tiet-giao-trinh' element={<CoursesDetail />} />
                </Route>
                <Route path='/' element={<ScreenDashboard />}>
                    <Route path='/giao-trinh' element={<CurriculumList />} />
                    <Route path='/them-giao-trinh' element={<CurriculumAdd />} />
                    <Route path='/sua-giao-trinh' element={<CurriculumEdit />} />
                    <Route path='/sua-giao-trinh-con' element={<CurriculumChildEdit />} />
                    <Route path='/quan-ly-hoc-vien' element={<Students />} />
                    <Route path='/danh-sach-tai-khoan' element={<Users />} />
                    <Route path='/them-tai-khoan' element={<UserAdd />} />
                    <Route path='/sua-tai-khoan' element={<UserEdit />} />
                </Route>

            </Routes>
        </Router >
    )
}

export default ScreenRoot;