import "../../../css/regis-watCreator.css";

import { Link } from "react-router-dom";
const RegisWatCreator = () => {
  return (
    <>
      
      <div className="regis-wat-cretor-middle-box">
        <div className="picture">
          <div className="watlogo">
            ตราวัด
            <img src="./image/suInw.jpg" className="watlogo-picture" alt=""/>
            <input type="file" />
          </div>
          <div className="prime-monk">
            <img src="./image/suInw.jpg" className="prime-monk-picture" alt=""/>
            <input type="file" />
            ชื่อเจ้าอาวาส
            <input type="text" />
          </div>
        </div>
        <div className="info">
            <div>
              ชื่อจริง
              <input type="text" />
            </div>
            <div>
              นามสกุล
              <input type="text" />
            </div>
            <div>
              ชื่อวัด
              <input type="text" />
            </div>
            <div>
              บ้านเลขที่
              <input type="text" />
            </div>
            <div>
              เบอร์โทรศัพท์
              <input type="text" />
            </div>
            <div>
              อีเมล
              <input type="email" />
            </div>
        </div>
      </div>
      <div className="regis-wat-creator-button">
        <Link to="/search">
          <button type="submit" className="submit_button">
            ส่งการสมัคร
          </button>
        </Link>
      </div>
     
    </>
  );
};

export default RegisWatCreator;
