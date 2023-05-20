import { Link } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import './CoursesItem.scss';

export default function CoursesItem({ data }) {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);

  return token !== null ? (
    <div className="courses__item">
      <img width="800" height="500" src={data.images} alt="" />
      <p className="courses__name">{data.name}</p>
      <Link to={`/chi-tiet-giao-trinh/${data.id}`}>
        <button className="courses__btn">Xem chi tiết</button>
      </Link>
    </div>
  ) : data.status === 'public' ? (
    <div className="courses__item">
      <img width="800" height="500" src={data.images} alt="" />
      <p className="courses__name">{data.name}</p>
      <Link to={`/chi-tiet-giao-trinh/${data.id}`}>
        <button className="courses__btn">Xem chi tiết</button>
      </Link>
    </div>
  ) : (
    ''
  );
}
