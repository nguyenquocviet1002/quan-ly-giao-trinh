import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import './users.scss';

function Users() {
    return (
        <div className='users'>
            <div className="users__btn">
                <Link to={'/them-tai-khoan'}>
                    <button>Thêm</button>
                </Link>
            </div>
            <div className="users__table">
                <table className="table">
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


                </table>
                <div className='users__pagination'>
                    <Pagination pageCount={10} pageNum={10} range={6} />
                </div>
            </div>
        </div>
    )
}

export default Users;