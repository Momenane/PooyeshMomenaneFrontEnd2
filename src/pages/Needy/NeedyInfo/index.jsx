import React, { useState } from "react";
import formImg2 from "../../../assets/form-img2.svg";
import BgNeedyForm from "../components/BgNeedyForm";
import NeedyForm from "./NeedyForm";
import { LinkButton } from "../../../components/Button";
import "./index.css";

export default (props) => {
  const options = [
    { value: "پدر", label: "پدر" },
    { value: "مادر", label: "مادر" },
    { value: "پدربزرگ", label: "پدربزرگ" },
    { value: "مادربزرگ", label: "مادربزرگ" },
  ];


  return (
    <>
      <div className="row p-0 m-0" style={{ height: "100vh" }}>
        <div className="col-md-5 col-sm-12 p-0 m-0 ">
          <NeedyForm 
          options={options} 
          onChange={props.onChange}
          switchHandler={props.switchHandler}
          changeSelect={props.changeSelect}
          needyName={props.needyName}
          needyLastname={props.needyLastname}
          needyBirthDate={props.needyBirthDate}
          needyZipCode={props.needyZipCode}
          needyPhonenumber={props.needyPhonenumber}
          needyAddress={props.needyAddress}
          needyNumberOfMembers={props.needyNumberOfMembers}
          selectedItem={props.selectedItem}
          checkState={props.checkState}
          
          />
          <div style={{ width: 300, marginRight: "auto", marginLeft: "auto" }}>
            <LinkButton name="ثبت و ادامه" to="/needy/step3" />
          </div>
        </div>
        <div
          className="col-md-7 p-0 m-0 d-md-block d-none"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <BgNeedyForm
            src={formImg2}
            Tape1="ما گروه های جهادی را دور هم گرد آورده ایم"
            Tape2="تا همیشه در کنار شما عزیزان باشیم"
            widthImg="250px"
            heightImg="350px"
            bottomImg="35px"
            leftImg="9%"
          />
        </div>
      </div>
    </>
  );
};
