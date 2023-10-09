import React, { useState, useEffect } from "react";
import "./eventRequestHistory.css";
import { Space, Table, Button, Col, Row, Divider, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { EventRequestsInterface } from "../../interfaces/IEventRequest";
import { GetEvents } from "../../services/https/event";
import { GetStatusById, GetStatuses } from "../../services/https/status";
import { RequestInterface } from "../../interfaces/IRequest";
import { GetRequests } from "../../services/https/request";
function EventRequestHistory() {
  const [eventRequersts, setEvetns] = useState<RequestInterface[]>([]);
  const [evetStatus, setEventStatus] = useState();
  const geteventRequersts = async () => {
    let res = await GetRequests();
    if (res) {
      setEvetns(res);
    }
  };
  useEffect(() => {
    geteventRequersts();
  }, []);

  return (
    <>
      {eventRequersts.map((e, index) => (
      <div className="requestEvent-item data" key={index}>
            <div className="dataItem" >
              <span>{e.ID}</span>
            </div>
            <div className="dataItem">
              <span>{e.ID}</span>
            </div>
            {/* <div className="dataItem">
              <span>{event.WatID}</span>
            </div>
            <div className="dataItem">
              <span>{event.organizerName}</span>
            </div>
            <div className="dataItem">
              <Link to={event.linkToDetails}>
                <span>คลิกเพื่อดูข้อมูล</span>
              </Link>
            </div>
            <div className="dataItem">
              <span>{event.status}</span>
            </div>
            <div className="dataItem">
              <span>{event.otherData}</span>
            </div>  */}
          </div>
        ))}
    </>
  );
}

export default EventRequestHistory;

{
  /* <div className="request_edit">
                <Link className="btn edit" to="#">
                  แก้ไข
                </Link>
                <Link className="btn delete" to="#">
                  ยกเลิก
                </Link>
              </div> */
}
{
  /* <div className="dataEventRequestColunm">
          <div className="dataItem">
            <span>1001</span>
          </div>
          <div className="dataItem">
            <span>1002</span>
          </div>
        </div>
        <div className="dataEventRequestColunm">
          <div className="dataItem">
            <span>22/04/2566</span>
          </div>
          <div className="dataItem">
            <span>18/08/2566</span>
          </div>
        </div>
        <div className="dataEventRequestColunm">
          <div className="dataItem">
            <span>นายภูวดล ศรีธร</span>
          </div>
          <div className="dataItem">
            <span>นายณฐพล ศักวิบูลเดชา</span>
          </div>
        </div>
        <div className="dataEventRequestColunm">
          <div className="dataItem">
            <Link to="./eventDetails">
              <span>คลิกดพื่อดูข้อมูล</span>
            </Link>
          </div>
          <div className="dataItem">
            <Link to="./eventDetails">
              <span>คลิกดพื่อดูข้อมูล</span>
            </Link>
          </div>
        </div>
        <div className="dataEventRequestColunm">
          <div className="dataItem">
            <span>รออนุมัติ</span>
          </div>
          <div className="dataItem">
            <span>อนุมัติ</span>
          </div>
        </div>
        <div className="dataEventRequestColunm">
          <div className="dataItem">
            <span>-</span>
          </div>
          <div className="dataItem">
            <span>จัดแล้ว</span>
          </div>
        </div> */
}
