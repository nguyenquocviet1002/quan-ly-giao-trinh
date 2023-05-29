import { useState } from 'react';
import './_UserAdd.scss';
import { useRegister } from '@/services/authService';
import { useGetDepartment } from '@/services/departmentService';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

export default function UserAdd() {
  const initialInfo = {
    department_id: '',
    name: '',
    email: '',
    password: '',
    c_password: '',
    role: 'SUB_ADMIN',
    status: true,
  };

  const [infoRegister, setInfoRegister] = useState(initialInfo);

  const handleChange = (name) => (event) => {
    setInfoRegister((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const { mutateRegister } = useRegister();
  const { dataDepartment, isSuccessDepartment } = useGetDepartment();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSubmit = () => {
    if (
      infoRegister.email === '' ||
      infoRegister.name === '' ||
      infoRegister.password === '' ||
      infoRegister.department_id === ''
    ) {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      mutateRegister(infoRegister, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['userAll'] });
          setInfoRegister(initialInfo);
          navigate('/admin/danh-sach-tai-khoan');
        },
      });
    }
  };

  return (
    <div className="userAdd">
      <div className="userAdd__mainBox">
        <h3 className="userAdd__title">Thêm tài khoản</h3>
        <div className="userAdd__box">
          <div className="userAdd__item">
            <label>Email</label>
            <input type="text" value={infoRegister.email} onChange={handleChange('email')} />
          </div>
          <div className="userAdd__item">
            <label>Tên</label>
            <input type="text" value={infoRegister.name} onChange={handleChange('name')} />
          </div>
          <div className="userAdd__item">
            <label>Password</label>
            <input
              type="text"
              value={infoRegister.password}
              onChange={handleChange('password')}
              onChangeCapture={handleChange('c_password')}
            />
          </div>
          <div className="userAdd__item">
            <label>Team</label>
            <select onChange={handleChange('department_id')}>
              <option value="">Chọn team</option>
              {isSuccessDepartment &&
                dataDepartment.data.data.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="userAdd__btn" onClick={() => handleSubmit()}>
          <button>Thêm</button>
        </div>
      </div>
    </div>
  );
}
