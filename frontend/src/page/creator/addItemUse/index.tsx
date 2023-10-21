import React from "react"; 
import { Link, NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, message } from "antd";
import "./AddItemRequest.css"; // edit watwat-web

import { MembersInterface } from "../../../interfaces/IMember"; // have
import { GetMemberById } from "../../../services/https/member"; // have
import { GetItem } from "../../../services/https/item"; // have
import { ItemsInterface } from "../../../interfaces/IItem"; // have
import { ItemUsesInterface } from "../../../interfaces/IItemUse";
import { CreateItemUse } from "../../../services/https/itemUse";
import Cookies from "js-cookie";

function AddItemRequest() {

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

  // const CookieWat = Cookies.get("watID");

  const watID = Cookies.get("watID");
  let getwatID = 0;
  if (watID !== undefined) {
    getwatID = parseInt(watID, 10);
  }
  const memberID = Cookies.get("memberID");
  let getMemberID = 0;
  if (memberID !== undefined) {
    getMemberID = parseInt(memberID, 10);
  }

  // console.log("MeanMeanMean", CookieWat);

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
    // values.WatID = CookieWat;
    console.log(values);

    let res = await CreateItemUse(values);
    if (res.status) {
        messageApi.open({
            type: "success",
            content: "บันทึกข้อมูลสำเร็จ",
        });
        setTimeout(function() {
          navigate("/ItemRequest/ItemRequestData");
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

  var Member_ID = getMemberID;
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
    <div className="background-ct">
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className="content-ct">
          <div className="head-content-ct">
            <b>กรอกรายละเอียดการยืม/คืน :</b>
          </div>
          <div className="text-long-ct">
            *หากบันทึกรายการยืมแล้ว ระบบจะแจ้งสถานะ <b>“อนุมัติ”</b> ให้ทันที
          </div>
          <div className="textHead1-ct" id="colorBox-ct">
            <b>ชื่อผู้ยืม*</b>
            <div className="textHeadShow-ct" id="colorBoxShow-ct">
              <div className="textHeadShow1-ct">{member.Username}</div>
            </div>
          </div>
          <div className="textHead2-ct" id="colorBox-ct">
            <b>วันที่ยืม*</b>
            <input type="date" name="Borrowed_date" required onChange={handleInput} />
          </div>
          <div className="textHead3-ct" id="colorBox-ct">
            <b>กำหนดคืน*</b>
            <input type="date" name="Due_date" required onChange={handleInput} />
          </div>
          <div className="textHead4-ct" id="colorBox-ct">
            <b>วันที่คืน</b>
            <input type="date" name="Return_date" onChange={handleInput} />
          </div>
          <div className="listItem-ct">
            <b>รายการสิ่งของ</b>
          </div>
          <div className="boxList-ct">
            <div className="codeItem-ct">รหัสสิ่งของ</div>
            <div className="box-codeItem-ct">
              <div className="code-codeItem-ct">
                <input type="text" value={item1.ID} placeholder="0"></input>
              </div>
              <div className="code-codeItem1-ct">
                <input type="text" value={item2.ID} placeholder="0"></input>
              </div>
              <div className="code-codeItem2-ct">
                <input type="text" value={item3.ID} placeholder="0"></input>
              </div>
            </div>
            <div className="nameItem-ct">ชื่อสิ่งของ</div>
            <div className="box-nameItem-ct">
              <div className="code-nameItem-ct">
                <select
                  id="myComboBox-ct"
                  className="combo-box-ct"
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
                  id="myComboBox-ct"
                  className="combo-box1-ct"
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
                  id="myComboBox-ct"
                  className="combo-box2-ct"
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
            <div className="yItem-ct">จำนวนยืม</div>
            <div className="box-yItem-ct">
              <div className="code-yItem-ct">
                <input type="number" name="Item_Use_AmountOne" placeholder="0" onChange={handleInput} />
              </div>
              <div className="code-yItem1-ct">
              <input type="number" name="Item_Use_AmountTwo" placeholder="0" onChange={handleInput} />
              </div>
              <div className="code-yItem2-ct">
              <input type="number" name="Item_Use_AmountThree" placeholder="0" onChange={handleInput} />
              </div>
            </div>
            <div className="kItem-ct">จำนวนคืน</div>
            <div className="box-kItem-ct">
              <div className="code-kItem-ct">
                <input type="number" name="Item_Use_ReturnOne" placeholder="0" onChange={handleInput} />
              </div>
              <div className="code-kItem1-ct">
              <input type="number" name="Item_Use_ReturnTwo" placeholder="0" onChange={handleInput} />
              </div>
              <div className="code-kItem2-ct">
              <input type="number" name="Item_Use_ReturnThree" placeholder="0" onChange={handleInput} />
              </div>
            </div>
          </div>
        </div>
        <div className="save-button-ct">
            <button className="save-button1-ct" type="submit">บันทึก</button>
        </div>
      </form>
    </div>
  );
}

export default AddItemRequest;
