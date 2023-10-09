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
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  const [evetStatus, setEventStatus] = useState();
  const geteventRequersts = async () => {
    let res = await GetRequests();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setRequest(res);
  };
  useEffect(() => {
    geteventRequersts();
  }, []);
  console.log(eventRequersts)
  return (
    <>
      {eventRequersts.map((e, index) => (
        <div className="requestEvent-item data" key={index}>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{e.ID}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{(e.UpdatedAt)?.slice(0,10)}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{e.WatID}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <Link to="./eventUserDetails">
                  <span>คลิกเพื่อดูข้อมูล</span>
              </Link>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{e.StatusID}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{e.StatusID}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
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
    </>
  );
}

export default EventRequestHistory;

