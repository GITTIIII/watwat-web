import { Link, useNavigate, } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './receiveDonate.css';
import { Button, message, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { DonateInterface } from '../../../interfaces/IDonate';
import { GetDonateListForWat, UpdateDonateStatusReceive, UpdateDonateStatusDecline } from "../../../services/https/donate";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import SidebarCreater from "../../../component/sidebar/sidebarCreater";

export default function Index() {
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
            key: "shippingAgent",
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
        {
            title: "จัดการ",
            dataIndex: "Manage",
            key: "manage",
            render: (text, record, index) => (
                <>
                    <Button

                        onClick={() => handleClick1(record.ID)}
                        shape="circle"
                        icon={<CheckOutlined />}
                        size={"large"} />

                    <Button
                        onClick={() => handleClick2(record.ID)}
                        shape="circle"
                        icon={<CloseOutlined />}
                        size={"large"}
                    />

                </>
            ),
        },
    ];

    const watID = Cookies.get("watID");
    let getwatID = 0;
    if (watID !== undefined) {
        getwatID = parseInt(watID, 10);
    }

    const [donates, setDonates] = useState<DonateInterface[]>([]);
    const [messageApi, contextHolder] = message.useMessage();
    const wat_id = getwatID;

    const getDonates = async (Wat_id: Number) => {
        let res = await GetDonateListForWat(Wat_id);
        if (res) {
            console.log(res);
            setDonates(res);
            messageApi.open({
                type: "success",
                content: "โหลดข้อมูลสำเร็จ",
            });
        }
        else {

            messageApi.open({
                type: "error",
                content: "เกิดข้อผิดพลาด !",
            });
        };
    };

    const navigate = useNavigate();

    const handleClick1 = (e: any) => {
        UpdateDonateStatusReceive(e);
        window.location.reload();
    }

    const handleClick2 = (e: any) => {
        UpdateDonateStatusDecline(e);
        window.location.reload();
    }

    useEffect(() => {
        getDonates(wat_id);
    }, []);

    return (

        <>
            <div className="warpperReceiveDonate">
                <div className="sidebarReceiveDonate">
                    <SidebarCreater></SidebarCreater>
                </div>
                <div className="contantReceiveDonate">
                    <br />
                    <div className="middle_container">

                        <div className="titleBar">
                            <h2>ข้อมูลบริจาค</h2>
                        </div>
                    </div>
                    <br />
                    <div className="middle_container">
                        <div className="body">
                            <div className="middle_container">
                                <div className="tableFrame">
                                    <Table rowKey="ID" columns={columns} dataSource={donates} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}