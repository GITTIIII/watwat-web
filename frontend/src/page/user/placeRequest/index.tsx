import "./place.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import { PlaceUsesInterface } from "../../../interfaces/IPlaceUse";
import { useEffect, useState } from "react";
import { ListPlaceUse } from "../../../services/https/placeUse"

const Place = () => {
    const [placeUse, setPlaceUse] = useState<PlaceUsesInterface[]>([])

    async function getPlaceUse() {
      setPlaceUse(await ListPlaceUse())
  }

  useEffect(() => {
    getPlaceUse()
}, [])

  return (
    <>
      
        <div className="place-middle-box">

          <div className="place-top-middle-box">
            <Link to="/placeForm">
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </Link>
          </div>
          <div className="place-result-middle-box">
            {placeUse.map((item, index) => (
              <div key={index} className="infomation">
                <div>ชื่อ: {item.UserRequestName}</div>
                <div>วันเริ่มต้น: {item.DateBegin}</div>
                <div>เวลาเริ่มต้น: {item.TimeOfBegin}</div>
                <div>เบอร์โทร: {item.UserTel}</div>
                <div>วันสิ้นสุด: {item.DateEnd}</div>
                <div>เวลาสิ้นสุด: {item.TimeOfEnd}</div>
                <button className="submit_button">ยกเลิก</button>
              </div>
            ))}
            </div>
          </div>
     
    </>
  );
};

export default Place;
