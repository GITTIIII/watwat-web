import { ItemUsesInterface } from "../../../interfaces/IItemUse";

const apiUrl = "http://localhost:8080";

async function GetItemUse() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let res = await fetch(`${apiUrl}/itemUsesA`, requestOptions)
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

async function GetItemUseById(id: Number | undefined) {
    const requestOptions = {
      method: "GET",
    };
  
    let res = await fetch(`${apiUrl}/itemUsesB/${id}`, requestOptions)
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

async function CreateItemUse(data: ItemUsesInterface) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    let res = await fetch(`${apiUrl}/item_uses`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return { status: true, message: res.data };
        } else {
          return { status: false, message: res.error };
        }
      });
  
    return res;
}

async function UpdateItemUse(data: ItemUsesInterface) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    let res = await fetch(`${apiUrl}/itemUses`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return { status: true, message: res.data };
        } else {
          return { status: false, message: res.error };
        }
      });
  
    return res;
}

async function DeleteItemUse(id: Number | undefined) {
    const requestOptions = {
      method: "DELETE",
    };
  
    let res = await fetch(`${apiUrl}/itemUses/${id}`, requestOptions)
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
    GetItemUse, // in controller dont'have
    GetItemUseById, // have
    CreateItemUse, // have
    UpdateItemUse, // have
    DeleteItemUse, // have -> change name
};