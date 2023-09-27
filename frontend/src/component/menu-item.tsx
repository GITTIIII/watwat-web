import { Link } from "react-router-dom";

function MenuItem(props:any){
    return(
        <div className="menu-navbar">
        <Link to="/" className="page-active">หน้าหลัก</Link>
        <Link to="" >ขอจัดกิจกรรม</Link>
        <Link to="/place" >ขอใช้สถานที่</Link>
        <Link to="" >ยืม/คืนสิ่งของ</Link>
        <Link to="" >บริจาค</Link>
      </div>
    )
}

export default MenuItem;