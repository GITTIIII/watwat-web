// import { HostsInterface } from "../../../interfaces/IHost";
import { EventRequestsInterface } from "../../../interfaces/IEventRequest";
const apiUrl = "http://localhost:8080";

async function GetHosts() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/hosts`, requestOptions)
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
// getEvent #x ../services/https/event"

async function DeleteHostByID(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE"
  };

  let res = await fetch(`${apiUrl}/hosts/${id}`, requestOptions)
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

async function GetHostById(id: Number | undefined) {
  const requestOptions = {
    method: "GET"
  };

  let res = await fetch(`${apiUrl}/hosts/${id}`, requestOptions)
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


// async function CreateHost(data: EventsInterface) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };

//   let res = await fetch(`${apiUrl}/hosts`, requestOptions)
//     .then((response) => response.json())
//     .then((res) => {
//       if (res.data) {
//         return { status: true, message: res.data };
//       } else {
//         return { status: false, message: res.error };
//       }
//     });

//   return res;
// }

// async function UpdateHost(data: HostsInterface) {
//   const requestOptions = {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };

//   let res = await fetch(`${apiUrl}/hosts`, requestOptions)
//     .then((response) => response.json())
//     .then((res) => {
//       if (res.data) {
//         return { status: true, message: res.data };
//       } else {
//         return { status: false, message: res.error };
//       }
//     });

//   return res;
// }

export {
  GetHosts,
  DeleteHostByID,
  GetHostById,
  // CreateHost,
  // UpdateHost
};
