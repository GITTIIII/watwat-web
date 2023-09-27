import { Link } from "react-router-dom";

function RightMenu() {
  return (
    <>
      <div className="right-menu">
        <ul>
          <li>
            <Link to="/">สมัคร Wat Creator</Link>
          </li>
          <li>
            <Link to="/login">ออกจากระบบ</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RightMenu;
