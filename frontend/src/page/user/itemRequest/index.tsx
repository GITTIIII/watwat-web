import { Link } from "react-router-dom";
// import "./itemPage.css"
const ItemRequest = () => {
  return (
    <>
      <div className="content">
        <div className="head-content"><b>กรอกรายละเอียดการยืม/คืน :</b></div>
          <div className="main-box">

            <div className="text-long">
              *หากบันทึกรายการยืมแล้ว ระบบแจ้งว่า “ยังไม่อนุมัติ” เป็นตัวหนังสือ<b id="fontred1">สีแดง</b>ให้อ่านรายละเอียดที่
              <b id="fontred2">หมายเหตุ</b> เพื่อตรวจสอบและแก้ไขข้อมูล ถ้าขึ้นเป็นตัวหนังสือ<b id="fontblack">สีดำ</b>ให้รอการอนุมัติจาก Creator
            </div>

            <div className="textHead1" id="colorBox">
              <b>ชื่อผู้ยืม*</b>
              <input type="text" placeholder="ชื่อจริง นามสกุล"></input>
            </div>
            <div className="textHead2" id="colorBox">
              <b>วันที่ยืม*</b>
              <input type="date"></input>
            </div>
            <div className="textHead3" id="colorBox">
              <b>กำหนดคืน*</b>
              <input type="date"></input>
            </div>
            <div className="textHead4" id="colorBox">
              <b>วันที่คืน</b>
              <input type="date"></input>
            </div>

            <div className="listItem"><b>รายการสิ่งของ</b></div>

              <div className="boxList">
                <div className="codeItem">รหัสสิ่งของ</div>
                  <div className="box-codeItem">
                      <input type="text" placeholder="W0000"></input>                 
                      <input type="text" placeholder="W0000"></input>                    
                      <input type="text" placeholder="W0000"></input>         
                  </div>
              </div>

            <div className="nameItem" >ชื่อสิ่งของ</div>

                <div className="box-nameItem">
                  <select id="myComboBox" className="combo-box">
                    <option value="0">- Select -</option>
                    <option value="1">เก้าอี้แดง</option>
                    <option value="2">เก้าอี้น้ำเงิน</option>
                    <option value="3">พัดลม</option>
                  </select>
                  <select id="myComboBox" className="combo-box1">
                    <option value="0">- Select -</option>
                    <option value="1">เก้าอี้แดง</option>
                    <option value="2">เก้าอี้น้ำเงิน</option>
                    <option value="3">พัดลม</option>
                  </select>
                  <select id="myComboBox" className="combo-box2">
                    <option value="0">- Select -</option>
                    <option value="1">เก้าอี้แดง</option>
                    <option value="2">เก้าอี้น้ำเงิน</option>
                    <option value="3">พัดลม</option>
                  </select>
                </div>
              
          
            <div className="yItem">จำนวนยืม</div>

              <div className="box-yItem">
                  <input type="text" placeholder="0"/>
                  <input type="text" placeholder="0"/>            
                  <input type="text" placeholder="0"/>            
              </div> 

            <div className="kItem">จำนวนคืน</div>

              <div className="box-kItem">
                  <input type="text" placeholder="0"/>             
                  <input type="text" placeholder="0"/>
                  <input type="text" placeholder="0"/>
              </div>
 
            <div className="submit_button">
              <Link to ='/ShowDataPage'>บันทึก</Link>
            </div>

          </div>
        </div>
    </>
  )
};

export default ItemRequest;
