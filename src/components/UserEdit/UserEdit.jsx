import { useState } from 'react';
import { useGetDepartment } from '@/services/departmentService';
import './_UserEdit.scss';
// import { useUpdateUser } from '@/services/userService';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function UserEdit() {
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

  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);
  const { dataDepartment, isSuccessDepartment } = useGetDepartment();
  //   const { muteUpdateUser } = useUpdateUser(token);

  return (
    <div className="userEdit">
      <div className="userEdit__mainBox">
        <h3 className="userEdit__title">Sửa tài khoản</h3>
        <div className="userEdit__box">
          <div className="userEdit__item">
            <label>Email</label>
            <input type="text" defaultValue={infoRegister.email} onChange={handleChange('email')} />
          </div>
          <div className="userAdd__item">
            <label>Tên</label>
            <input type="text" defaultValue={infoRegister.name} onChange={handleChange('name')} />
          </div>
          <div className="userAdd__item">
            <label>Password</label>
            <input
              type="text"
              defaultValue={infoRegister.password}
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
        <div className="userEdit__btn">
          <button>Thêm</button>
        </div>
      </div>
    </div>
  );
}
