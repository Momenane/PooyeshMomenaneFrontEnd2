import React, { useState } from "react";
import vlimg from '../../../assets/volunteer-notCompleete.png'
import BgVolunteerForm from '../components/BgVolunteerForm'
import VolunteerForm from "./VolunteerForm";
import { LinkButton } from "../../../components/Button";
import "./index.css";

export default (props) => {

  return (
    <>
      <div className="row p-0 m-0" style={{ height: "100vh" }}>
        <div className="col-md-5 col-sm-12 p-0 m-0 ">
          <VolunteerForm 
            groupName={props.groupName}
            leaderName={props.leaderName}
            leaderLastName={props.leaderLastName}
            leaderPhonenumber={props.leaderPhonenumber}
            urgentNumber={props.urgentNumber}
            volunteerAddress={props.volunteerAddress}
            onChange={props.onChange}
          />
          <div style={{ width: 300, marginRight: "auto", marginLeft: "auto" }}>
            <LinkButton name="ثبت و ادامه" to="/volunteer/step3" />
          </div>
        </div>
        <div
          className="col-md-7 p-0 m-0 d-md-block d-none"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <BgVolunteerForm
            src={vlimg}
            title="همدلی مومنانه"
            subTitle="باهم به یاری هموطنانمان برویم و خوشحالشان کنیم
            و کمی از درگیری های ذهنیشان را کم کنیم"
          />
        </div>
      </div>
    </>
  );
};
