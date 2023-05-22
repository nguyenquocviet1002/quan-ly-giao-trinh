import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetCurriculumDepartment } from '@/services/curriculumService';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetDepartment } from '@/services/departmentService';
import { filterById } from '@/utils/filterById';
import CoursesItem from '../CoursesItem';
import 'swiper/css';
import './_Courses.scss';

export default function Courses() {
  let { id } = useParams();
  if (id === undefined) {
    id = '';
  }

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);

  const { dataCurriculumDepartment } = useGetCurriculumDepartment(id);
  const { dataDepartment } = useGetDepartment();

  return (
    <div className="courses">
      <div className="container">
        {id === ''
          ? dataCurriculumDepartment && (
              <>
                <div className="courses__title">
                  <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} alt="" />
                  Tất cả giáo trình
                </div>
                <div className="courses__box">
                  <Swiper spaceBetween={50} slidesPerView={4}>
                    {dataCurriculumDepartment.data.data.map((item, index) =>
                      token !== null ? (
                        <SwiperSlide key={index}>
                          <CoursesItem key={index} data={item} />
                        </SwiperSlide>
                      ) : item.status === 'public' ? (
                        <SwiperSlide key={index}>
                          <CoursesItem key={index} data={item} />
                        </SwiperSlide>
                      ) : (
                        ''
                      ),
                    )}
                  </Swiper>
                </div>
              </>
            )
          : dataCurriculumDepartment &&
            dataDepartment && (
              <>
                <div className="courses__title">
                  <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} alt="" />
                  Giáo trình {filterById(id, dataDepartment.data.data)}
                </div>
                <div className="courses__box">
                  <Swiper spaceBetween={50} slidesPerView={4}>
                    {dataCurriculumDepartment.data.data.map((item, index) =>
                      token !== null ? (
                        <SwiperSlide key={index}>
                          <CoursesItem key={index} data={item} />
                        </SwiperSlide>
                      ) : item.status === 'public' ? (
                        <SwiperSlide key={index}>
                          <CoursesItem key={index} data={item} />
                        </SwiperSlide>
                      ) : (
                        ''
                      ),
                    )}
                  </Swiper>
                </div>
              </>
            )}
      </div>
    </div>
  );
}
