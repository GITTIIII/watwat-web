import { Link } from "react-router-dom";

function MenuItem(props:any){
    return(
        <div className="menu-navbar">
        <Link to="/" className={props.text}>หน้าหลัก</Link>
        <Link to="" className={props.text}>ขอจัดกิจกรรม</Link>
        <Link to="/place" className={props.text}>ขอใช้สถานที่</Link>
        <Link to="" className={props.text}>ยืม/คืนสิ่งของ</Link>
        <Link to="" className={props.text}>บริจาค</Link>
      </div>
    )
}

export default MenuItem;