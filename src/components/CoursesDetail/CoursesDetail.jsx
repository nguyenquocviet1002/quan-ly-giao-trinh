import { useEffect, useState } from 'react';
import { useGetLessonByCurr } from '@/services/lessonService';
import { useParams } from 'react-router-dom';
import { useGetCurriculumById, useUpdateCurriculum } from '@/services/curriculumService';
import { useQueryClient } from '@tanstack/react-query';
import './CoursesDetail.scss';

export default function CoursesDetail() {
  const queryClient = useQueryClient();
  const [isVote, setIsVote] = useState(false);
  const { id } = useParams();
  const { dataLessonByCurr, isSuccessLessonByCurr } = useGetLessonByCurr(id);
  const { mutateUpdateCurr } = useUpdateCurriculum(id);
  const { dataCurriculumById } = useGetCurriculumById(id);

  useEffect(() => {
    const dataVoted = JSON.parse(localStorage.getItem('votedDocument'));
    if (dataVoted) {
      dataVoted.map((item) => {
        if (Number(item) === Number(id)) {
          setIsVote(true);
          return true;
        } else {
          return false;
        }
      });
    }
  }, [id]);

  const handleVote = () => {
    const dataVoted = JSON.parse(localStorage.getItem('votedDocument'));
    const { department_id, user_id, vote } = dataCurriculumById.data.data;
    if (!isVote) {
      mutateUpdateCurr(
        {
          vote: vote + 1,
          department_id: department_id,
          user_id: user_id,
        },
        {
          onSuccess: (data) => {
            setIsVote(true);
            if (dataVoted) {
              localStorage.setItem('votedDocument', JSON.stringify([...dataVoted, data.data.data.id]));
            } else {
              localStorage.setItem('votedDocument', JSON.stringify([data.data.data.id]));
            }
            queryClient.invalidateQueries({
              queryKey: ['curriculumsDepartment', Number(data.data.data.department_id)],
            });
            queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(0)] });
            queryClient.invalidateQueries({ queryKey: ['curriculumsById', Number(data.data.data.id)] });
          },
        },
      );
    } else {
      mutateUpdateCurr(
        {
          vote: vote - 1,
          department_id: department_id,
          user_id: user_id,
        },
        {
          onSuccess: (data) => {
            setIsVote(false);
            const index = dataVoted.indexOf(data.data.data.id);
            if (index > -1) {
              dataVoted.splice(index, 1);
              localStorage.setItem('votedDocument', JSON.stringify(dataVoted));
            }
            queryClient.invalidateQueries({
              queryKey: ['curriculumsDepartment', Number(data.data.data.department_id)],
            });
            queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(0)] });
            queryClient.invalidateQueries({ queryKey: ['curriculumsById', Number(data.data.data.id)] });
          },
        },
      );
    }
  };
  return (
    <div className="coursesDetail">
      <div className="coursesDetail__box">
        <div className="coursesDetail__title">
          <div className="coursesDetail__titleLeft">
            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} alt="" />
            Tài liệu Kangnam
          </div>
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
        <div className="coursesDetail__titleRight">
          <span>Thích tài liệu</span>
          <i className={`icon-heart-1 ${isVote ? 'active' : ''}`} onClick={handleVote}></i>
        </div>
      </div>
    </div>
  );
}
