import React from "react"; 
import { Link, NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, message } from "antd";
import "./ItemRequest.css"; // edit watwat-web

import { MembersInterface } from "../../../interfaces/IMember"; // have
import { GetMemberById } from "../../../services/https/member"; // have
import { GetItem } from "../../../services/https/item"; // have
import { ItemsInterface } from "../../../interfaces/IItem"; // have
import { ItemUsesInterface } from "../../../interfaces/IItemUse";
import { CreateItemUse } from "../../../services/https/itemUse";

function ItemRequest() {

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const [input1, setInput] = useState<ItemUsesInterface>({
    Borrowed_Date: "",
    Due_Date: "",
    Return_Date: "",
    Item_Use_AmountOne: 0,
    Item_Use_ReturnOne: 0,
    Item_Use_AmountTwo: 0,
    Item_Use_ReturnTwo: 0,
    Item_Use_AmountThree: 0,
    Item_Use_ReturnThree: 0,
  });

  const handleInput = (e: any) => {
    setInput({ ...input1, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sentItemUseData(input1);
    console.log(input1);
  };

  const sentItemUseData = async (values: ItemUsesInterface) => {
    values.Borrowed_Date = input1.Borrowed_Date;
    values.Due_Date = input1.Due_Date;
    values.Return_Date = input1.Return_Date;
    values.Item_Use_AmountOne = parseInt(input1.Item_Use_AmountOne!.toString(), 10);
    values.Item_Use_ReturnOne = parseInt(input1.Item_Use_ReturnOne!.toString(), 10);
    values.Item_Use_AmountTwo = parseInt(input1.Item_Use_AmountTwo!.toString(), 10);
    values.Item_Use_ReturnTwo = parseInt(input1.Item_Use_ReturnTwo!.toString(), 10);
    values.Item_Use_AmountThree = parseInt(input1.Item_Use_AmountThree!.toString(), 10);
    values.Item_Use_ReturnThree = parseInt(input1.Item_Use_ReturnThree!.toString(), 10);
    console.log(values);

    let res = await CreateItemUse(values);
    if (res.status) {
        messageApi.open({
            type: "success",
            content: "บันทึกข้อมูลสำเร็จ",
        });
        setTimeout(function() {
          navigate("/ShowDataPage");
        }, 2000);
    } else {
        messageApi.open({
            type: "error",
            content: "บันทึกข้อมูลไม่สำเร็จ",
        });
    }
  };

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
      console.error("Error fetching data:", error);
    }
  };

  var Member_ID = 4;
  useEffect(() => {
    getMember(Member_ID);
    getItemListName();
  }, []);

  const [item1, setItem1] = useState<ItemsInterface>({
    ID: 1,
  });

  const [item2, setItem2] = useState<ItemsInterface>({
    ID: 1,
  });

  const [item3, setItem3] = useState<ItemsInterface>({
    ID: 1,
  });

  const [itemID, setItemID] = useState<ItemsInterface[]>([]);

  const getItemListName = async () => {
    let res = await GetItem();
    if (res) {
      setItemID(res);
    }
  };

  const handleChange1 = (e: any) => {
    setItem1({
      ID: e.target.value,
    });
  };

  const handleChange2 = (e: any) => {
    setItem2({
      ID: e.target.value,
    });
  };

  const handleChange3 = (e: any) => {
    setItem3({
      ID: e.target.value,
    });
  };

  return (
    <div className="background">
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className="content">
          <div className="head-content">
            <b>กรอกรายละเอียดการยืม/คืน :</b>
          </div>
          <div className="text-long">
            *หากบันทึกรายการยืมแล้ว ระบบแจ้งว่า <b>“รออนุมัติ”</b> ให้รอการอนุมัติจาก
            Creator แต่ถ้ามีการแจ้งกลับมาว่า <b>“ยังไม่อนุมัติ”</b> ให้อ่านรายละเอียดที่
            <b id="fontred2">หมายเหตุ</b> เพื่อตรวจสอบและทำการแก้ไขข้อมูล
          </div>
          <div className="textHead1" id="colorBox">
            <b>ชื่อผู้ยืม*</b>
            <div className="textHeadShow" id="colorBoxShow">
              <div className="textHeadShow1">{member.Username}</div>
            </div>
          </div>
          <div className="textHead2" id="colorBox">
            <b>วันที่ยืม*</b>
            <input type="date" name="Borrowed_date" required onChange={handleInput} />
          </div>
          <div className="textHead3" id="colorBox">
            <b>กำหนดคืน*</b>
            <input type="date" name="Due_date" required onChange={handleInput} />
          </div>
          <div className="textHead4" id="colorBox">
            <b>วันที่คืน</b>
            <input type="date" name="Return_date" onChange={handleInput} />
          </div>
          <div className="listItem">
            <b>รายการสิ่งของ</b>
          </div>
          <div className="boxList">
            <div className="codeItem">รหัสสิ่งของ</div>
            <div className="box-codeItem">
              <div className="code-codeItem">
                <input type="text" value={item1.ID} placeholder="0"></input>
              </div>
              <div className="code-codeItem1">
                <input type="text" value={item2.ID} placeholder="0"></input>
              </div>
              <div className="code-codeItem2">
                <input type="text" value={item3.ID} placeholder="0"></input>
              </div>
            </div>
            <div className="nameItem">ชื่อสิ่งของ</div>
            <div className="box-nameItem">
              <div className="code-nameItem">
                <select
                  id="myComboBox"
                  className="combo-box"
                  onChange={handleChange1}
                  onSelect={handleChange1}
                >
                  {itemID.map((item) => (
                    <option value={item.ID} key={item.Name}>
                      {item.Name}
                    </option>
                  ))}
                </select>
                <select
                  id="myComboBox"
                  className="combo-box1"
                  onChange={handleChange2}
                  onSelect={handleChange2}
                >
                  {itemID.map((item) => (
                    <option value={item.ID} key={item.Name}>
                      {item.Name}
                    </option>
                  ))}
                </select>
                <select
                  id="myComboBox"
                  className="combo-box2"
                  onChange={handleChange3}
                  onSelect={handleChange3}
                >
                  {itemID.map((item) => (
                    <option value={item.ID} key={item.Name}>
                      {item.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="yItem">จำนวนยืม</div>
            <div className="box-yItem">
              <div className="code-yItem">
                <input type="number" name="Item_Use_AmountOne" placeholder="0" onChange={handleInput} />
              </div>
              <div className="code-yItem1">
              <input type="number" name="Item_Use_AmountTwo" placeholder="0" onChange={handleInput} />
              </div>
              <div className="code-yItem2">
              <input type="number" name="Item_Use_AmountThree" placeholder="0" onChange={handleInput} />
              </div>
            </div>
            <div className="kItem">จำนวนคืน</div>
            <div className="box-kItem">
              <div className="code-kItem">
                <input type="number" name="Item_Use_ReturnOne" placeholder="0" onChange={handleInput} />
              </div>
              <div className="code-kItem1">
              <input type="number" name="Item_Use_ReturnTwo" placeholder="0" onChange={handleInput} />
              </div>
              <div className="code-kItem2">
              <input type="number" name="Item_Use_ReturnThree" placeholder="0" onChange={handleInput} />
              </div>
            </div>
          </div>
        </div>
        <div className="save-button">
            <button className="save-button1" type="submit">บันทึก</button>
        </div>
      </form>
    </div>
  );
}

export default ItemRequest;
