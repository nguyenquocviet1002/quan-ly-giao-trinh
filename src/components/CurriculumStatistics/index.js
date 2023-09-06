import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './CurriculumStatistics.scss';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useGetUser } from "@/services/userService";
import { useGetCurriculumDepartment } from "@/services/curriculumService";
import { sort } from "@/utils/sort";


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
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div className="currList">
            <div className="currStaticFlex">
                <div className="currStaticItem currStaticTable">
                    <table>
                        <thead>

                        </thead>
                        <tbody>
                            <tr>
                                <td>Tổng dung lượng đã sử dụng</td>
                                <td>{sizeTotal}</td>
                            </tr>
                            <tr>
                                <td>Tổng số lượng tài liệu đã upload</td>
                                <td>{amountTotal}</td>
                            </tr>
                            <tr>
                                <td>Tổng số lượng tài liệu public</td>
                                <td>{amountPublic}</td>
                            </tr>
                            <tr>
                                <td>Tổng số lượng tài liệu private</td>
                                <td>{amountPrivate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="currStaticItem">
                    <Bar options={options} data={data} />
                </div>
                <div className="currStaticItem">
                    <Bar options={options} data={data2} />
                </div>
                <div className="currStaticItem">
                    <Bar options={options} data={data3} />
                </div>
            </div>
        </div>
    )
}

export default CurriculumStatistics;