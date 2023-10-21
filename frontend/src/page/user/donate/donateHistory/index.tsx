import { ColumnsType } from 'antd/es/table';
import { DonateInterface } from '../../../../interfaces/IDonate';
import { MembersInterface } from '../../../../interfaces/IMember';
import '../donate.css';
import React, { useEffect, useState } from 'react';
import { Table, message, } from "antd";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from "react-router-dom";
import { GetDonateListForMember, GetDonateSumForMember } from "../../../../services/https/donate";
import { GetMemberById } from "../../../../services/https/member";
import Cookies from "js-cookie";


export default function Index() {

    const memberID = Cookies.get("memberID");
    let getMemberID = 0;
    if (memberID !== undefined) {
        getMemberID = parseInt(memberID, 10);
    }


    const columns: ColumnsType<DonateInterface> = [
        {
            title: "หมายเลขบริจาค",
            dataIndex: "ID",
            key: "id",
        },

        {
            title: "ชื่อสิ่งของ",
            dataIndex: "Thing_name",
            key: "thing_name",
        },

        {
            title: "จำนวนสิ่งของ",
            dataIndex: "Thing_amount",
            key: "lastname",
        },

        {
            title: "ชื่อผู้ส่ง",
            dataIndex: "Sender_name",
            key: "sender_name",
        },

        {
            title: "วันที่จัดส่ง",
            dataIndex: "Send_at",
            key: "send_at",
        },

        {
            title: "บริษัทที่จัดส่ง",
            dataIndex: "ShippingAgent",
            key: "shipping_agent",
            render: (item) => Object.values(item.Shipping_agent_name),

        },

        {
            title: "เลขพัสดุ",
            dataIndex: "Shipping_id",
            key: "shipping_id",
        },

        {
            title: "สถานะ",
            dataIndex: "DonateStatus",
            key: "donateStatus",
            render: (item) => Object.values(item.Status_name),
        },

    ];


    const navigate = useNavigate();

    const [donates, setDonates] = useState<DonateInterface[]>([]);


    const [messageApi, contextHolder] = message.useMessage();

    const member_id = getMemberID;

    const getDonates = async (Member_id: Number) => {
        let res = await GetDonateListForMember(Member_id);
        if (res) {
            setDonates(res);
        }
        else {
            messageApi.open({
                type: "error",
                content: "เกิดข้อผิดพลาดในการแสดงข้อมูล !",
            });
        };
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
            console.error('Error fetching data:', error);
        }
    };

    const [DonateSum, setDonateSum] = useState({
        Sum_Thing_amount: 0,
    });

    const getDonateSum = async (id: Number) => {
        try {
            let res = await GetDonateSumForMember(id);
            if (res) {
                setDonateSum({
                    Sum_Thing_amount: res,
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getDonates(member_id);
        getMember(member_id);
        getDonateSum(member_id);
    }, []);


    return (
        <>
            <div className="blackbbbbg">
                <br />
                {contextHolder}
                <div className="middle_container">
                    <div className="titleBar">
                        <h2>ประวัติการบริจาค</h2>
                    </div>
                </div>
                <br />
                <div className="middle_container">
                    <div className="beforesplit">
                        <div className="grid-container3-1Cgap">
                            <div className="grid-item1">
                                <div className="middle_container">
                                    <div className="bodyx">

                                        <br />
                                        <div className="middle_container">

                                            <div className="instruction">
                                                <h3>ประวัติการบริจาคของคุณ</h3>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="middle_container">
                                            <div className="tableFrame">
                                                <Table rowKey="ID" columns={columns} dataSource={donates} />
                                            </div>
                                        </div>

                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item1">
                                <div className="middle_container">
                                    <div className="bodyx">
                                        <div>
                                            <br />
                                            <div className="middle_container">
                                                <div className="instruction2">
                                                    <h3>ข้อมูลการบริจาค</h3>
                                                </div>
                                                <br />
                                            </div>

                                            <br />

                                            <div className="decobox">

                                                <label>ชื่อผู้ใช้งาน: {member.Username}</label>

                                            </div>

                                            <div className="decobox2">
                                                <label>บริจาคทั้งสิ้น:</label>
                                            </div>
                                            <div className="decobox3">
                                                <label>{DonateSum.Sum_Thing_amount} ชิ้น</label>
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