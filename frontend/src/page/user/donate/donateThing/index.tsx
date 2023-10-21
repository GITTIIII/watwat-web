import '../donate.css';
import { message } from "antd";
import { Link, useNavigate, } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { DonateInterface } from "../../../../interfaces/IDonate";
import { ShippingAgentInterface } from "../../../../interfaces/IShippingAgent";
import { GetShippingAgentList } from "../../../../services/https/shippingAgent";
import { CreateDonate } from "../../../../services/https/donate";
import Cookies from "js-cookie";

export default function Index() {

    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

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

    const [input, setInput] = useState({
        Thing_name: "",
        Thing_amount: 0,
        Sender_name: "",
        Send_at: "",
        Shipping_id: "",
        ShippingAgentID: 1,
        DonateStatusID: 3,
        MemberID: getMemberID,
        WatID: getwatID,
    });


    const handleInput = (e: any) => {
        if (e.target.name === "ShippingAgentID") {
            setInput({ ...input, [e.target.name]: parseInt(e.target.value, 10), });
        }
        else {
            setInput({ ...input, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sentDonateData(input);
    };

    const sentDonateData = async (values: DonateInterface) => {
        values.Thing_name = input.Thing_name
        values.Thing_amount = parseInt(input.Thing_amount.toString(), 10);
        values.Sender_name = input.Sender_name
        values.Send_at = input.Send_at
        values.Shipping_id = input.Shipping_id
        values.ShippingAgentID = input.ShippingAgentID
        values.DonateStatusID = input.DonateStatusID
        values.MemberID = input.MemberID
        values.WatID = input.WatID


        let res = await CreateDonate(values);
        if (res.status) {
            messageApi.open({
                type: "success",
                content: "บันทึกข้อมูลสำเร็จ",
            });
            setTimeout(function () {
                navigate("/Donate");
            }, 2000);
        } else {
            messageApi.open({
                type: "error",
                content: "บันทึกข้อมูลไม่สำเร็จ",
            });
        }
    };


    const [pickShippingAgent, setShippingAgent] = useState<ShippingAgentInterface[]>([]);

    const getShippingAgent = async () => {
        let res = await GetShippingAgentList();
        if (res) {
            setShippingAgent(res);
        }

    }

    useEffect(() => {
        getShippingAgent();
    }, []);


    return (
        <>
            <div className="blackbbbbg">
            <br />
                {contextHolder}
                <div className="middle_container">

                    <div className="titleBar">
                        <h2>บริจาคสิ่งของออนไลน์</h2>
                    </div>
                </div>
                <br />
                <div className="middle_container">
                    <div className="body">
                        <div className="middle_container">
                            <div className="instruction">
                                <h3>กรุณากรอกข้อมูลให้เรียบร้อย</h3>
                            </div>
                        </div>
                        <br />
                        <form
                            onSubmit={handleSubmit}>
                            <div className="middle_container">

                                <div className="form">
                                    <div className="grid-container4C">

                                        <div className="grid-item">
                                            <label>ชื่อสิ่งของ :</label>
                                        </div>
                                        <div className="grid-item2">
                                            <input type="text" name="Thing_name" placeholder="ชื่อสิ่งของบริจาค.." required onChange={handleInput} />
                                        </div>

                                        <div className="grid-item">
                                            <label>จำนวนสิ่งของ :</label>
                                        </div>
                                        <div className="grid-item2">
                                            <input type="text" name="Thing_amount" placeholder="จำนวนเต็ม (1,2,3,...,)" required onChange={handleInput} />
                                        </div>

                                        <div className="grid-item">
                                            <label>ชื่อผู้จัดส่งสิ่งของ :</label>
                                        </div>
                                        <div className="grid-item2">
                                            <input type="text" name="Sender_name" placeholder="นางสมพร นอนน้อย.." required onChange={handleInput} />
                                        </div>

                                        <div className="grid-item">
                                            <label>วันที่จัดส่งสิ่งของ :</label>
                                        </div>
                                        <div className="grid-item2">
                                            <input type="date" name="Send_at" placeholder="Your name.." required onChange={handleInput} />
                                        </div>

                                        <div className="grid-item">
                                            <label>ช่องทางการจัดส่งสิ่งของ :</label>
                                        </div>
                                        <div className="grid-item2">
                                            <select title="agent" name="ShippingAgentID" required onChange={handleInput}>
                                                {pickShippingAgent.map((item) => (
                                                    <option value={item.ID} key={item.Shipping_agent_name}>{item.Shipping_agent_name}</option>
                                                )
                                                )

                                                }
                                            </select>
                                        </div>

                                        <div className="grid-item">
                                            <label>หมายเลขพัสดุ :</label>
                                        </div>
                                        <div className="grid-item2">
                                            <input type="text" id="Shipping_id" name="Shipping_id" placeholder="หมายเลขพัสดุ" required onChange={handleInput} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />
                            <div className="middle_container">
                                <div className="buttonspace">
                                    <div className="paddingbutton">
                                        <Link to="/donate">
                                            <button className="cancleButton">ยกเลิก</button>
                                        </Link>
                                    </div>
                                    <div className="paddingbutton">
                                        <button type="submit" className="confirmButton">ยืนยัน</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}