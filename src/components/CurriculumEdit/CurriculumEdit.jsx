import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUploadImage } from '@/services/fileService';
import { useGetCurriculumById, useUpdateCurriculum } from '@/services/curriculumService';
import { useDeleteLesson, useGetLessonByCurr } from '@/services/lessonService';
import { useModal } from '@/hooks/useModal';
import ModalAddLesson from '../ModalAddLesson';
import './_CurriculumEdit.scss';
import ModalEditLesson from '../ModalEditLesson';

export default function CurriculumEdit() {
  const { id } = useParams();
  const { dataCurriculumById, isSuccessCurriculumById } = useGetCurriculumById(id);

  const initialCurr = {
    department_id: '',
    user_id: '',
    name: '',
    images: '',
    status: '',
    description: '',
  };

  const [infoCurr, setInfoCurr] = useState(initialCurr);
  const [idLesson, setIdLesson] = useState('');

  useEffect(() => {
    if (isSuccessCurriculumById) {
      const initialCurr2 = {
        department_id: dataCurriculumById.data.data.department_id,
        user_id: dataCurriculumById.data.data.user_id,
        name: dataCurriculumById.data.data.name,
        images: dataCurriculumById.data.data.images,
        status: dataCurriculumById.data.data.status,
        description: dataCurriculumById.data.data.description,
      };
      setInfoCurr(initialCurr2);
    }
  }, [isSuccessCurriculumById, dataCurriculumById]);

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);
  const { isShowing, cpn, toggle } = useModal();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { dataLessonByCurr, isSuccessLessonByCurr } = useGetLessonByCurr(id);
  const { mutateUploadImage } = useUploadImage();
  const { mutateUpdateCurr } = useUpdateCurriculum(token, id);
  const { mutateDeleteLesson } = useDeleteLesson(token);

  const handleChange = (name) => (event) => {
    setInfoCurr((prev) => ({ ...prev, [name]: event.target.value }));
  };
  const handleSubmitImage = (item) => {
    mutateUploadImage(item, {
      onSuccess: (data) =>
        setInfoCurr((prev) => ({
          ...prev,
          images: `https://scigroup.com.vn/app/upload/public${data.data.data.image}`,
        })),
    });
  };

  const handleSubmit = () => {
    mutateUpdateCurr(infoCurr, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(data.data.data.department_id)] });
        queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(0)] });
        queryClient.invalidateQueries({ queryKey: ['curriculumsById', Number(data.data.data.id)] });
        navigate('/admin');
      },
    });
  };

  const handleDelete = (id) => {
    mutateDeleteLesson(id, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['lessonByCurr', Number(data.data.data.curriculum_id)] });
      },
    });
  };

  return (
    isSuccessCurriculumById && (
      <div className="currEdit">
        <div className="currEdit__mainBox">
          <div className="currEdit__name">
            <p>{dataCurriculumById.data.data.name}</p>
            <div className="currEdit__icon" onClick={handleSubmit}>
              <button>Lưu</button>
            </div>
          </div>
          <div className="currEdit__box">
            <div className="currEdit__box1">
              <div className="currEdit__item">
                <label>Hình ảnh</label>
                <input
                  type="file"
                  onChange={(e) => {
                    handleSubmitImage(e.target.files[0]);
                  }}
                ></input>
                <img className="imgCourseFile" src={dataCurriculumById.data.data.images} alt="" />
              </div>
              <div className="currEdit__item">
                <label>Tên giáo trình</label>
                <input type="text" defaultValue={dataCurriculumById.data.data.name} onChange={handleChange('name')} />
              </div>
              <div className="currEdit__item">
                <label>Trạng thái</label>
                <select defaultValue={dataCurriculumById.data.data.status} onChange={handleChange('status')}>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div className="currEdit__item">
                <label>Nội dung</label>
                <textarea
                  cols="50"
                  rows="6"
                  defaultValue={dataCurriculumById.data.data.description}
                  onChange={handleChange('description')}
                ></textarea>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="currEdit__list">
            {isSuccessLessonByCurr &&
              dataLessonByCurr.data.data.map((item, index) => (
                <div key={index} className="currEdit__list--item">
                  <p>{item.name}</p>
                  <div className="currEdit__list--action">
                    <button
                      onClick={() => {
                        toggle('ModalEditLesson');
                        setIdLesson(item.id);
                      }}
                    >
                      <img src={`${process.env.PUBLIC_URL}/images/edit-2.png`} alt="" />
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      <img src={`${process.env.PUBLIC_URL}/images/trash-2.png`} alt="" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="currEdit__addItem" onClick={() => toggle('ModalAddLesson')}>
            <img src={`${process.env.PUBLIC_URL}/images/plus.png`} alt="" />
            Thêm mới
          </div>
        </div>
        <ModalAddLesson isShowing={isShowing} hide={toggle} element={cpn} id={id} />
        {isShowing && cpn === 'ModalEditLesson' && (
          <ModalEditLesson isShowing={isShowing} hide={toggle} element={cpn} id={idLesson} />
        )}
      </div>
    )
  );
}
