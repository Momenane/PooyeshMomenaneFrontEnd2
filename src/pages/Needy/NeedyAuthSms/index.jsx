import React, { useState } from "react";
import formImg3 from "../../../assets/form-img3.svg";
import BgNeedyForm from "../components/BgNeedyForm";
import ListGroup from "../../../components/ListGroup";
import { LinkButton } from "../../../components/Button";
import "./index.css";
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
          <BgNeedyForm
            src={formImg3}
            Tape1="ما همراهتان هستيم و خواهيم بود"
            Tape2="تا حامی و یاری رسانتان باشیم"
            widthImg="320px"
            heightImg="357px"
            bottomImg="40px"
            leftImg="10%"
          />
          {/* <Link to="/needy/step2">قدم بعد</Link> */}
        </div>
      </div>
    </>
  );
};
