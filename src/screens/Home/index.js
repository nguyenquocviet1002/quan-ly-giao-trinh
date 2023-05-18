import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import './home.scss';

const Home = () => {
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

export default Home;