import { Link, NavLink } from "react-router-dom";

function RightMenu() {
  return (
    <>
      <div className="right-menu">
        <ul>
          <li>
            <NavLink to="/">สมัคร Wat Creator</NavLink>
          </li>
          <li>
            <NavLink to="/login">ออกจากระบบ</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RightMenu;
