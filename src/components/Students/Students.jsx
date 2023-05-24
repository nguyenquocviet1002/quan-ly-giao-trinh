import './_Students.scss';

export default function Students() {
  return (
    <div className="students">
      <div className="students__mainBox">
        <h3 className="students__title">Danh sách học viên</h3>
        <table class="table">
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
        </table>
      </div>
    </div>
  );
}
