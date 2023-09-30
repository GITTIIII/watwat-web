import { Link, NavLink } from "react-router-dom";

function RightMenu() {
  return (
    <>
      <div className="right-menu">
        <ul>
          <li>
            <NavLink to="/userProfile">โปรไฟล์</NavLink>
          </li>
          <li>
            <NavLink to="/watCreator">สมัคร Wat Creator</NavLink>
          </li>
          <li>
            <NavLink to="/">ออกจากระบบ</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RightMenu;
