import React, { useState, useEffect } from "react";
import "./eventRequest.css";
import EventRequestHistory from "./eventRequestHistory/eventRequestHistory";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { RequestInterface } from "../../../interfaces/IRequest";
import { GetRequests } from "../../../services/https/request";

function EventRequest() {
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;
  const displayedData = eventRequersts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

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
              <EventRequestHistory data={displayedData} />
            </div>
          </div>
          <div className="filterPage request">
            <div className="filter request">
              {/* <div className="filter-item allrequest">
                <span>ทั้งหมด</span>
              </div>
              <select className="filter-item request"></select>
              <select className="filter-item request"></select> */}
            </div>
            <div className="paganav">
              {eventRequersts.length > itemsPerPage && (
                <Pagination
                  className="paginationEventrequest"
                  current={currentPage}
                  total={eventRequersts.length}
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
