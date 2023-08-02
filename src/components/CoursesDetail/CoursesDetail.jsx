import { useGetLessonByCurr } from '@/services/lessonService';
import './_CoursesDetail.scss';
import { useParams } from 'react-router-dom';

export default function CoursesDetail() {
  const { id } = useParams();
  const { dataLessonByCurr, isSuccessLessonByCurr } = useGetLessonByCurr(id);

  return (
    <div className="coursesDetail">
      <div className="coursesDetail__box">
        <div className="coursesDetail__title">
          <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} alt="" />
          Tài liệu Kangnam
        </div>
        <div className="coursesDetail__list">
          <table className="table table-striped table-bordered coursesDetail__table">
            <thead>
              <tr>
                <th>Tên tài liệu</th>
                <th>Link download</th>
                <th>Link câu hỏi</th>
              </tr>
            </thead>
            <tbody>
              {isSuccessLessonByCurr &&
                dataLessonByCurr.data.data.map((item, index) => (
                  <tr key={index}>
                    <td className="currList__box">{item.name}</td>
                    <td className="currList__box">
                      <a href={item.lesson_link}>Tải về</a>
                    </td>
                    <td className="currList__box">
                      <a href={item.question_group_link}>Tải về</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
