import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Courses from './components/Courses';


function App() {
  return (
    <div>
      <Header />

      <div className='container'>
        <div className='main__box'>
          <Sidebar />

          <Routes>
            <Route path='/' element={<Courses />} />

          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
