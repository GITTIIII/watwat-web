import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import { EventRequestsInterface } from "../../../../interfaces/IEventRequest";
import { GetEventById } from "../../../../services/https/event";
import "./eventDetails.css";
import { RequestInterface } from "../../../../interfaces/IRequest";
import { GetRequestByEventId, } from "../../../../services/https/request";
function DetailEvent() {

  let { id } = useParams();
  const [events, setEvent] = useState<EventRequestsInterface[]>([]);
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  const getEvent = async () => {
    let res = await GetEventById(Number(id));
    if (!Array.isArray(res)) {
      res = [res];
    }
    setEvent(res);
  };
  const geteventRequersts = async () => {
    let res = await GetRequestByEventId(Number(id));
    if (!Array.isArray(res)) {
      res = [res];
    }
    setRequest(res);
    return
  };
  useEffect(() => {
    getEvent();
    geteventRequersts();
  }, []);

  console.log(events);

  return (
    <>
      <div className="warpperEvent details">
        <div className="contantEvent details">
          {events.map((e, index) => (
            <div>
              <div className="datatitle">
                <span>รายละเอียดคำขอจัดกิจกรรม</span>
              </div>
              <div className="datatitle nameEvent">
                <span>{e.EventName}</span>
              </div>
              <div className="requestEvent-detail">
                <div className="hostsName">
                  <div className="title-namedata">
                    <span>วันจัดงาน</span>
                  </div>
                  <div className="title-namedata">
                    <span>เบอร์โทรศัพท์</span>
                  </div>
                  <div className="detail-data">
                    <span>
                      ตั้งแต่เวลา {e.TimeOfBegin} วันที่ {e.DateBegin} ถึงเวลา{" "}
                      {e.TimeOfEnd} วันที่ {e.DateEnd}
                    </span>
                  </div>
                  <div className="detail-data">
                    <span></span>
                    {e.UserTel}
                  </div>
                </div>
                <div className="title-namedata">
                  <span>สถานที่ภายนอกวัด</span>
                </div>
                <div className="detail-data">
                  <span>{e.OutPlace}</span>
                </div>
                <div className="title-namedata">
                  <span>รายนามเจ้าภาพ</span>
                </div>
                <div className="hostsName">
                  <div className="detail-data">
                    <span>นายณฐพล ศักวิบูลเดชา</span>
                  </div>
                  <div className="detail-data">
                    <span>นายณฐพล ศักวิบูลเดชา</span>
                  </div>
                  <div className="detail-data">
                    <span>นายณฐพล ศักวิบูลเดชา</span>
                  </div>
                  <div className="detail-data">
                    <span>นายณฐพล ศักวิบูลเดชา</span>
                  </div>
                  <div className="detail-data">
                    <span>นายณฐพล ศักวิบูลเดชา</span>
                  </div>
                  <div className="detail-data">
                    <span>นายณฐพล ศักวิบูลเดชา</span>
                  </div>
                </div>
                <div className="title-namedata">
                  <span>รายละเอียดเพิ่มเติม</span>
                </div>
                <div className="detail-data">
                  <span>
                    {e.Description} 
                  </span>
                </div>
              </div>
            </div>
          ))}
          {eventRequersts.map((e) => (
            <div className="formNote">
              <div className="note">
                <span>หมายเหตุ: </span>
              </div>
              <div className="noteData">
                <span>{e.Note }</span>
              </div>
            </div>
          ))}
          <div>
            <div className="filterPage">
              <div className="filterdetail">
                <div className="filter-item back">
                  <Link to="../eventRequest">
                    <span>ย้อนกลับ</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailEvent;
