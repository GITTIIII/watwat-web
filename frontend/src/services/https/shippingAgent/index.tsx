import { DonateInterface } from "../../../interfaces/IDonate";
const apiUrl = "http://localhost:8080";

async function GetShippingAgentList() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    let res = await fetch(`${apiUrl}/GetShippingAgentList`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
            } else {
                return false;

            }
        });
    return res;
}

export {
    GetShippingAgentList
};