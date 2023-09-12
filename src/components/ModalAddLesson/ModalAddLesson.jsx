import ReactDOM from 'react-dom';
import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUploadFile } from '@/services/fileService';
import { useCreateLesson } from '@/services/lessonService';
import { useQueryClient } from '@tanstack/react-query';
import { useGetCurriculumById, useUpdateCurriculum } from '@/services/curriculumService';

export default function ModalAddLesson({ isShowing, hide, element, id }) {
  const initialLesson = {
    curriculum_id: id,
    name: '',
    lesson_link: '',
    question_group_link: '',
    status: 'public',
  };

  const [infoLesson, setInfoLesson] = useState(initialLesson);
  const [typeFile, setTypeFile] = useState('0');
  const [typeWork, setTypeWork] = useState('0');
  const [size, setSize] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);

  const queryClient = useQueryClient();

  const { mutateUploadFile } = useUploadFile();
  const { mutateCreateLesson } = useCreateLesson(token);
  const { dataCurriculumById } = useGetCurriculumById(id);
  const { mutateUpdateCurr } = useUpdateCurriculum(id);

  const handleChange = (name) => (event) => {
    setInfoLesson((prev) => ({ ...prev, [name]: event.target.value }));
  };
  const handleSubmitFile = (item, name) => {
    mutateUploadFile(item, {
      onSuccess: (data) => {
        setSize(size + Number(data.data.data.size));
        setInfoLesson((prev) => ({
          ...prev,
          [name]: `https://scigroup.com.vn/app/upload/public${data.data.data.file}`,
        }));
      },
      onError: (err) => alert(err.response.data.message),
    });
  };

  const handleSubmit = () => {
    mutateCreateLesson(infoLesson, {
      onSuccess: () => {
        if (size > 0) {
          const totalSize = Number(dataCurriculumById.data.data.size) + size;
          mutateUpdateCurr(
            {
              size: totalSize,
              department_id: dataCurriculumById.data.data.department_id,
              user_id: dataCurriculumById.data.data.user_id,
            },
            {
              onSuccess: (data) => {
                queryClient.invalidateQueries({
                  queryKey: ['curriculumsDepartment', Number(data.data.data.department_id)],
                });
                queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(0)] });
                queryClient.invalidateQueries({ queryKey: ['curriculumsById', Number(data.data.data.id)] });
              },
            },
          );
        }
        queryClient.invalidateQueries({ queryKey: ['lessonByCurr', Number(id)] });
        setInfoLesson(initialLesson);
        hide();
      },
      onError: (err) => alert('Tên bài giảng không được để trống'),
    });
  };

  return isShowing && element === 'ModalAddLesson'
    ? ReactDOM.createPortal(
        <div className="currChildEdit">
          <div className="container">
            <div className="currChildEdit__box">
              <div className="currChildEdit__hide" onClick={hide}>
                <img src={`${process.env.PUBLIC_URL}/images/icon-hide.png`} alt="" />
              </div>
              <h3 className="currChildEdit__title">Thêm bài giảng</h3>
              <div className="currChildEdit__item">
                <i className="icon-book"></i>
                <label>Tên bài giảng</label>
                <br />
                <input type="text" onChange={handleChange('name')} />
              </div>
              <div className="currChildEdit__item">
                <i className="icon-book"></i>
                <label>Tải tài liệu</label>
                <br />
                {typeFile === '0' ? (
                  <input
                    type="file"
                    onChange={(event) => {
                      handleSubmitFile(event.target.files[0], 'lesson_link');
                    }}
                  />
                ) : (
                  <input type="text" onChange={(e) => setInfoLesson({ ...infoLesson, lesson_link: e.target.value })} />
                )}
                <select onChange={(e) => setTypeFile(e.target.value)}>
                  <option value="0">File</option>
                  <option value="1">Link</option>
                </select>
              </div>
              <div className="currChildEdit__item">
                <i className="icon-book"></i>
                <label>Bài tập</label>
                <br />
                {typeWork === '0' ? (
                  <input
                    type="file"
                    onChange={(event) => {
                      handleSubmitFile(event.target.files[0], 'question_group_link');
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    onChange={(e) => setInfoLesson({ ...infoLesson, question_group_link: e.target.value })}
                  />
                )}
                <select onChange={(e) => setTypeWork(e.target.value)}>
                  <option value="0">File</option>
                  <option value="1">Link</option>
                </select>
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
