import React, { useState } from "react";
import vlbg from "../../../assets/volunteer-complete.png";
import BgVolunteerForm from "../components/BgVolunteerForm";
import AuthCodeSms from "../../../components/AuthCodeSms";
// import { Link } from 'react-router-dom'
export default () => {
  const [SMS, setSMS] = useState("")
  return (
    <>
      <div className="row p-0 m-0" style={{ height: "100vh" }}>
        <div
          className="col-md-5 col-sm-12 p-0 m-0"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "cneter",
            justifyContent: "center",
          }}
        >
          <AuthCodeSms
          onChange={(e)=>setSMS(e.target.value)}
          value={SMS}
          placeholder="کد را وارد کنید"
          />
        </div>
        <div
          className="col-md-7 p-0 m-0 d-md-block d-none"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <BgVolunteerForm
            src={vlbg}
            title="همدلی مومنانه"
            subTitle="با هـم بستگی گرو ه هـای جهادی
            کمک به نیازمندان راحت تر میشود."
           
          />
        </div>
      </div>
    </>
  );
};
