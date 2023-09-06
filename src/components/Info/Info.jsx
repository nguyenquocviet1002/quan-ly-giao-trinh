import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGetUser } from '@/services/userService';
import React from 'react';

export default function Info() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('token-document', null);
  const { dataUser, isSuccessUser } = useGetUser(token);

  return (
    <div className="currList">
      {isSuccessUser && (
        <>
          <div>Tên: {dataUser.data.data.name}</div>
          <div>Email: {dataUser.data.data.email}</div>
          <div>Trạng thái tài khoản: {dataUser.data.data.status === true ? 'Đã xác nhận' : 'Chưa xác nhận'}</div>
          <div>Ngày tạo: {new Date(dataUser.data.data.created_at).toLocaleString('en-GB')}</div>
        </>
      )}
    </div>
  );
}
