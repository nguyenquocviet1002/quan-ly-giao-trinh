import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useDeleteUser, useGetAllUser } from '@/services/userService';
import './_Users.scss';
import { useGetDepartment } from '@/services/departmentService';
import { filterById } from '@/utils/filterById';

const customStyles = {
  subHeader: {
    style: {
      display: 'block',
      padding: '20px 20px 10px',
    },
  },
  head: {
    style: {
      fontSize: '16px',
      fontWeight: '700',
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  rows: {
    style: {
      minHeight: '60px',
      fontSize: '15px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
};

export default function Users() {
  const [dataRole, setDataRole] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);
  const { dataAllUser, isSuccessAllUser } = useGetAllUser(token);
  const { dataDepartment } = useGetDepartment();
  const { muteDeleteUser } = useDeleteUser(token);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccessAllUser) {
      const dataRoleUser = dataAllUser.data.data.filter((item) => item.role === 'SUB_ADMIN');
      setDataRole(dataRoleUser);
    }
  }, [isSuccessAllUser, dataAllUser]);

  const handleDelete = (id) => {
    muteDeleteUser(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['userAll'] });
      },
    });
  };

  const columns = [
    {
      name: 'Tài khoản',
      width: '14%',
      selector: (row) => row.name,
    },
    {
      name: 'Email',
      width: '66%',
      selector: (row) => row.email,
    },
    {
      name: 'Team',
      width: '10%',
      selector: (row) => filterById(row.department_id, dataDepartment.data.data),
      center: true,
    },
    {
      name: 'Hành động',
      width: '10%',
      center: true,
      selector: (row) => (
        <div className="users__box--img">
          {/* <Link to="/admin/sua-tai-khoan">
            <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
          </Link> */}
          <div className="students__box--img" onClick={() => handleDelete(row.id)}>
            <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/trash-2.png`} alt="" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="users">
      <div className="users__table">
        <div className="users__btn">
          <div className="users__title">Danh sách tài khoản</div>
          <Link to="/admin/them-tai-khoan">
            <button>Thêm</button>
          </Link>
        </div>
        {isSuccessAllUser && (
          <DataTable
            columns={columns}
            data={dataRole}
            customStyles={customStyles}
            highlightOnHover
            pagination
            responsive
            persistTableHead
            striped
          />
        )}
        {/* <table className="table">
          <tr>
            <th>Email</th>
            <th>Leader team</th>
            <th>Hành động</th>
          </tr>
          <tr>
            <td className="users__box">ngocanh@gmail.com</td>
            <td className="users__box">Video</td>
            <td className="users__box">
              <div className="users__box--img">
                <Link to={'/sua-tai-khoan'}>
                  <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                </Link>
                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="users__box">ngocanh@gmail.com</td>
            <td className="users__box">Video</td>
            <td className="users__box">
              <div className="users__box--img">
                <Link to={'/sua-tai-khoan'}>
                  <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                </Link>
                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="users__box">ngocanh@gmail.com</td>
            <td className="users__box">Video</td>
            <td className="users__box">
              <div className="users__box--img">
                <Link to={'/sua-tai-khoan'}>
                  <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                </Link>
                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="users__box">ngocanh@gmail.com</td>
            <td className="users__box">Video</td>
            <td className="users__box">
              <div className="users__box--img">
                <Link to={'/sua-tai-khoan'}>
                  <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                </Link>
                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="users__box">ngocanh@gmail.com</td>
            <td className="users__box">Video</td>
            <td className="users__box">
              <div className="users__box--img">
                <Link to={'/sua-tai-khoan'}>
                  <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                </Link>
                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="users__box">ngocanh@gmail.com</td>
            <td className="users__box">Video</td>
            <td className="users__box">
              <div className="users__box--img">
                <Link to={'/sua-tai-khoan'}>
                  <img src={`${process.env.PUBLIC_URL}/images/edit.png`} alt="" />
                </Link>
                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
              </div>
            </td>
          </tr>
        </table> */}
      </div>
    </div>
  );
}
