import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './donate.css';
import { WatsInterface } from "../../../interfaces/IWat";
import { GetWatById } from "../../../services/https/wat";
import Cookies from "js-cookie";

export default function Index() {

  const watID = Cookies.get("watID");
  let getwatID = 0;
  if (watID !== undefined) {
    getwatID = parseInt(watID, 10);
  }


  const [data, setData] = useState<WatsInterface>({
    Name: "",
    Address: "",
    Postcode: "",
    District: "",
    Subdistrict: "",
  });


  const getWatById = async (id: Number) => {
    try {
      let res = await GetWatById(id);
      if (res) {
        setData({
          Name: res.Name,
          Address: res.Address,
          Postcode: res.Postcode,
          District: res.District,
          Subdistrict: res.Subdistrict,
        });
      }
    } catch (error) {
      console.log(data);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getWatById(getwatID);
  }, []);

  return (
    <>
      <div className="blackbbbbg">
        <br />
        <div className="middle_container">
          <div className="grid-container1-5C">
            <div className="grid-itemTitle">
              <div className="paddingbutton">
                <Link to="/donate/donateHistory">
                  <button className="histbutton">
                    ประวัติการบริจาค
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid-itemTitle">
              <h2>บริจาคสิ่งของออนไลน์</h2>
            </div>

          </div>
        </div>
        <br />
        <div className="middle_container">
          <div className="beforesplit">
            <div className="grid-container3-1C">
              <div className="grid-item1">
                <div className="middle_container">
                  <div className="bodyfull">
                    <div className="middle_container">
                      <div className="textrow">
                        <h3>ขั้นตอนการบริจาคสิ่งของออนไลน์</h3>
                      </div>
                    </div>
                    <br />
                    <div className="middle_container">
                      <div className="centerBox">
                        <div className="middle_container">
                          <h3>ขั้นตอนการบริจาคสิ่งของออนไลน์</h3><br />
                        </div>
                        <br />
                        <div className="middle_container">
                          <div>
                            <label>1.ทำการจัดส่งสิ่งของผ่านไปรษณีย์</label><br />
                            <label>2.กดปุ่มแจ้งบริจาคสิ่งของ ด้านล่าง</label><br />
                            <label>3.กรอกข้อมูล และ อัปโหลดรูปสลิป</label><br />
                            <label>4.กดปุ่มยืนยัน</label><br />
                          </div>
                        </div>
                        <br />


                        <div className="middle_container">
                          <div className="paddingbutton">
                            <Link to="/donate/donateThing">
                              <button className="yellowbutton">
                                แจ้งบริจาคสิ่งของ
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-item1">
                <div className="middle_container">
                  <div className="bodyfull">

                    <div className="middle_container">
                      <div className="instruction2">
                        <h3>ช่องทางการบริจาคสิ่งของ</h3>
                      </div>
                    </div>
                    <br />


                    <div className="middle_container">
                      <div className="watInfo">
                        <div className="middle_container">
                          <div className="nameBox">

                            <label>วัด: {data.Name}</label>

                          </div>
                        </div>
                        <br />
                        <div className="middle_container">
                          <div className="addressBox">
                            <div className="grid-container2C">
                              <div className="grid-itemTPR">
                                <label>ที่อยู่:</label>
                              </div>
                              <div className="grid-item2TPR">
                                <label>{data.Address}</label>
                              </div>
                              <div className="grid-itemTPR">
                                <label>รหัสไปรษณีย์:</label><br />
                              </div>
                              <div className="grid-item2TPR">
                                <label>{data.Postcode}</label><br />
                              </div>
                              <div className="grid-itemTPR">
                                <label>อำเภอ:</label><br />
                              </div>
                              <div className="grid-item2TPR">
                                <label>{data.District}</label><br />
                              </div>
                              <div className="grid-itemTPR">
                                <label>ตำบล:</label><br />
                              </div>
                              <div className="grid-item2TPR">
                                <label>{data.Subdistrict}</label><br />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div >
      </div>

    </>
  );
}
