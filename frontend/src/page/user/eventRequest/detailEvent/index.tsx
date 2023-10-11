import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { EventRequestsInterface } from "../../../../interfaces/IEventRequest";
import { GetEventById } from "../../../../services/https/event";
import "./eventDetails.css";
import { RequestInterface } from "../../../../interfaces/IRequest";
import { GetRequestByEventId } from "../../../../services/https/request";
import { HostsInterface } from "../../../../interfaces/IHost";
import { GetHostById } from "../../../../services/https/host";
function DetailEvent() {
  let { id } = useParams();
  const [events, setEvent] = useState<EventRequestsInterface[]>([]);
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  const [host, setHost] = useState<HostsInterface[]>([]);
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
    return;
  };
  const gethosts = async () => {
    let res = await GetHostById(Number(id));
    if (!Array.isArray(res)) {
      res = [res];
    }
    setHost(res);
  };
  useEffect(() => {
    getEvent();
    geteventRequersts();
    gethosts();
  }, []);

  console.log(events);

  return (
    <>
      <div className="warpperEvent details">
        <div className="contantEvent details">
          <div>
            <div className="datatitle">
              <span>รายละเอียดคำขอจัดกิจกรรม</span>
            </div>
            {events.map((e, index) => (
              <div className="datatitle nameEvent">
                <span>{e.EventName}</span>
              </div>
            ))}
            <div className="requestEvent-detail">
              {events.map((e, index) => (
                <div>
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
                  </div>{" "}
                </div>
              ))}
              <div className="title-namedata">
                <span>รายนามเจ้าภาพ</span>
              </div>
              <div className="hostsName">
                {host.map((e, index) => (
                  <div className="detail-data">
                    <span>{e.HostName}</span>
                  </div>
                ))}
              </div>
              <div className="title-namedata">
                <span>รายละเอียดเพิ่มเติม</span>
              </div>
              {events.map((e, index) => (
                <div className="detail-data">
                  <span>{e.Description}</span>
                </div>
              ))}
            </div>
          </div>
          {eventRequersts.map((e) => (
            <div className="formNote">
              <div className="note">
                <span>หมายเหตุ: </span>
              </div>
              <div className="noteData">
                <span>{e.Note}</span>
              </div>
            </div>
          ))}
          {host.map((e) => (
            <div></div>
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
