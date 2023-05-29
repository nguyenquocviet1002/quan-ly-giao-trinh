import ReactDOM from 'react-dom';
import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUploadFile } from '@/services/fileService';
import { useCreateLesson } from '@/services/lessonService';
import { useQueryClient } from '@tanstack/react-query';

export default function ModalAddLesson({ isShowing, hide, element, id }) {
  const initialLesson = {
    curriculum_id: id,
    name: '',
    lesson_link: '',
    question_group_link: '',
    status: 'public',
  };

  const [infoLesson, setInfoLesson] = useState(initialLesson);

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);

  const queryClient = useQueryClient();

  const { mutateUploadFile } = useUploadFile();
  const { mutateCreateLesson } = useCreateLesson(token);

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
    mutateCreateLesson(infoLesson, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['lessonByCurr', Number(id)] });
        setInfoLesson(initialLesson);
        hide();
      },
    });
  };

  return isShowing && element === 'ModalAddLesson'
    ? ReactDOM.createPortal(
        <div className="currChildEdit">
          <div className="container">
            <div className="currChildEdit__box">
              <div onClick={hide}>X</div>
              <h3 className="currChildEdit__title">Thêm bài giảng</h3>
              <div className="currChildEdit__item">
                <label>Tên bài giảng</label>
                <br />
                <input type="text" onChange={handleChange('name')} />
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
