import React, { useState, useEffect } from "react";
import "./eventRequestHistory.css";
import {  message, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { EventRequestsInterface } from "../../../../interfaces/IEventRequest";
import { DeleteEventByID, GetEvents } from "../../../../services/https/event";
import { GetStatusById, GetStatuses } from "../../../../services/https/status";
import { RequestInterface } from "../../../../interfaces/IRequest";
import { DeleteRequestByID, GetRequests } from "../../../../services/https/request";
function EventRequestHistory() {
  const navigate = useNavigate();
  const [event, setEvents] = useState<RequestInterface[]>([]);

  const [messageApi, contextHolder] = message.useMessage();
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  // const [evetStatus, setEventStatus] = useState();
  const geteventRequersts = async () => {
    let res = await GetRequests();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setRequest(res);
  };
  // Model
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState<String>();
  const [deleteEventId, setDeleteEventId] = useState<Number>();
  const [deleteRequestId, setDeleteRequestId] = useState<Number>();

  const showModal = (val: RequestInterface) => {
    setModalText(`คุณต้องการลบคำขอกิจกรรมเลขที่คำขอ " ${val.ID} " หรือไม่ ?`);
    setDeleteEventId(val.EventID);
    setDeleteRequestId(val.ID);
    setOpen(true);
  };
  const handleOk = async () => {
    setConfirmLoading(true);
    let res = await DeleteEventByID(deleteEventId);
    let res1 = await DeleteRequestByID(deleteRequestId);
    if (res & res1) {
      setOpen(false);
      messageApi.open({
        type: "success",
        content: "ลบข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } else {
      setOpen(false);
      messageApi.open({
        type: "error",
        content: "เกิดข้อผิดพลาด !",
      });
    }
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  useEffect(() => {
    geteventRequersts();
  }, []);
  return (
    <>
      {contextHolder}
      {eventRequersts.map((e, index, array) => (
        <div className="requestEvent-item data" key={index}>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{e.ID}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{e.UpdatedAt?.slice(0, 10)}</span>
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
              <div className="request_edit">
                <button
                  className="btn edit"
                  onClick={() => navigate(`/eventRequest/edit/${e.ID}`)}
                >
                  แก้ไข
                </button>
                <button className="btn delete" onClick={() => showModal(e)}>
                  ยกเลิก
                </button>
                <Modal
                  title="ลบข้อมูล ?"
                  open={open}
                  onOk={handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <p>{modalText}</p>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default EventRequestHistory;
