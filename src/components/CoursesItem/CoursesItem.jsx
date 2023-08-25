import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUpdateCurriculum } from '@/services/curriculumService';
import { useQueryClient } from '@tanstack/react-query';
import './CoursesItem.scss';

export default function CoursesItem({ data }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);
  const { mutateUpdateCurr } = useUpdateCurriculum(data.id);
  const handleView = () => {
    const countView = data.view + 1;
    mutateUpdateCurr(
      {
        view: countView,
        department_id: data.department_id,
        user_id: data.user_id,
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(data.data.data.department_id)] });
          queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(0)] });
          queryClient.invalidateQueries({ queryKey: ['curriculumsById', Number(data.data.data.id)] });
          navigate(`/chi-tiet-giao-trinh/${data.data.data.id}`);
        },
      },
    );
  };

  return token !== null ? (
    <div className="courses__item">
      <img width="800" height="500" src={data.images} alt="" />
      <p className="courses__name">{data.name}</p>
      <div className="courses__cta">
        <div>
          <i className="icon-eye"></i>
          <span>{data.view}</span>
        </div>
        <div>
          <i className="icon-heart-1"></i>
          <span>{data.vote}</span>
        </div>
      </div>
      <button className="courses__btn" onClick={handleView}>
        Xem chi tiết
      </button>
    </div>
  ) : data.status === 'public' ? (
    <div className="courses__item">
      <img width="800" height="500" src={data.images} alt="" />
      <p className="courses__name">{data.name}</p>
      <div className="courses__cta">
        <div>
          <i className="icon-eye"></i>
          <span>{data.view}</span>
        </div>
        <div>
          <i className="icon-heart-1"></i>
          <span>{data.vote}</span>
        </div>
      </div>
      <button className="courses__btn" onClick={handleView}>
        Xem chi tiết
      </button>
    </div>
  ) : (
    ''
  );
}
