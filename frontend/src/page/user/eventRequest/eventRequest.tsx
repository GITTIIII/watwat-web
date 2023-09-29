import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import "../../../css/eventRequest.css";
import NavbarMain from "../../../component/navbar-main";
import Footer from "../../../component/footer";
const Event = () => {
  return (
    <>
      <header>
        <NavbarMain/>
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
          
        <div className='warpper'>
          <div className="heandcontantcreate">
            <div className="heandpage title">ขอจัดกิจกรรม</div>
            <div className='heandpage eventRequest'><Link to="../EventRequest">กิจกรรมที่แจ้งขอจัด</Link></div>
            <form className="formNameEvent">
              <input type="text" className="heandpage nameEvent" placeholder='กรอกชื่อกิจกรรม'/>
                <select name="eventType" id="eventType" className='selects' >
                  <option value="/">ประเภท</option>
                  <option value="merit">งานบุญ</option>
                  <option value="ordinationCeremony">งานบวช</option>
                  <option value="funeral">งานศพ</option>
                  <option value="other">อื่นๆ</option>
                </select>
            </form>
          </div>
          <form className="dataEvent">
            <div className="data hosts">
                <div className='plusHost'>
                  <label htmlFor="">รายนาม-เจ้าภาพ</label>
                  
                </div>
                <input type="text" name="" id="้host1" className="้host h1" placeholder='1.'/>
                <input type="text" name="" id="้host2" className="้host h2" placeholder='2.'/>
                <input type="text" name="" id="้host3" className="้host h3" placeholder='3.'/>
                {/* <input type="text" name="" id="้host4" className="้host h4" placeholder='4.'/>
                <input type="text" name="" id="้host5" className="้host h5" placeholder='5.'/>
                <input type="text" name="" id="้host5" className="้host h6" placeholder='6.'/> */}
            </div>
            <div className="data dateTimeEvent">
                <label htmlFor="">ระยะเวลา<span className='more dateTime'> (วัน-เวลา หากมีมหรสพให้รวมไปด้วย)</span></label>
                <div className="dateTimeData">
                  <label htmlFor="">วันเริ่มกิจกรรม</label>
                  <label htmlFor="">ถึง</label>
                    <input type="date" name="" id="" />
                    <input type="date" name="" id="" />
                  <label htmlFor="">เวลาเริ่มกิจกรรม</label>
                  <label htmlFor="">ถึง</label>
                  <input type="time" name="" id="" />
                    <input type="time" name="" id="" />
                </div>
            </div>
            
            {/* <div className="data3">
              <label htmlFor="">กิจกรรมนี้เป็นมหรศพของกิจกรรมอื่น</label>
              <p></p>
              <label htmlFor="">เลขที่คำขอกิจกรรม</label>
              <label htmlFor=""> (โปรดกรอกเลขที่กิจกรรมที่ท่านได้รับคำอนุมัติจัดกิจกรรมแล้ว)</label>
              <input type="text" name="" id="" />
            </div> */}
            <div className="data tel">
                <label htmlFor="" className='item'>เบอร์โทรศัพท์</label>
                <input type="tel" name="" id="" placeholder='กรอกเบอร์โทร Ex.04444444444' className='item'/>
            </div>
            <div className="data place">
              <label htmlFor="">สถานที่จัดงาน (ในวัด)</label>
              <label htmlFor="">เลขที่การจองสถานที่</label>
              <label htmlFor=""></label>
              <select name="eventType" id="place" className='selects' >
                  <option value="/">เลือกสถานที่</option>
                  <option value="merit">งานบุญ</option>
                  <option value="ordinationCeremony">งานบวช</option>
                  <option value="funeral">งานศพ</option>
                  <option value="other">อื่นๆ</option>
                </select>
                <input type="text" name="" id="" placeholder='เช่น. 1001' />
                
              </div>
              <div className="placeOut">
                <label htmlFor="">สถานที่จัดงาน (นอกวัด)</label>
                <input type="text" name="" id="" placeholder='กรอกที่ตั้ง เช่น 111/3 บ.สุรนารี ต.สุรนารี อ.เมืองนครราชสีมา จ.นครราชสีมา'/>
              </div>
            <div className="data entertrainment">
              <label htmlFor="">กิจกรรมนี้เป็นมหรสพใช่หรือไม่<span className='more'> (หากใช่กรุนากรอกเลขที่กิจกกรมที่เป็นกิจกรรมหลัก)</span></label>
              <div className='entertrainments'>
                <input type="radio" id="switch_left" name="switchToggle" value=""/> <label htmlFor="switch_left">ใช่</label>
                <input type="radio" id="switch_right" name="switchToggle" value="" /> <label htmlFor="switch_right">ไม่ใช่</label>
                {/* <IoIosAdd className='icon entertrainment'></IoIosAdd> */}
              </div>
              <input type="text" name="" id="" className='noEntertrainment' placeholder='เลขที่คำขอกิจกรรม'/>
            </div>
            <div className="data description">
              <label htmlFor="">คำอธิบายกิจกรรม</label>
              <textarea name="" id="description" ></textarea>
            </div>
            <div className='submitEventRequest'>
              
            </div>
          </form>
        </div>
    
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Event;
