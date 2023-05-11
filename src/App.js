import { Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Courses from './components/Courses';
// import CoursesDetail from './components/CoursesDetail';
// import CurriculumContent from './components/CurriculumContent';
// import Notification from './components/Notification';
// import Login from './components/Login';
// import Register from './components/Register';
// import DashboardSidebar from "./components/DashboardSidebar";
// import Statistical from "./components/Statistical";
// import CurriculumList from "./components/CurriculumList";
// import CurriculumAdd from "./components/CurriculumAdd";
// import Pagination from "./components/Pagination";
// import CurriculumEdit from "./components/CurriculumEdit";
// import CurriculumChildEdit from "./components/CurriculumChildEdit";
// import CurriculumDelete from "./components/CurriculumDelete";
import Students from "./components/Students";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Students />} />
    </Routes>
    // <div className="app-quan-ly-giao-trinh">
    //   <Header />
    //   <Sidebar />
    //   <Courses />
    //   <CoursesDetail />
    //   <CurriculumContent />
    //   <Notification />
    //   <Login />
    //   <Register />
    //   <DashboardSidebar />
    //   <Statistical />
    //   <CurriculumList />
    //   <CurriculumAdd />
    //   <Pagination />
    //   <CurriculumEdit />
    //   <CurriculumChildEdit />
    //   <CurriculumDelete />
    //   <Students />

    // </div>
  );
}

export default App;
