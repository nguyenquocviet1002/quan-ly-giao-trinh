import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useDeleteCurriculum, useGetCurriculumDepartment } from '@/services/curriculumService';
import { useGetUser } from '@/services/userService';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import './CurriculumList.scss';

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
  const [valueSearch, setValueSearch] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);
  const { dataUser, isSuccessUser } = useGetUser(token);
  const { dataCurriculumDepartment, isSuccessCurriculumDepartment, refetchCurriculumDepartment } =
    useGetCurriculumDepartment({
      id: isSuccessUser ? dataUser.data.data.department_id : '',
      name: valueSearch,
    });

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
      width: '10%',
      compact: true,
      selector: (row) => <img className="imgCurr" width={'100%'} src={row.images} alt="" />,
    },
    {
      name: 'Tên tài liệu',
      selector: (row) => row.name,
      sortable: true,
      grow: 0.7,
    },
    {
      name: 'Lượt xem',
      selector: (row) => row.view,
      center: true,
      width: '10%',
    },
    {
      name: 'Lượt thích',
      selector: (row) => row.vote,
      center: true,
      width: '10%',
    },
    {
      name: 'Dung lượng',
      selector: (row) => `${row.size} MB`,
      center: true,
      width: '10%',
    },
    {
      name: 'Trạng thái',
      selector: (row) => row.status,
      center: true,
      width: '10%',
    },
    {
      name: 'Hành động',
      center: true,
      width: '10%',
      cell: (row) => (
        <div className="currList__box--img">
          <Link to={`/admin/sua-giao-trinh/${row.id}`}>
            <img src={`${process.env.PUBLIC_URL}/images/edit-2.png`} alt="" />
          </Link>
          <Link to={`/admin/xem-giao-trinh/${row.id}`}>
            <img src={`${process.env.PUBLIC_URL}/images/eyes-2.png`} alt="" />
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
      <div className="currList__table">
        <div className="currList__btn">
          <div className="currList__title">Danh sách tài liệu</div>
          <Link to="/admin/them-giao-trinh">
            <button>Thêm</button>
          </Link>
        </div>
        <div className="currList__boxSearch">
          <div className="currList__filter">
            <p>Khoảng ngày</p>
            <input type="date" />
            <input type="date" />
            <i className="icon-search-1"></i>
          </div>
          <div className="currList__search">
            <input
              type="text"
              placeholder="Tìm kiếm"
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
            />
            <div style={{ display: 'flex' }}>
              {valueSearch && (
                <i
                  class="icon-cancel-2"
                  onClick={() => {
                    setValueSearch('');
                    setTimeout(() => {
                      refetchCurriculumDepartment();
                    }, 0);
                  }}
                ></i>
              )}
              <i className="icon-search-1" onClick={refetchCurriculumDepartment}></i>
            </div>
          </div>
        </div>
        {isSuccessCurriculumDepartment && (
          <DataTable
            columns={columns}
            data={dataCurriculumDepartment.data}
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
