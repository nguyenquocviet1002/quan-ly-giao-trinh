import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUploadImage } from '@/services/fileService';
import { useGetCurriculumById } from '@/services/curriculumService';
import './_CurriculumEdit.scss';

export default function CurriculumEdit() {
  const { id } = useParams();
  const { dataCurriculumById, isSuccessCurriculumById } = useGetCurriculumById(id);

  let initialCurr = {
    department_id: '',
    user_id: '',
    name: '',
    images: '',
    status: '',
    description: '',
  };

  const [infoCurr, setInfoCurr] = useState(initialCurr);

  useEffect(() => {
    if (isSuccessCurriculumById) {
      let initialCurr2 = {
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

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateUploadImage } = useUploadImage();

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
    console.log(infoCurr);
    // mutateCreateCurr(infoCurr, {
    //   onSuccess: (data) => {
    //     queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', data.data.data.department_id] });
    //     setInfoCurr(initialCurr);
    //     navigate('/admin');
    //   },
    // });
  };

  return (
    isSuccessCurriculumById && (
      <div className="currEdit">
        <div className="currEdit__mainBox">
          <div className="currEdit__name">
            <p>{dataCurriculumById.data.data.name}</p>
            <div className="currEdit__icon" onClick={handleSubmit}>
              <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
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
                <img src={dataCurriculumById.data.data.images} alt="" />
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
            </div>
            <div className="currEdit__box2">
              <p>Nội dung</p>
              <textarea
                cols="50"
                rows="6"
                defaultValue={dataCurriculumById.data.data.description}
                onChange={handleChange('description')}
              ></textarea>
            </div>
          </div>
          <div className="currEdit__list">
            <div className="currEdit__list--item">
              <p>1. Toán tử logic trong JS</p>
              <div className="currEdit__list--action">
                <Link to={'/sua-giao-trinh-con'}>
                  <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                </Link>
                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </div>
            <div className="currEdit__list--item">
              <p>2. Toán tử logic trong JS</p>
              <div className="currEdit__list--action">
                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </div>
            <div className="currEdit__list--item">
              <p>3. Toán tử logic trong JS</p>
              <div className="currEdit__list--action">
                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </div>
            <div className="currEdit__list--item">
              <p>4. Toán tử logic trong JS</p>
              <div className="currEdit__list--action">
                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </div>
            <div className="currEdit__list--item">
              <p>5. Toán tử logic trong JS</p>
              <div className="currEdit__list--action">
                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </div>
          </div>
          <div className="currEdit__addItem">
            <img src={`${process.env.PUBLIC_URL}/images/plus.png`} alt="" />
            Thêm mới
          </div>
        </div>
      </div>
    )
  );
}
