import { useParams } from 'react-router-dom';
import { useGetCurriculumDepartment } from '@/services/curriculumService';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetDepartment } from '@/services/departmentService';
import { filterById } from '@/utils/filterById';
import CoursesItem from '../CoursesItem';
import './Courses.scss';

export default function Courses() {
  let { id } = useParams();
  if (id === undefined) {
    id = '';
  }

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);

  const { dataCurriculumDepartment } = useGetCurriculumDepartment({ id: id, name: '' });
  const { dataDepartment } = useGetDepartment();

  return (
    <div className="courses">
      <div className="container">
        <div className="courses__main">
          {id === ''
            ? dataCurriculumDepartment && (
                <>
                  <div className="courses__title">
                    <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} alt="" />
                    Tất cả chuyên mục
                  </div>
                  <div className="courses__box">
                    {dataCurriculumDepartment.data.map((item, index) =>
                      token !== null ? (
                        <CoursesItem key={index} data={item} />
                      ) : item.status === 'public' ? (
                        <CoursesItem key={index} data={item} />
                      ) : (
                        ''
                      ),
                    )}
                  </div>
                </>
              )
            : dataCurriculumDepartment &&
              dataDepartment && (
                <>
                  <div className="courses__title">
                    <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} alt="" />
                    Chuyên mục {filterById(id, dataDepartment.data.data)}
                  </div>
                  <div className="courses__box">
                    {dataCurriculumDepartment.data.map((item, index) =>
                      token !== null ? (
                        <CoursesItem key={index} data={item} />
                      ) : item.status === 'public' ? (
                        <CoursesItem key={index} data={item} />
                      ) : (
                        ''
                      ),
                    )}
                  </div>
                </>
              )}
        </div>
      </div>
    </div>
  );
}
