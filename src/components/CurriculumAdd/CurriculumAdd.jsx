import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetUser } from '@/services/userService';
import { useUploadImage } from '@/services/fileService';
import { useCreateCurriculum } from '@/services/curriculumService';
import './_CurriculumAdd.scss';

export default function CurriculumAdd() {
  const initialCurr = {
    department_id: '',
    user_id: '',
    name: '',
    images: '',
    status: 'public',
    description: '',
  };

  const [infoCurr, setInfoCurr] = useState(initialCurr);

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);

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
    mutateUploadImage(item, {
      onSuccess: (data) =>
        setInfoCurr((prev) => ({
          ...prev,
          images: `https://scigroup.com.vn/app/upload/public${data.data.data.image}`,
        })),
    });
  };

  const handleSubmit = () => {
    mutateCreateCurr(infoCurr, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(data.data.data.department_id)] });
        queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(0)] });
        setInfoCurr(initialCurr);
        navigate('/admin');
      },
    });
  };

  return (
    <div className="currAdd">
      <div className="currAdd__mainBox">
        <h3 className="currAdd__title">Thêm giáo trình</h3>
        <div className="currAdd__box">
          <div className="currAdd__box1">
            <div className="currAdd__item">
              <label>Hình ảnh</label>
              <input
                type="file"
                onChange={(e) => {
                  handleSubmitImage(e.target.files[0]);
                }}
              ></input>
            </div>
            <div className="currAdd__item">
              <label>Tên giáo trình</label>
              <input type="text" onChange={handleChange('name')} />
            </div>
            <div className="currAdd__item">
              <label>Trạng thái</label>
              <select onChange={handleChange('status')}>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
          <div className="currAdd__box2">
            <p>Nội dung</p>
            <textarea cols="50" rows="5" onChange={handleChange('description')}></textarea>
          </div>
        </div>
        <div className="currAdd__btn">
          <button onClick={() => handleSubmit()}>Thêm</button>
        </div>
      </div>
    </div>
  );
}
