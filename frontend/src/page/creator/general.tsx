import { useState } from "react";
import FormInput from "../../component/formInput";
import { WatsInterface } from "../../interfaces/IWat";
import { Form, message } from "antd";
//import { useNavigate } from "react-router-dom";
import { CreateWat } from "../../services/https/wat";

const General = () => {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState({
    Name: "",
    Abbot: "",
    Description: "",
    Address: "",
    Postcode: "",
    Province: "",
    District: "",
    Subdistrict: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "",
      label: "กรอกชื่อวัด",
    },
    {
      id: 2,
      name: "Abbot",
      type: "text",
      placeholder: "",
      label: "กรอกชื่อเจ้าอาวาส",
    },
    {
      id: 3,
      name: "Description",
      type: "text",
      placeholder: "",
      label: "กรอกชื่อวัด",
    },
    {
      id: 4,
      name: "Address",
      type: "text",
      placeholder: "",
      label: "กรอกชื่อวัด",
    },
    {
      id: 5,
      name: "Postcode",
      type: "text",
      placeholder: "",
      label: "กรอกชื่อวัด",
    },
    {
      id: 6,
      name: "Province",
      type: "text",
      placeholder: "",
      label: "กรอกชื่อวัด",
    },
    {
      id: 7,
      name: "District",
      type: "text",
      placeholder: "",
      label: "กรอกชื่อวัด",
    },
    {
      id: 8,
      name: "Subdistrict",
      type: "text",
      placeholder: "",
      label: "กรอกชื่อวัด",
    },
  ];

  const handleSubmit = async (values: WatsInterface) => {
    values.Name = value.Name;
    values.Abbot = value.Abbot;
    values.Description = value.Description;
    values.Address = value.Address;
    values.Postcode = value.Postcode;
    values.Province = value.Province;
    values.District = value.District;
    values.Subdistrict = value.Subdistrict;
    values.MemberID = 0;
    let res = await CreateWat(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      //   setTimeout(function () {
      //     navigate("/");
      //   }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  const onChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  console.log(value);
  return (
    <div className="general">
      {contextHolder}
      <Form onFinish={handleSubmit}>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} onChange={onChange} />
        ))}
        <button>ยืนยัน</button>
      </Form>
    </div>
  );
};

export default General;
