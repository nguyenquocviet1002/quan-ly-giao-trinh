import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetUser } from '@/services/userService';
import { useUploadImage } from '@/services/fileService';
import { useCreateCurriculum } from '@/services/curriculumService';
import './CurriculumAdd.scss';

export default function CurriculumAdd() {
  const initialCurr = {
    department_id: '',
    user_id: '',
    name: '',
    images: 'https://i.imgur.com/RGX4mrq.png',
    status: 'public',
    description: '',
    size: 0,
    vote: 0,
    view: 0,
  };

  const [infoCurr, setInfoCurr] = useState(initialCurr);

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { dataUser } = useGetUser(token);
  const { mutateUploadImage } = useUploadImage();
  const { mutateCreateCurr } = useCreateCurriculum(token);
  useEffect(() => {
    setInfoCurr((prev) => ({
      ...prev,
      department_id: dataUser.data.data.department_id,
      user_id: dataUser.data.data.id,
    }));
  }, [dataUser]);

  const handleChange = (name) => (event) => {
    setInfoCurr((prev) => ({ ...prev, [name]: event.target.value }));
  };
  const handleSubmitImage = (item) => {
    if (item) {
      mutateUploadImage(item, {
        onSuccess: (data) => {
          setInfoCurr((prev) => ({
            ...prev,
            images: `https://scigroup.com.vn/app/upload/public${data.data.data.image}`,
          }));
        },
        onError: () => {
          alert('Ảnh vượt quá dung lượng cho phép!!!(1mb)');
        },
      });
    } else {
      setInfoCurr((prev) => ({
        ...prev,
        images: `https://i.imgur.com/RGX4mrq.png`,
      }));
    }
  };

  const handleSubmit = () => {
    mutateCreateCurr(infoCurr, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(data.data.data.department_id)] });
        queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(0)] });
        setInfoCurr(initialCurr);
        navigate('/admin');
      },
      onError: (err) => {
        alert('Vui lòng điền tên tài liệu.');
      },
    });
  };

  return (
    <div className="currAdd">
      <div className="currAdd__mainBox">
        <h3 className="currAdd__title">Thêm tài liệu</h3>
        <div className="currAdd__box">
          <div className="currAdd__item">
            <label>Tên tài liệu</label>
            <div className="currAdd__right">
              <input type="text" onChange={handleChange('name')} />
            </div>
          </div>
          <div className="currAdd__item">
            <label>Trạng thái</label>
            <div className="currAdd__right">
              <select onChange={handleChange('status')}>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
          <div className="currAdd__item">
            <label>Hình ảnh</label>
            <div className="currAdd__right">
              <input
                type="file"
                onChange={(e) => {
                  handleSubmitImage(e.target.files[0]);
                }}
                multiple
                accept="image/*"
              ></input>
            </div>
          </div>
          <div className="currAdd__item">
            <label>Mô tả</label>
            <div className="currAdd__right">
              <textarea onChange={handleChange('description')}></textarea>
            </div>
          </div>
        </div>
        <div className="currAdd__btn">
          <button onClick={() => handleSubmit()}>Thêm</button>
        </div>
      </div>
    </div>
  );
}
