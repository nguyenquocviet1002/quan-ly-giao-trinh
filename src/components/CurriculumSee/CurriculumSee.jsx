import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetCurriculumById } from '@/services/curriculumService';
import { useDeleteLesson, useGetLessonByCurr } from '@/services/lessonService';
import { useModal } from '@/hooks/useModal';
import ModalAddLesson from '../ModalAddLesson';
import './_CurriculumSee.scss';
import ModalEditLesson from '../ModalEditLesson';

export default function CurriculumEdit() {
  const { id } = useParams();
  const { dataCurriculumById, isSuccessCurriculumById } = useGetCurriculumById(id);

  const [idLesson, setIdLesson] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);
  const { isShowing, cpn, toggle } = useModal();

  const queryClient = useQueryClient();

  const { dataLessonByCurr, isSuccessLessonByCurr } = useGetLessonByCurr(id);
  const { mutateDeleteLesson } = useDeleteLesson(token);

  const handleDelete = (ids) => {
    mutateDeleteLesson(ids, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['lessonByCurr', Number(id)] });
      },
    });
  };

  return (
    isSuccessCurriculumById && (
      <div className="currSee">
        <div className="currSee__mainBox">
          <div className="currSee__name">
            <p>{dataCurriculumById.data.data.name}</p>
          </div>
          {/*  */}
          <div className="currSee__list">
            {isSuccessLessonByCurr &&
              dataLessonByCurr.data.data.map((item, index) => (
                <div key={index} className="currSee__list--item">
                  <p>{item.name}</p>
                  <div className="currSee__list--action">
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
          <div className="currSee__addItem" onClick={() => toggle('ModalAddLesson')}>
            <img src={`${process.env.PUBLIC_URL}/images/plus.png`} alt="" />
            Thêm mới
          </div>
        </div>
        <ModalAddLesson isShowing={isShowing} hide={toggle} element={cpn} id={id} />
        {isShowing && cpn === 'ModalEditLesson' && (
          <ModalEditLesson isShowing={isShowing} hide={toggle} element={cpn} id={idLesson} idCurr={id} />
        )}
      </div>
    )
  );
}
