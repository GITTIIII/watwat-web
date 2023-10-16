import "./place.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import { PlaceUsesInterface } from "../../../interfaces/IPlaceUse";
import { useEffect, useState } from "react";
import { ListPlaceUse, DeletePlaceUse } from "../../../services/https/placeUse"
import { message } from "antd";


const Place = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [placeUse, setPlaceUse] = useState<PlaceUsesInterface[]>([])

    async function getPlaceUse() {
      setPlaceUse(await ListPlaceUse())
    }

    async function deletePlaceUse(id: number | undefined) {
      let res = await DeletePlaceUse(id);
      if (!res.status) {
        messageApi.open({
          type: "success",
          content: "ยกเลิกคำขอเเล้ว",
        });
        setTimeout(function () {
          window.location.reload();
        }, 100);
      }
    }

    
    useEffect(() => {
      getPlaceUse()
    }, [])

  return (
    <>
      
        <div className="place-middle-box">
          {contextHolder}
          <div className="place-top-middle-box">
            <Link to="/placeForm">
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </Link>
          </div>
          <div className="place-result-middle-box">
            <div className="requestList">
              {placeUse.map((item, index) => (
                <div key={index} className="infomation">
                  <div>ชื่อ: {item.UserRequestName}</div>
                  <div>วันเริ่มต้น: {item.DateBegin}</div>
                  <div>เวลาเริ่มต้น: {item.TimeOfBegin}</div>
                  <div>เบอร์โทร: {item.UserTel}</div>
                  <div>วันสิ้นสุด: {item.DateEnd}</div>
                  <div>เวลาสิ้นสุด: {item.TimeOfEnd}</div>
                  <div>สถานะคำร้อง: {item.Status?.StatusName}</div>
                  <button className="submit_button" onClick={() => deletePlaceUse(item.ID)}>ยกเลิก</button>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default Place;
