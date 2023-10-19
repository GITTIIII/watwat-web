import React from "react";
import { Link } from "react-router-dom";
import SidebarCreater from "../../../component/sidebar/sidebarCreater";
import './main.css';
function Main() {
  return (
    <div className="warpperMainCreator">
      <div className="sidebarCreator">
        <SidebarCreater></SidebarCreater>
      </div>
      <div className="contantMainCreator">
        Main
      </div>
    </div>
  );
}

export default Main;