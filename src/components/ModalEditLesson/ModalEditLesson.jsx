import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUploadFile } from '@/services/fileService';
import { useGetLessonById, useUpdateLesson } from '@/services/lessonService';
import { useQueryClient } from '@tanstack/react-query';
import { useGetCurriculumById, useUpdateCurriculum } from '@/services/curriculumService';

export default function ModalEditLesson({ isShowing, hide, element, id, idCurr }) {
  const [typeFile, setTypeFile] = useState('0');
  const [typeWork, setTypeWork] = useState('0');
  const [size, setSize] = useState(0);

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
  const [token, setToken] = useLocalStorage('token-document', null);

  const queryClient = useQueryClient();

  const { mutateUploadFile } = useUploadFile();
  const { mutateUpdateLesson } = useUpdateLesson(token, id);
  const { dataCurriculumById } = useGetCurriculumById(idCurr);
  const { mutateUpdateCurr } = useUpdateCurriculum(idCurr);

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
    mutateUpdateLesson(infoLesson, {
      onSuccess: (data) => {
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
        queryClient.invalidateQueries({ queryKey: ['lessonByCurr', Number(data.data.data.curriculum_id)] });
        queryClient.invalidateQueries({ queryKey: ['lessonById', Number(data.data.data.id)] });
        hide();
        setSize(0);
      },
      onError: (err) => alert('Tên bài giảng không được để trống'),
    });
  };

  return isShowing && element === 'ModalEditLesson' && isSuccessLessonById
    ? ReactDOM.createPortal(
        <div className="currChildEdit">
          <div className="container">
            <div className="currChildEdit__box">
              <div className="currChildEdit__hide" onClick={hide}>
                <img src={`${process.env.PUBLIC_URL}/images/icon-hide.png`} alt="" />
              </div>
              <h3 className="currChildEdit__title">Sửa bài giảng</h3>
              <div className="currChildEdit__item">
                <i className="icon-book"></i>
                <label>Tên bài giảng</label>
                <br />
                <input type="text" defaultValue={dataLessonById.data.data.name} onChange={handleChange('name')} />
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
                <select onChange={(e) => setTypeFile(e.target.value)} value={typeFile}>
                  <option value="0">File</option>
                  <option value="1">Link</option>
                </select>
                <a href={dataLessonById.data.data.lesson_link} target="_blank" rel="noreferrer">
                  {dataLessonById.data.data.lesson_link}
                </a>
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
                <select onChange={(e) => setTypeWork(e.target.value)} value={typeWork}>
                  <option value="0">File</option>
                  <option value="1">Link</option>
                </select>
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
