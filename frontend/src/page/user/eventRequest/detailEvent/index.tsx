import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EventRequestsInterface } from "../../../../interfaces/IEventRequest";
import { GetEvents } from "../../../../services/https/event";
import { Form } from 'antd';
import './eventDetails.css';
function DetailEvent() {
  const navigate = useNavigate();
  const [events, setEvent] = useState<EventRequestsInterface[]>([]);
  const [evetStatus, setEventStatus] = useState();

  const getEvent = async () => {
    let res = await GetEvents();
    if (!Array.isArray(res)) {
      res = [res];
    }
    setEvent(res);
  };
  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      {events.map((e, index) => (
        <div className="warpperAddEvent details">
          <div className="contantAddEvent details">
            <div className="title">
              <span>รายละเอียดคำขอจัดกิจกรรม</span>
            </div>
            <div className="title nameEvent">
              <span>งานผ้าป่า</span>
            </div>
            <div className="requestEvent-detail">
              <div className="hostsName">
                {/* <div className='title-namedata'><span>เลขที่แจ้งคำขอ</span></div>
          <div className='title-namedata'><span>วันที่-เวลาที่ขอ</span></div>
          <div className="detail-data"><span>1001</span></div>
          <div className="detail-data"><span>15 กันยายน 2566 14.00</span></div> */}
                <div className="title-namedata">
                  <span>วันจัดงาน</span>
                </div>
                <div className="title-namedata">
                  <span>เบอร์โทรศัพท์</span>
                </div>
                <div className="detail-data">
                  <span>15 กันยายน 2566</span>
                </div>
                <div className="detail-data">
                  <span>0444444444</span>
                </div>
              </div>
              <div className="title-namedata">
                <span>สถานที่ภายนอกวัด</span>
              </div>
              <div className="detail-data">
                <span>บ้านเลขที่ 4.00 หมู่ A ต.SA อ.CPE จ.SUT</span>
              </div>
              <div className="title-namedata">
                <span>รายนามเจ้าภาพ</span>
              </div>
              <div className="hostsName">
                <div className="detail-data">
                  <span>นายณฐพล ศักวิบูลเดชา</span>
                </div>
                <div className="detail-data">
                  <span>นายณฐพล ศักวิบูลเดชา</span>
                </div>
                <div className="detail-data">
                  <span>นายณฐพล ศักวิบูลเดชา</span>
                </div>
                <div className="detail-data">
                  <span>นายณฐพล ศักวิบูลเดชา</span>
                </div>
                <div className="detail-data">
                  <span>นายณฐพล ศักวิบูลเดชา</span>
                </div>
                <div className="detail-data">
                  <span>นายณฐพล ศักวิบูลเดชา</span>
                </div>
              </div>
              <div className="title-namedata">
                <span>รายละเอียดเพิ่มเติม</span>
              </div>
              <div className="detail-data">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  veniam eos ratione. Sed velit ipsam temporibus ex quis
                  pariatur tempore voluptate ad, minima mollitia ipsa veritatis
                  provident. Eum, ex alias.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Fugit veniam eos ratione. Sed
                  velit ipsam temporibus ex quis pariatur tempore voluptate ad,
                  minima mollitia ipsa veritatis provident. Eum, ex alias.
                </span>
              </div>
            </div>
            <Form className="formNote">
              <div className="้note">
                <span>ระบุหมายเหตุ: </span>
              </div>
              <input type="text" className="้noteData" />
            </Form>
            <div>
              <div className="filterPage">
                <div className="filter">
                  <div className="filter-item back">
                    <Link to="../requsetEvent">
                      <span>ย้อนกลับ</span>
                    </Link>
                  </div>
                </div>
                <div className="filter"></div>
                <div className="filter"></div>
                <div className="filter">
                  <div className="filter-item Approv">
                    <span>อนุมัติ</span>
                  </div>
                  <div className="filter-item notApprov">
                    <span>ไม่อนุมัติ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DetailEvent;
