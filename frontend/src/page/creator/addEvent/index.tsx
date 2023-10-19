import React, { useState, useEffect } from "react";
import "../../user/eventRequest/eventRequestHistory/eventRequestHistory.css";
import EventRequestHistory from "./eventRequestHistory/eventRequestHistory";
import { Link } from "react-router-dom";
import { Pagination,Select  } from "antd";
import { RequestInterface } from "../../../interfaces/IRequest";
import {  GetRequestsEventNotNull } from "../../../services/https/request";
import Cookies from "js-cookie";
import { WatsInterface } from "../../../interfaces/IWat";
import { GetWatByCreatorID } from "../../../services/https/wat";

function AddEvent() {
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const memberID = Cookies.get("memberID");
  const itemsPerPage = 11;
  const geteventRequersts = async () => {
    let res = await GetRequestsEventNotNull();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setRequest(res);
  };
  const [wat, setWat] = useState<WatsInterface[]>([]);
  Cookies.set('watIDforCreator', `${wat[0]?.ID}` , { expires: 1 });
  const getWat = async () => {
    let res = await GetWatByCreatorID(Number(memberID));
    if (!Array.isArray(res)) {
      res = [res];
    }
    setWat(res);
  };

  useEffect(() => {
    geteventRequersts();
    getWat();
  }, []);
  const filteredDataMember = eventRequersts.filter(item => item.MemberID === Number(memberID));
  const diplayfilteredData = filteredDataMember.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="warpper">
      <div className="contant">
        <div className="heandcontantdata">
          <div className="heandpagedata title">กิจกรรมที่แจ้งขอจัด</div>
          <div className="heandpagedata addEvent">
            <Link to="./createEvents">+ ขอจัดกิจกรรม</Link>
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
                <span>ชื่อกิจกรรม</span>
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
            <div className="requestEvent-itemtr">
              <EventRequestHistory data={diplayfilteredData} />
            </div>
          </div>
          <div className="filterPage request">
            <div className="paganav">
              {filteredDataMember.length > itemsPerPage && (
                <Pagination
                  className="paginationEventrequest"
                  current={currentPage}
                  total={filteredDataMember.length}
                  pageSize={itemsPerPage}
                  showQuickJumper
                  showTotal={(total) => ` ${total} คำขอ`}
                  onChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
