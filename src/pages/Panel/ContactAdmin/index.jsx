import React, { useState } from "react";
import AsideBar from "../components/AsideBar";
import Navbar from "../components/Navbar";
import logo from '../../../assets/panel-teamLogo.png'
import { Link } from "react-router-dom";
import "./index.css";
import Title from "../components/Title";

export default (props) => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("")
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="d-flex"
      style={{ backgroundColor: "#F5F5F5", height: "100vh" }}
    >
      <AsideBar toggle={toggle} name="contactAdmin" />
      <div
        className={
          toggle ? "panel-container active p-0" : "panel-container p-0"
        }
      >
        <Navbar handleToggle={handleToggle} />
         <div style={{width:'95%',marginRight:'auto',marginLeft:'auto'}}>
           <Title 
           title="ثبت درخواست یا پیشنهاد"
           marginTop={"50px"}
            backgroundColor={"#F5F5F5"}
            top={"-40px"}
            />
         </div>
        <div className="panel-contactAdminContainer">
          <div className="col-md-6 col-sm-12 mr-md-3 mr-0" style={{position:'relative'}}>
            <div className="panel-contactAdminTeamName">
                <div className="col-md-6 col-sm-12 panel-contactAdminTeamNameColRight">
                   <h3>گروه جهادی فاطمیون</h3>
                   <p>نام سر تیم : علی غیبگو</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <p>آدرس ایمیل شما :example@makeen.com </p>
                </div>
               <div className="panel-contactAdminTeamNameLogo d-md-block d-none">
                  <img src={logo} alt="logo"/>
              </div> 
            </div>
              <span className="panel-shadow d-md-block d-none"></span>
          </div>
          <div className="col-md-6 col-sm-12">
            <form className="contactAdminContainer" onClick={()=>{console.log('aa')}}>
              <label className="contactAdminLabel" htmlFor="contactAdminTextArea"> موضوع</label>
               <textarea 
               value={text}
               onChange={(e)=>setText(e.target.value)}
               className="contactAdminTextArea" 
               name="contactAdmin"
                cols="30" 
                rows="10"/>
                <button className="btn btn-contactAdmin"> ارسال</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
