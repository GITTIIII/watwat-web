import React, { useState, useEffect } from "react";
import "./eventRequestHistory.css";
import { Space, Table, Button, Col, Row, Divider, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { EventRequestsInterface } from "../../interfaces/IEventRequest";
import { GetEvents } from "../../services/https/event";
import { GetStatusById, GetStatuses } from "../../services/https/status";

function EventRequestHistory() {
  // const navigate = useNavigate();
  const [events, setEvetns] = useState<EventRequestsInterface[]>([]);
  const [evetStatus, setEventStatus] = useState();
  const getEvents = async () => {
    let res = await GetEvents();
    if (res) {
      setEvetns(res);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);
  //   const getEventStatus = async () => {
  //     try {
  //       const statusID = events.map((item) => item.StatusID);
  //       const res = await GetStatusById(statusID);

  //       if (res) {
  //         setEventStatus(res);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching event status:", error);
  //     }
  //   };

  useEffect(() => {
    getEvents();
  }, []);

  //   useEffect(() => {
  //     getEventStatus();
  //   }, []);
  return (
    <>
      {events.map((event) => (
        <div className="request">
          <div className="request_hand">
            <div key={event.ID} className="request_data1">
              <div className="request_no_name">เลขที่คำขอ</div>
              <div className="request_no">{event.EventName}</div>
              <div className="datetime">{event.TimeOfBegin}</div>
              <div className="name">{event.EventName}</div>
            </div>
            <div key={event.ID} className="request_note">
              <div className="note">หมายเหตุ :</div>
              <div className="noteInfrom">{event.Description}</div>
            </div>
            <div key={event.ID} className="request_detail ">
              <div className="status">
                <div className="blockStatus">
                  <div className="statusHand">สถานะ</div>
                   {/* <div className="value">{event.Status}</div> */}
                </div>
              </div>
              <div className="request_data2">
                  <div className="data2">
                    <div className="dataTital">วันที่</div>
                    <div className="dataD">{event.DateBegin}</div>
                    <div className="dataTital">รายนามเจ้าภาพ</div>
                    <div className="dataD">{event.HostName}</div>
                    {/* <div className="dataTital">มหรสพ</div>
                    <div className="dataD">{event.EventID}</div> */}
                  </div>
                  <div className="data2">
                    <div className="dataTital">เบอร์โทรศัพท์</div>
                    <div className="dataD">{event.UserTel}</div>
                    <div className="dataTital">สถานที่</div>
                    <div className="dataD">{event.OutPlace}</div>
                    <div className="dataTital">รายละเอียดเพิ่มเติม</div>
                    <div className="dataD">{event.Description}</div>
                    <div className="dataD">_</div>
                  </div>
                </div>
              <div className="request_edit">
                <Link className="btn edit" to="#">
                  แก้ไข
                </Link>
                <Link className="btn delete" to="#">
                  ยกเลิก
                </Link>
              </div>
            </div> 
          </div>
        </div>
      ))}

      {/* <table>
                        <tr className="row r1">
                            <td className="item 1">เลขที่คำขอ</td>
                            <td className="item 2">1001</td>
                            <td className="item 3">14:00</td>
                            <td className="item 4">24-08-2566</td>
                            <td className="item 5">งานบวช  นาคสมชาย ณ สุรนารี</td>
                            <td className="item 6">หมายเหตุ</td>
                            <td className="item 7">เนื่องจากมีกิจกรรมแจ้งขอจัดมาก่อนหน้านี้แล้ว</td>
                        </tr>
                        <tr>
                            <td>dg</td>
                            <td>dg</td>
                            <td>dg</td>
                            <td>dg</td>
                        </tr>
                    </table> */}
      {/* <div className="request_data1">
                    <div className="request_no_name">เลขที่คำขอ</div>
                    <div className="request_no">{events}</div>
                    <div className="time">14:00</div>
                    <div className="date">23-08-66</div>
                    <div className="name">งานบวช นาคสมชาย ณ สุรนารี</div>
                  </div>
                <div className="request_note">
                   <div className="note">หมายเหตุ :</div>
                    <div className="noteInfrom">เนื่องจากมีกิจกรรมแจ้งขอจัดมาก่อนหน้านี้แล้ว</div>   
                </div>
                   
            </div>
            <div className="request_detail ">
                <div className="status">
                    <div className="blockStatus">
                        <div className="statusHand">สถานะ</div>
                        <div className="value">อนุมัติ</div>
                    </div>
                </div>
                <div className="request_data2">
                    <div className="data2">
                        <div className="dataTital">วันที่</div> 
                        <div className="dataD">30-09-66</div>
                        <div className="dataTital">รายนามเจ้าภาพ</div> 
                        <div className="dataD">1. นายบุญเหลือ มะเขีอเปาะ</div>
                        <div className="dataTital">มหรสพ</div> 
                        <div className="dataD">ไม่มี</div>
                    </div>
                    <div className="data2">
                        <div className="dataTital">เบอร์โทรศัพท์</div> 
                        <div className="dataD">0444444444</div>
                        <div className="dataTital">สถานที่</div> 
                        <div className="dataD">111/3 บ.สุรนารี ต.สุรนารี อ.เมืองนครราชสีมา จ.นครราชสีมา, ศาลาวัด</div>
                        <div className="dataTital">รายละเอียดเพิ่มเติม</div> 
                        <div className="dataD">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, praesentium.</div>
                        <div className="dataD">_</div>
                    </div>
                </div>
                <div className="request_edit">
                    <Link className="btn edit" to="#">แก้ไข</Link>
                    <Link className="btn delete" to="#">ยกเลิก</Link>
                </div> */}
    </>
  );
}

export default EventRequestHistory;
