import React from 'react';
import DataTable from 'react-data-table-component';
import { useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useDeleteCurriculum, useGetCurriculumDepartment } from '@/services/curriculumService';
import { useGetUser } from '@/services/userService';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import './_CurriculumList.scss';

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

export default function CurriculumList() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token', null);
  const { dataUser } = useGetUser(token);
  const { dataCurriculumDepartment, isSuccessCurriculumDepartment } = useGetCurriculumDepartment(
    dataUser.data.data.department_id,
  );

  const queryClient = useQueryClient();

  const { mutateDeleteCurr } = useDeleteCurriculum(token);

  const handleDelete = (id) => {
    mutateDeleteCurr(id, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['curriculumsDepartment', Number(data.data.data.department_id)] });
      },
    });
  };

  const columns = [
    {
      name: 'Hình ảnh',
      selector: (row) => <img className="imgCurr" width={'100%'} src={row.images} alt="" />,
    },
    {
      name: 'Tên giáo trình',
      selector: (row) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: 'Trạng thái',
      selector: (row) => row.status,
      center: true,
    },
    {
      name: 'Hành động',
      center: true,
      cell: (row) => (
        <div className="currList__box--img">
          <Link to={`/admin/sua-giao-trinh/${row.id}`}>
            <img src={`${process.env.PUBLIC_URL}/images/edit-2.png`} alt="" />
          </Link>
          <div onClick={() => handleDelete(row.id)}>
            <img src={`${process.env.PUBLIC_URL}/images/trash-2.png`} alt="" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="currList">
      <div className="currList__btn">
        <Link to="/admin/them-giao-trinh">
          <button>Thêm</button>
        </Link>
      </div>
      <div className="currList__table">
        {isSuccessCurriculumDepartment && (
          <DataTable
            columns={columns}
            data={dataCurriculumDepartment.data.data}
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
  );
}
