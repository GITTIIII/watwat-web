import { NavLink } from "react-router-dom";

function RightMenu() {
  return (
    <>
      <div className="right-menu">
        <ul>
          <NavLink to="/profile">
            <li>โปรไฟล์</li>
          </NavLink>
          <NavLink to="/regisWatCreator">
            <li>สมัคร Wat Creator</li>
          </NavLink>
          <NavLink to="/">
            <li>ออกจากระบบ</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default RightMenu;
