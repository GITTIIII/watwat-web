import React, { useState, useEffect } from "react";
import SidebarCreater from '../../../component/sidebar/sidebarCreater';
import EventRequestHistory from "./eventRequestHistory/eventRequestHistory";
import { Pagination,Select  } from "antd";
import { RequestInterface } from "../../../interfaces/IRequest";
import {  GetRequestsEventNotNull } from "../../../services/https/request";
import Cookies from "js-cookie";
import { WatsInterface } from "../../../interfaces/IWat";
import { GetWatByCreatorID } from "../../../services/https/wat";
import "../../user/eventRequest/eventRequestHistory/eventRequestHistory.css";
import './approv.css';

function ApproveEventEvent() {
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const memberID = Cookies.get("memberID");
  const itemsPerPage = 20;
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
  const filteredDataMember = eventRequersts.filter(item => item.WatID === Number(wat[0]?.ID));
  const [selectedStatusId, setSelectedStatusId] = useState("all");
  const filteredData = selectedStatusId === "all"
    ? filteredDataMember
    : filteredDataMember.filter(item => item.StatusID === Number(selectedStatusId));
  const diplayfilteredData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <div className="warpperMainCreator">
      <div className="sidebarCreator">
        <SidebarCreater></SidebarCreater>
      </div>
      <div className="contantMainCreator">
        <div className="eventRequestHistory">
          <div className="table-data Creator">
            <div className="requestEvent-item thappr">
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
                <span>วันที่เริ่มจัดกิจกรรม</span>
              </div>
              <div className="title-name">
                <span>สถานะคำขอ</span>
              </div>
              <div className="title-name">
                <span>รายละเอียด</span>
              </div>
            </div>
            <div className="requestEvent-itemtr appr">
              <EventRequestHistory data={diplayfilteredData.reverse()} />
            </div>
          </div>
          <div className="filterPage request">
            <div className="filter request">
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

export default ApproveEventEvent;
