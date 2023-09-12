import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useQueryClient } from '@tanstack/react-query';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useDeleteUser, useGetUser, useGetUserDepartment, useUpdateUser } from '@/services/userService';
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

export default function Students() {
  const [dataRole, setDataRole] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);
  const { dataUser, isSuccessUser } = useGetUser(token);
  const { dataUserDepartment, isSuccessUserDepartment } = useGetUserDepartment(
    token,
    isSuccessUser ? dataUser.data.data.department_id : '',
  );
  const { muteUpdateUser } = useUpdateUser(token);
  const { muteDeleteUser } = useDeleteUser(token);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccessUserDepartment) {
      const dataRoleUser = dataUserDepartment.data.data.filter((item) => item.role === 'USER');
      setDataRole(dataRoleUser);
    }
  }, [isSuccessUserDepartment, dataUserDepartment]);

  const handleUpdate = (id, value) => {
    let status;

    if (value === 'true') {
      status = true;
    } else {
      status = false;
    }

    const dataValue = {
      id: id,
      body: {
        status: status,
      },
    };

    muteUpdateUser(dataValue, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['userDepartment'] });
      },
    });
  };

  const handleDelete = (id) => {
    muteDeleteUser(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['userDepartment'] });
      },
    });
  };

  const columns = [
    {
      name: 'Học viên',
      width: '14%',
      selector: (row) => row.name,
    },
    {
      name: 'Email',
      width: '66%',
      selector: (row) => row.email,
    },
    {
      name: 'Trạng thái',
      width: '10%',
      center: true,
      selector: (row) => (
        <select defaultValue={row.status} onChange={(event) => handleUpdate(row.id, event.target.value)}>
          <option value="true">Active</option>
          <option value="false">Unactive</option>
        </select>
      ),
    },
    {
      name: 'Hành động',
      width: '10%',
      center: true,
      selector: (row) => (
        <div className="students__box--img" onClick={() => handleDelete(row.id)}>
          <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/trash-2.png`} alt="" />
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
              data={dataRole}
              customStyles={customStyles}
              highlightOnHover
              pagination
              responsive
              persistTableHead
              striped
            />
          )}
        </div>
      </div>
    </>
  );
}
