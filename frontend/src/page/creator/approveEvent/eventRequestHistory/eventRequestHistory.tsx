import React, { useState, useEffect } from "react";
import "../../../user/eventRequest/eventRequestHistory/eventRequestHistory.css";
import { useNavigate } from "react-router-dom";
import { GetEvents } from "../../../../services/https/event";
import { GetStatuses } from "../../../../services/https/status";
import { RequestInterface } from "../../../../interfaces/IRequest";
import { StatusesInterface } from "../../../../interfaces/IStatus";
import { EventRequestsInterface } from "../../../../interfaces/IEventRequest";

interface EventRequestHistoryProps {
  data: RequestInterface[];
  } 

function EventRequestHistory({ data }: EventRequestHistoryProps) {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventRequestsInterface[]>([]);
  const [status, setStatus] = useState<StatusesInterface[]>([]);
  const getStatus = async () => {
    let res = await GetStatuses();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setStatus(res);
  };
  const getEventNameById = (id: number | undefined) => {
    if (id === undefined) {
      return "Unknown Status"; // Provide a default value when StatusID is undefined
    }
  const watbject = events.find((events) => events.ID === id);
    return watbject ? watbject.EventName : "Unknown Status";
  };
  const getEventDateEventById = (id: number | undefined) => {
    if (id === undefined) {
      return "Unknown Status"; // Provide a default value when StatusID is undefined
    }
  const watbject = events.find((events) => events.ID === id);
    return watbject ? watbject.DateBegin : "Unknown Status";
  };
  const getEvents = async () => {
    let res = await GetEvents();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setEvents(res);
  };
  const getStatusNameById = (id: number | undefined) => {
    if (id === undefined) {
      return "Unknown Status"; // Provide a default value when StatusID is undefined
    }
    const statusObject = status.find((status) => status.ID === id);
    return statusObject ? statusObject.StatusName : "Unknown Status";
  };
 
 

  useEffect(() => {
    getStatus();
    getEvents();
  }, []); 

  return (
    <>
      {data[0] ? (
      data.map((e, index) => (
        <div className="requestEvent-item dataapprov" key={index}>
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
              <span>{getEventNameById(e.EventID)}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{getEventDateEventById(e.EventID)}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <span>{getStatusNameById(e.StatusID)}</span>
            </div>
          </div>
          <div className="dataColounm">
            <div className="dataItem">
              <button
                className="btndata"
                onClick={() => navigate(`/approveEvent/detail/${e.EventID}`)}
              >
                <span>คลิกเพื่อดูข้อมูล</span>
              </button>
            </div>
          </div>
          {/* <div className="dataColounm">
            <div className="dataItem">
              <div className="request_edit">
                <button
                  className="btn edit"
                  onClick={() => navigate(`/eventRequest/edit/${e.EventID}`)}
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
          </div> */}
        </div>
      ))) : (
         <div></div>
      )}
    </>
  );
}

export default EventRequestHistory;
