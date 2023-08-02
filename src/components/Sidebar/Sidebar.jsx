/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useGetDepartment } from '@/services/departmentService';
import './_Sidebar.scss';

export default function Sidebar() {
  const { dataDepartment, isSuccessDepartment } = useGetDepartment();

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <img width="128" height="80" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
        </Link>
      </div>
      <ul>
        <li className="sidebar__item">
          <Link to="/danh-sach-giao-trinh">
            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/bookmark.png`} alt="" />
            Tất cả chuyên mục
          </Link>
        </li>
        {isSuccessDepartment &&
          dataDepartment.data.data.map((item, index) => (
            <li key={index} className="sidebar__item">
              <Link to={`danh-sach-giao-trinh/${item.id}`}>
                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} alt="" />
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
