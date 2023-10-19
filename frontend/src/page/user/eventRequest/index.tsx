import React, { useState, useEffect } from "react";
import "./eventRequest.css";
import EventRequestHistory from "./eventRequestHistory/eventRequestHistory";
import { Link } from "react-router-dom";
import { Pagination,Select  } from "antd";
import { RequestInterface } from "../../../interfaces/IRequest";
import { GetRequests, GetRequestsEventNotNull } from "../../../services/https/request";
import Cookies from "js-cookie";

function EventRequest() {
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const watID = Cookies.get("watID");
  const memberID = Cookies.get("memberID");
  const itemsPerPage = 11;
  const filteredDataMember = eventRequersts.filter(item => item.MemberID === Number(memberID));
  const [selectedWatId, setSelectedWatId] = useState("thisWat");
  const [selectedStatusId, setSelectedStatusId] = useState("all");
  const filteredDatawat = selectedWatId === "thisWat"
    ? filteredDataMember.filter(item => item.WatID === Number(watID))
    : selectedWatId === "allWat" ? filteredDataMember
    : filteredDataMember;
  const filteredData = selectedStatusId === "all"
    ? filteredDatawat
    : filteredDatawat.filter(item => item.StatusID === Number(selectedStatusId));
  const diplayfilteredData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const geteventRequersts = async () => {
    let res = await GetRequestsEventNotNull();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setRequest(res);
  };

  useEffect(() => {
    geteventRequersts();
  }, []);
  
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
            <div className="requestEvent-itemtr">
              <EventRequestHistory data={diplayfilteredData} />
            </div>
          </div>
          <div className="filterPage request">
            <div className="filter request">
             <Select
              className="filter-item request "
              value={selectedWatId}
              onChange={value => setSelectedWatId(value)}
            >
              <Select.Option value="thisWat">เฉพาะวัดนี้</Select.Option>
              <Select.Option value="allWat">วัดทั้งหมด</Select.Option>
            </Select>
             <Select
              className="filter-item request"
              value={selectedStatusId}
              onChange={value => setSelectedStatusId(value)}
              >
              <Select.Option value="all">ทั้งหมด</Select.Option>
              <Select.Option value="1">รออนุมัติ</Select.Option>
              <Select.Option value="2">อนุมัติ</Select.Option>
              <Select.Option value="3">ไม่อนุมัติ</Select.Option>
            </Select>
            </div>
            <div className="paganav">
              {filteredData.length > itemsPerPage && (
                <Pagination
                  className="paginationEventrequest"
                  current={currentPage}
                  total={filteredData.length}
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

export default EventRequest;
