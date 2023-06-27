import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUploadFile } from '@/services/fileService';
import { useGetLessonById, useUpdateLesson } from '@/services/lessonService';
import { useQueryClient } from '@tanstack/react-query';

export default function ModalEditLesson({ isShowing, hide, element, id }) {
  const { dataLessonById, isSuccessLessonById } = useGetLessonById(id);

  const initialLesson = {
    curriculum_id: '',
    name: '',
    lesson_link: '',
    question_group_link: '',
    status: 'public',
  };

  const [infoLesson, setInfoLesson] = useState(initialLesson);

  useEffect(() => {
    if (isSuccessLessonById) {
      const initialLesson2 = {
        curriculum_id: dataLessonById.data.data.curriculum_id,
        name: dataLessonById.data.data.name,
        lesson_link: dataLessonById.data.data.lesson_link,
        question_group_link: dataLessonById.data.data.question_group_link,
        status: dataLessonById.data.data.status,
      };
      setInfoLesson(initialLesson2);
    }
  }, [isSuccessLessonById, dataLessonById]);

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);

  const queryClient = useQueryClient();

  const { mutateUploadFile } = useUploadFile();
  const { mutateUpdateLesson } = useUpdateLesson(token, id);

  const handleChange = (name) => (event) => {
    setInfoLesson((prev) => ({ ...prev, [name]: event.target.value }));
  };
  const handleSubmitFile = (item, name) => {
    mutateUploadFile(item, {
      onSuccess: (data) =>
        setInfoLesson((prev) => ({
          ...prev,
          [name]: `https://scigroup.com.vn/app/upload/public${data.data.data.file}`,
        })),
    });
  };

  const handleSubmit = () => {
    mutateUpdateLesson(infoLesson, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['lessonByCurr', Number(data.data.data.curriculum_id)] });
        queryClient.invalidateQueries({ queryKey: ['lessonById', Number(data.data.data.id)] });
        hide();
      },
    });
  };

  return isShowing && element === 'ModalEditLesson' && isSuccessLessonById
    ? ReactDOM.createPortal(
        <div className="currChildEdit">
          <div className="container">
            <div className="currChildEdit__box">
              <div className="currChildEdit__hide" onClick={hide}>
                X
              </div>
              <h3 className="currChildEdit__title">Sửa bài giảng</h3>
              <div className="currChildEdit__item">
                <label>Tên bài giảng</label>
                <br />
                <input type="text" defaultValue={dataLessonById.data.data.name} onChange={handleChange('name')} />
              </div>
              <div className="currChildEdit__item">
                <label>Giáo trình</label>
                <br />
                <input
                  type="file"
                  onChange={(event) => {
                    handleSubmitFile(event.target.files[0], 'lesson_link');
                  }}
                />
                <a href={dataLessonById.data.data.lesson_link} target="_blank" rel="noreferrer">
                  {dataLessonById.data.data.lesson_link}
                </a>
              </div>
              <div className="currChildEdit__item">
                <label>Bài tập</label>
                <br />
                <input
                  type="file"
                  onChange={(event) => {
                    handleSubmitFile(event.target.files[0], 'question_group_link');
                  }}
                />
                <a href={dataLessonById.data.data.question_group_link} target="_blank" rel="noreferrer">
                  {dataLessonById.data.data.question_group_link}
                </a>
              </div>
              <div className="currChildEdit__btn" onClick={() => handleSubmit()}>
                <button>Lưu</button>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;
}
