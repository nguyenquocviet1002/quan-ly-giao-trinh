import React from "react";
import './coursesdetail.scss';

function CoursesDetail() {
    return (
        <div className="coursesDetail">
            <div className="container">
                <div className="coursesDetail__box">
                    <div className="coursesDetail__title">
                        <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                        Giáo trình JS
                    </div>
                    <div className="coursesDetail__list">
                        <table className="table">
                            <tr>
                                <th>Tên giáo trình</th>
                                <th>Link download</th>
                                <th>Link câu hỏi</th>
                            </tr>
                            <tr>
                                <td className="currList__box">
                                    1. Cấu trúc code trong JS
                                </td>
                                <td className="currList__box">
                                    https://download/cau-truc-code
                                </td>
                                <td className="currList__box">
                                    https://cauhoi/cau-truc-code
                                </td>
                            </tr>
                            <tr>
                                <td className="currList__box">
                                    2. Cấu trúc code trong JS
                                </td>
                                <td className="currList__box">
                                    https://download/cau-truc-code
                                </td>
                                <td className="currList__box">
                                    https://cauhoi/cau-truc-code
                                </td>
                            </tr>
                            <tr>
                                <td className="currList__box">
                                    3. Cấu trúc code trong JS
                                </td>
                                <td className="currList__box">
                                    https://download/cau-truc-code
                                </td>
                                <td className="currList__box">
                                    https://cauhoi/cau-truc-code
                                </td>
                            </tr>
                            <tr>
                                <td className="currList__box">
                                    4. Cấu trúc code trong JS
                                </td>
                                <td className="currList__box">
                                    https://download/cau-truc-code
                                </td>
                                <td className="currList__box">
                                    https://cauhoi/cau-truc-code
                                </td>
                            </tr>
                            <tr>
                                <td className="currList__box">
                                    5. Cấu trúc code trong JS
                                </td>
                                <td className="currList__box">
                                    https://download/cau-truc-code
                                </td>
                                <td className="currList__box">
                                    https://cauhoi/cau-truc-code
                                </td>
                            </tr>
                            <tr>
                                <td className="currList__box">
                                    6. Cấu trúc code trong JS
                                </td>
                                <td className="currList__box">
                                    https://download/cau-truc-code
                                </td>
                                <td className="currList__box">
                                    https://cauhoi/cau-truc-code
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesDetail;