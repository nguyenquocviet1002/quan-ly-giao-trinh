import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useGetUser } from "@/services/userService";
import { useGetCurriculumDepartment } from "@/services/curriculumService";
import { sort } from "@/utils/sort";
import './CurriculumStatistics.scss';


ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
    },
    scales: {
        y: {
            suggestedMax: 10,
        },
    },
};

function CurriculumStatistics() {
    const [sizeTotal, setSizeTotal] = useState(0);
    const [amountTotal, setAmountTotal] = useState(0);
    const [amountPublic, setAmountPublic] = useState(0);
    const [amountPrivate, setAmountPrivate] = useState(0);
    const [dataView, setDataView] = useState([]);
    const [dataVote, setDataVote] = useState([]);
    const [dataSize, setDataSize] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useLocalStorage('token-document', null);
    const { dataUser, isSuccessUser } = useGetUser(token);
    const { dataCurriculumDepartment, isSuccessCurriculumDepartment } = useGetCurriculumDepartment({ id: isSuccessUser ? dataUser.data.data.department_id : '' });
    useEffect(() => {
        if (isSuccessCurriculumDepartment) {
            let size = 0;
            dataCurriculumDepartment.data.map(item =>
                size += item.size
            );
            const dataPublic = dataCurriculumDepartment.data.filter(item =>
                item.status === 'public'
            );
            const dataPrivate = dataCurriculumDepartment.data.filter(item =>
                item.status === 'private'
            );
            setAmountPublic(dataPublic.length);
            setAmountPrivate(dataPrivate.length);
            setSizeTotal(size);
            setAmountTotal(dataCurriculumDepartment.data.length);
            setDataView(sort(dataCurriculumDepartment.data, 'view'));
            setDataVote(sort(dataCurriculumDepartment.data, 'vote'));
            setDataSize(sort(dataCurriculumDepartment.data, 'size'));
        }
    }, [isSuccessCurriculumDepartment, dataCurriculumDepartment]);

    const data = {
        labels: dataView.label,
        datasets: [
            {
                label: 'Lượt xem',
                data: dataView.data,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const data2 = {
        labels: dataVote.label,
        datasets: [
            {
                label: 'Lượt thích',
                data: dataVote.data,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const data3 = {
        labels: dataVote.label,
        datasets: [
            {
                label: 'Dung lượng (MB)',
                data: dataSize.data,
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
    };

    return (
        <div className="currList">
            <div className="row">
                <div className="col-md-6">
                    <div className="statis__title">Thống kê tài liệu</div>
                    <table className="statis__table">
                        <tbody>
                            <tr>
                                <td>Dung lượng đã sử dụng</td>
                                <td>{sizeTotal} MB</td>
                            </tr>
                            <tr>
                                <td>Số lượng tài liệu upload</td>
                                <td>{amountTotal}</td>
                            </tr>
                            <tr>
                                <td>Số lượng tài liệu public</td>
                                <td>{amountPublic}</td>
                            </tr>
                            <tr>
                                <td>Số lượng tài liệu private</td>
                                <td>{amountPrivate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <div className="statis__title">Thống kê lượt xem</div>
                    <Bar options={options} data={data} />
                </div>
            </div>
            <div className="row statis__row">
                <div className="col-md-6">
                    <div className="statis__title">Thống kê lượt thích</div>
                    <Bar options={options} data={data2} /></div>
                <div className="col-md-6">
                    <div className="statis__title">Thống kê dung lượng</div>
                    <Bar options={options} data={data3} />
                </div>
            </div>
        </div>
    )
}

export default CurriculumStatistics;