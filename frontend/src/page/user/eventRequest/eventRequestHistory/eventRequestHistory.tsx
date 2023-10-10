import React, { useState, useEffect } from "react";
import "./eventRequestHistory.css";
import { message, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { DeleteEventByID } from "../../../../services/https/event";
import { GetStatuses } from "../../../../services/https/status";
import { RequestInterface } from "../../../../interfaces/IRequest";
import {DeleteRequestByID, GetRequests,} from "../../../../services/https/request";
import { StatusesInterface } from "../../../../interfaces/IStatus";
import { WatsInterface } from "../../../../interfaces/IWat";
import { GetWat } from "../../../../services/https/wat";

function EventRequestHistory() {
  const navigate = useNavigate();
  const [wats, setWats] = useState<WatsInterface[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [eventRequersts, setRequest] = useState<RequestInterface[]>([]);
  const [status, setStatus] = useState<StatusesInterface[]>([]);
  const geteventRequersts = async () => {
    let res = await GetRequests();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setRequest(res);
  };
  const getStatus = async () => {
    let res = await GetStatuses();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setStatus(res);
  };
  const getWats = async () => {
    let res = await GetWat();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setWats(res);
  };
  const getStatusNameById = (id: number | undefined) => {
    if (id === undefined) {
      return "Unknown Status"; // Provide a default value when StatusID is undefined
    }
    const statusObject = status.find((status) => status.ID === id);
    return statusObject ? statusObject.StatusName : "Unknown Status";
  };
  const getNameWatNameById = (id: number | undefined) => {
    if (id === undefined) {
      return "Unknown wat"; // Provide a default value when StatusID is undefined
    }
    const watObject = wats.find((wats) => wats.ID === id);
    return watObject ? watObject.Name : "Unknown wat";
  };
  // Model
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState<String>();
  const [deleteEventId, setDeleteEventId] = useState<Number>();
  const [deleteRequestId, setDeleteRequestId] = useState<Number>();

  const showModal = (val: RequestInterface) => {
    setModalText(`คุณต้องการลบคำขอกิจกรรมเลขที่คำขอ " ${val.ID} " จากวัด "${getNameWatNameById(val.WatID)}" หรือไม่ ?`);
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
    getStatus();
    getWats();
  }, []);
   
  console.log(wats[2]);
  console.log("wats");
  return (
    <>
      {contextHolder}
      {eventRequersts.map((e, index) => (
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
              <span>{getNameWatNameById(e.WatID)}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <button
                className="btndata"
                onClick={() => navigate(`/eventRequest/detail/${e.EventID}`)}
              >
                <span>คลิกเพื่อดูข้อมูล</span>
              </button>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{getStatusNameById(e.StatusID)}</span>
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
