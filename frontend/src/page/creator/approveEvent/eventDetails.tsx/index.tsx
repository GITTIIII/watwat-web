import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { EventRequestsInterface } from "../../../../interfaces/IEventRequest";
import { GetEventById } from "../../../../services/https/event";
import "../../../user/eventRequest/detailEvent/eventDetails.css";
import "./eventDetails.css";
import { RequestInterface } from "../../../../interfaces/IRequest";
import {
  GetRequestByEventId,
  UpdateRequest,
} from "../../../../services/https/request";
import { HostsInterface } from "../../../../interfaces/IHost";
import { GetHostById } from "../../../../services/https/host";
import { GetStatuses } from "../../../../services/https/status";
import { StatusesInterface } from "../../../../interfaces/IStatus";
import SidebarCreater from "../../../../component/sidebar/sidebarCreater";
import { Form, message } from "antd";

function EventDetails() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [events, setEvent] = useState<EventRequestsInterface[]>([]);
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  const [host, setHost] = useState<HostsInterface[]>([]);
  const [status, setStatus] = useState<StatusesInterface[]>([]);
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

  const getStatus = async () => {
    let res = await GetStatuses();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setStatus(res);
  };
  const getStatusNameById = (id: number | undefined) => {
    if (id === undefined) {
      return "Unknown Status"; // Provide a default value when StatusID is undefined
    }
    const statusObject = status.find((status) => status.ID === id);
    return statusObject ? statusObject.StatusName : "Unknown Status";
  };
  useEffect(() => {
    getEvent();
    geteventRequersts();
    gethosts();
    getStatus();
  }, []);
  const [input, setInput] = useState({
    Note: '',
    DateTimeOfApproved: new Date().toLocaleString(),
    StatusID: 1,
    StatusEventID: 4,
  });

  const handleInput = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

const handleStatus = (e: any) => {
    if (e.target.name === "Approv") {
      setInput({
        ...input,
        StatusID: 2,
        StatusEventID: 4,
      });
    } else if (e.target.name === "NotApprov") {
      setInput({
        ...input,
        StatusID: 3,
        StatusEventID: 3,
      });
    }
    
  };
  console.log(input.Note);
  const handleSubmit = async (values: RequestInterface) => {
    values.ID = eventRequersts[0]?.ID;
    values.Note = input.Note;
    values.DateTimeOfApproved = input.DateTimeOfApproved;
    values.StatusID = input.StatusID;
    values.StatusEventID = input.StatusEventID;
    values.EventID = Number(id);

    let res = await UpdateRequest(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("../approveEvent");
      }, 500);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };
  // console.log(eventRequersts[0]?.Note);
  // console.log(input.Note);
  console.log(input.StatusEventID);
  return (
    <>
      {contextHolder}
      <div className="warpperMainCreator">
        <div className="sidebarCreator">
          <SidebarCreater />
        </div>
        <div className="contantMainCreator">
          <div className="contantEvent details">
            <div>
              <div className="datatitle">
                <span>รายละเอียดคำขอจัดกิจกรรม</span>
              </div>
              <div className="datatitle nameEvent">
                {events.map((e, index) => (
                  <div>
                    <span>{e.EventName} : </span>
                    <span
                      className={e.StatusID === 1 ? "s-wait" : e.StatusID === 2 ? "s-approv" : e.StatusID === 3 ? "s-notapprov" : e.StatusID === 4 ? "s-waitEvent" : e.StatusID === 2 ? "s-succeedEvent" : " "}
                    >
                      {getStatusNameById(e.StatusID)}
                    </span>
                  </div>
                ))}
              </div>
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
                          ตั้งแต่เวลา {e.TimeOfBegin} วันที่ {e.DateBegin}{" "}
                          ถึงเวลา {e.TimeOfEnd} วันที่ {e.DateEnd}
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
                    {e.EventID !== null ? (
                    <div>
                      <div className="title-namedata">
                        <span>เป็นมหรสพของ</span>
                      </div>
                      <div className="detail-data">
                        <span>เลขที่คำขอ {e.EventID}</span>
                      </div>
                    </div>)
                    : (<></>)}
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
            <Form onFinish={handleSubmit}>
              <div>
                {eventRequersts.map((e, index) => (
                  <div className="formNote" key={index}>
                    <div className="note">
                      <span>วันอนุมัติ : {e.UpdatedAt?.slice(0, 10)} </span>
                    </div>
                    <div className="note-name">
                      <span>หมายเหตุ: </span>
                    </div>
                    <div className="noteData">
                      <input
                        type="text"
                        className="noteInput"
                        placeholder={e.Note ?? ""}
                        name="Note"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                ))}
                {host.map((e) => (
                  <div></div>
                ))}
                  <div className="filterPage">
                    <div className="filterdetail">
                      <div className="filter-item back">
                        <Link to="../approveEvent">
                          <span>ย้อนกลับ</span>
                        </Link>
                      </div>
                    </div>
                    <div className="filterdetail">
                      <input
                        type="submit"
                        value="อนุมัติ"
                        className="filter-item Approv"
                        name="Approv"
                        onClick={handleStatus}
                      />
                      <input
                        type="submit"
                        value="ไม่อนุมัติ"
                        className="filter-item notApprov"
                        name="NotApprov"
                        onClick={handleStatus}
                      />
                    </div>
                  </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
