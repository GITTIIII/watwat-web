import React from 'react';
import EventRequestHistory from '../../../component/eventRequestHistory/eventRequestHistory';
import {
BrowserRouter as Router,Link,} from "react-router-dom";
import SidebarCreater from '../../../component/sidebar/sidebarCreator';
import '../../user/eventRequest/eventRequest.css';
import './requestEvent.css';
function AddEvent() {
  return (
        <div className='warpper'>
          <div className="contant">
            <div className="heandcontantdata">
              <div className="heandpagedata title">กิจกรรมที่แจ้งจัด</div>
              <div className='heandpagedata addEvent'><Link to="./createEvent">+ ขอจัดกิจกรรม</Link></div>
            </div>
            <div className="eventRequestHistory" >
              <EventRequestHistory />
            </div>
          </div>
        </div>
  );
}

export default AddEvent;
