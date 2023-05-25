import DataTable from 'react-data-table-component';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetUser, useGetUserDepartment } from '@/services/userService';
import './_Students.scss';

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

export default function Students() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);
  const { dataUser } = useGetUser(token);
  const { dataUserDepartment, isSuccessUserDepartment } = useGetUserDepartment(token, dataUser.data.data.department_id);
  if (isSuccessUserDepartment) {
    const dataRoleUser = dataUserDepartment.data.data.filter((item) => item.role === 'USER');
  }

  const columns = [
    {
      name: 'Học viên',
      selector: (row) => row.name,
    },
    {
      name: 'Role',
      selector: (row) => row.role,
    },
    {
      name: 'Trạng thái',
      selector: (row) => (
        <>
          <select defaultValue={row.status}>
            <option value="true">Active</option>
            <option value="false">Unactive</option>
          </select>
        </>
      ),
    },
    {
      name: 'Hành động',
      selector: (row) => (
        <div className="students__box--img">
          <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="students">
        <div className="students__mainBox">
          <h3 className="students__title">Danh sách học viên</h3>
          {isSuccessUserDepartment && (
            <DataTable
              columns={columns}
              data={dataUserDepartment.data.data}
              customStyles={customStyles}
              highlightOnHover
              pagination
              responsive
              persistTableHead
              striped
            />
          )}
          {/* <table class="table">
            <tr>
              <th>Học viên</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
            <tr>
              <td className="students__box">Hoàng Dương</td>
              <td className="students__box">Active</td>
              <td className="students__box">
                <div className="students__box--img">
                  <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="students__box">Hoàng Dương</td>
              <td className="students__box">Active</td>
              <td className="students__box">
                <div className="students__box--img">
                  <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="students__box">Hoàng Dương</td>
              <td className="students__box">Unactive</td>
              <td className="students__box">
                <div className="students__box--img">
                  <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="students__box">Hoàng Dương</td>
              <td className="students__box">Unactive</td>
              <td className="students__box">
                <div className="students__box--img">
                  <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="students__box">Hoàng Dương</td>
              <td className="students__box">Unactive</td>
              <td className="students__box">
                <div className="students__box--img">
                  <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="students__box">Hoàng Dương</td>
              <td className="students__box">Unactive</td>
              <td className="students__box">
                <div className="students__box--img">
                  <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="" />
                </div>
              </td>
            </tr>
          </table> */}
        </div>
      </div>
    </>
  );
}
