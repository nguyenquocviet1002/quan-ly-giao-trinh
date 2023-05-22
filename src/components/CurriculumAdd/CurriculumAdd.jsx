import { useEffect, useState } from 'react';
import './_CurriculumAdd.scss';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetUser } from '@/services/userService';
import { useUploadImage } from '@/services/fileService';

export default function CurriculumAdd() {
  const initialCurr = {
    department_id: '',
    user_id: '',
    name: '',
    images: '',
    status: '',
    description: '',
  };

  const [infoCurr, setInfoCurr] = useState(initialCurr);
  const [currImage, setCurrImage] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);
  const { dataUser } = useGetUser(token);
  const { mutateUploadImage } = useUploadImage();
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
  const handleSubmit = () => {
    mutateUploadImage(currImage[0], {
      onSuccess: (data) => {
        setInfoCurr({ ...infoCurr, images: `https://scigroup.com.vn/app/upload/public${data.data.data.image}` });
      },
      onError: () => {
        console.log(infoCurr);
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
              <input type="file" onChange={(e) => setCurrImage(e.target.files)}></input>
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
