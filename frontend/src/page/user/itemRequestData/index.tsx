import React from 'react';
import './ItemRequestData.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { MembersInterface } from "../../../interfaces/IMember";
import { GetMemberById } from "../../../services/https/member";
import { ItemsInterface } from "../../../interfaces/IItem";
import { StatusesInterface } from '../../../interfaces/IStatus';

function ItemRequestData() {

// ------------------------------------------------------------ getMember
const [member, setMember] = useState<MembersInterface>({
  Username: "",
});

const getMember = async (id: Number) => {
    try {
        let res = await GetMemberById(id);
        if (res) {
            setMember({
                Username: res.Username,
            });
        }
    } catch (error) {
        console.log(member);
        console.error('Error fetching data:', error);
    }
};

var Member_ID = 1; // 1 = siriphobmean (username)
useEffect(() => {
  getMember(Member_ID);
}, []);
// ------------------------------------------------------------ Item ID, NAME
const [item1, setItem1] = useState<ItemsInterface>({
  ID: 0, // edit!
}); // รหัสสิ่งของ

const [itemName1, setItemName1] = useState<ItemsInterface>({
  // ItemName: "เก้าอี้แดง", // edit to use -> getItemNameByID
  Name: "",
})

const [item2, setItem2] = useState<ItemsInterface>({
  ID: 0, // edit!
}); // รหัสสิ่งของ

const [itemName2, setItemName2] = useState<ItemsInterface>({
  Name: "", // edit to use -> getItemNameByID
})

const [item3, setItem3] = useState<ItemsInterface>({
  ID: 0, // edit!
}); // รหัสสิ่งของ

const [itemName3, setItemName3] = useState<ItemsInterface>({
  Name: "", // edit to use -> getItemNameByID
})
// ------------------------------------------------------------ Status NAME
const [status1, setStatus1] = useState<StatusesInterface>({
  // StatusName: "รออนุมัติ", // edit to use -> getStatusByID
  StatusName: "",
})

const [status2, setStatus2] = useState<StatusesInterface>({
  StatusName: "", // edit to use -> getStatusByID
})

const [status3, setStatus3] = useState<StatusesInterface>({
  StatusName: "", // edit to use -> getStatusByID
})
// ------------------------------------------------------------

  return (
    <div className="background">
      <div className="boxList-new">
        <div className="out-content"><b>รายการยืม/คืนล่าสุด</b></div>
      <div className="boxList-new1">
        <div className="out-content0"><b>ชื่อผู้ยืม</b></div>
        <div className="out-content1">
          <div className="out-contentHead">
            {member.Username}
          </div>
        </div>
      </div>
      </div>
      <div className="button-edit">
        <Link to ='/ItemRequest'>แก้ไขข้อมูล</Link>
      </div>
      <div className="content-new">
        <div className="boxListShow">
          <div className="data-codeItem">รหัสสิ่งของ</div>
          <div className="data-BoxcodeItem">
              <div className="data-codecodeItem">
                <input type="text" value={item1.ID} placeholder="0"></input>
              </div>
              <div className="data-codecodeItem1">
                <input type="text" value={item2.ID} placeholder="0"></input>
              </div>
              <div className="data-codecodeItem2">
              <input type="text" value={item3.ID} placeholder="0"></input>
              </div>
          </div>
          <div className="data-nameItem">ชื่อสิ่งของ</div>
          <div className="data-BoxnameItem">
              <div className="data-codenameItem">
                <input type="text" value={itemName1.Name} placeholder='ชื่อสิ่งของ'></input>
              </div>
              <div className="data-codenameItem1">
                <input type="text" value={itemName2.Name} placeholder='ชื่อสิ่งของ'></input>
              </div>
              <div className="data-codenameItem2">
              <input type="text" value={itemName3.Name} placeholder='ชื่อสิ่งของ'></input>
              </div>
          </div>
          <div className="data-yItem">จำนวนยืม</div>
          <div className="data-BoxyItem">
              <div className="data-codeyItem">
                <input type="text" placeholder="0"></input>
              </div>
              <div className="data-codeyItem1">
                <input type="text" placeholder="0"></input>
              </div>
              <div className="data-codeyItem2">
                <input type="text" placeholder="0"></input>
              </div>
          </div>
          <div className="data-kItem">จำนวนคืน</div>
          <div className="data-BoxkItem">
              <div className="data-codekItem">
                <input type="text" placeholder="0"></input>
              </div>
              <div className="data-codekItem1">
                <input type="text" placeholder="0"></input>
              </div>
              <div className="data-codekItem2">
                <input type="text" placeholder="0"></input>
              </div>
          </div>
          <div className="data-Status">สถานะ</div>
          <div className="data-BoxStatus">
              <div className="data-codeStatus">
                <input type="text" value={status1.StatusName} placeholder='รออนุมัติ/รออนุมัติ'></input>
              </div>
              <div className="data-codeStatus1">
                <input type="text" value={status2.StatusName} placeholder='รออนุมัติ/รออนุมัติ'></input>
              </div>
              <div className="data-codeStatus2">
                <input type="text" value={status3.StatusName} placeholder='รออนุมัติ/รออนุมัติ'></input>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemRequestData;