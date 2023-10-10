import React from "react";
import "./eventRequest.css";
import EventRequestHistory from "./eventRequestHistory/eventRequestHistory";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function EventRequest() {
  return (
    <div className="warpper">
      <div className="contant">
        <div className="heandcontantdata">
          <div className="heandpagedata title">กิจกรรมที่แจ้งขอจัด</div>
          <div className="heandpagedata addEvent">
            <Link to="./createEventRequest">+ ขอจัดกิจกรรม</Link>
          </div>
        </div>
        <div className="eventRequestHistory">
            <div className="table-data">
              <div className="requestEvent-item th">
                <div className="title-name">
                  <span>เลขที่คำขอ</span>
                </div>
                <div className="title-name">
                  <span>วันที่</span>
                </div>
                <div className="title-name">
                  <span>วัด</span>
                </div>
                <div className="title-name">
                  <span>รายละเอียด</span>
                </div>
                <div className="title-name">
                  <span>สถานะคำขอ</span>
                </div>
                <div className="title-name">
                  <span>ตัวเลือก</span>
                </div>
            </div>
            <div className="requestEvent-itemtr" >
              <EventRequestHistory />
            </div>
          </div>
          <div className="filterPage">
                <div className="filter">
                  <div className="filter-item all">
                    <span>ทั้งหมด</span>
                  </div>
                  <select className="filter-item"></select>
                  <select className="filter-item"></select>
                </div>
                <div className="paganav">เลื่อนหน้า</div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default EventRequest;
